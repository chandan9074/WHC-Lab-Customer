import { whcFetch } from "../BaseWHCHTTP";
import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";
import {
    GET_USER_INFO,
    GET_USER_ADDRESS,
    GET_USER_PROFILE,
    CHANGE_PASSWORD,
    CHANGE_EMAIL,
    VERIFY_OTP,
} from "@/helpers/apiURLS";

export default class UserService {
    static async getUserInfo(id, token) {
        try {
            const res = await whcFetch({
                endpoint: GET_USER_PROFILE,
                query: { id },
                ...MethodsStructure.getMethod({ Authorization: `${token}` }),
            });
            return res;
        } catch (e) {
            console.log(e);
        }
    }

    static async getUserAddress(token) {
        const res = await MakeApiCall({
            apiUrl: GET_USER_ADDRESS,
            // query: { id },
            // headers: { Authorization: `Bearer ${token}` },
            ...MethodsStructure.getMethod({ Authorization: `${token}` }),
        });

        return res;
    }

    static async createUserAddress(data, token) {
        try {
            const res = await whcFetch({
                endpoint: GET_USER_ADDRESS,
                body: { ...data },

                // headers: { Authorization: `Bearer ${token}` },
                ...MethodsStructure.postMethod({ Authorization: `${token}` }),
            });
            if (res?.status === 200) {
                return res;
            }
        } catch (error) {
            console.error("Error in createUserAddress:", error);
            // Handle error appropriately, e.g., throw or return an error object.
        }
    }

    static async deleteUserAddress(id, token) {
        try {
            const res = await whcFetch({
                endpoint: GET_USER_ADDRESS,
                query: { id },
                // headers: { Authorization: `Bearer ${token}` },
                ...MethodsStructure.deleteMethod({ Authorization: `${token}` }),
            });
            if (res?.status === 200) {
                return res;
            }
        } catch (error) {
            console.error("Error in createUserAddress:", error);
            // Handle error appropriately, e.g., throw or return an error object.
        }
    }

    static async updateUserAddress(id, data, token) {
        try {
            const res = await whcFetch({
                endpoint: GET_USER_ADDRESS,
                query: { id },
                body: { ...data },
                ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
            });
            if (res?.status === 200) {
                return res;
            }
        } catch (error) {
            console.error("Error in createUserAddress:", error);
            // Handle error appropriately, e.g., throw or return an error object.
        }
    }

    static async changePassword(data, token) {
        const res = await whcFetch({
            endpoint: CHANGE_PASSWORD,
            body: { ...data },
            ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
        });
        return res;
    }

    static async changeEmail(data, token) {
        const res = await MakeApiCall({
            apiUrl: CHANGE_EMAIL,
            body: { ...data },
            // query: { id },
            // headers: { Authorization: `Bearer ${token}` },
            ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
        });
        return res;
    }

    // data like = {action: "change_email", otp:123456, email:"abc@email.com"}
    static async verifyOTP(data, token) {
        const res = await MakeApiCall({
            apiUrl: VERIFY_OTP,
            body: { ...data },
            ...MethodsStructure.postMethod({ Authorization: `${token}` }),
        });

        return res;
    }
}
