import MakeApiCall from "../MakeApiCall";
import { MethodsStructure } from "../MethodsStructure";
import {
    GET_USER_ADDRESS,
    GET_USER_PROFILE,
    CHANGE_PASSWORD,
    CHANGE_EMAIL,
    VERIFY_OTP,
    IMAGE_UPLOAD,
    PROFILE_URL,
    CONTACTS,
    COMPANY_VAT_CODE_URL,
    NEWS_LETTER,
} from "@/helpers/apiURLS";

export default class UserService {
    static async getUserInfo(id, token) {
        try {
            const res = await MakeApiCall({
                apiUrl: GET_USER_PROFILE,
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
            ...MethodsStructure.getMethod({ Authorization: `${token}` }),
        });

        return res;
    }

    static async createUserAddress(data, token) {
        try {
            const res = await MakeApiCall({
                apiUrl: GET_USER_ADDRESS,
                body: { ...data },
                ...MethodsStructure.postMethod({ Authorization: `${token}` }),
            });
            if (res?.status === 200) {
                return res;
            }
        } catch (error) {
            console.error("Error in createUserAddress:", error);
        }
    }

    static async deleteUserAddress(id, token) {
        try {
            const res = await MakeApiCall({
                apiUrl: GET_USER_ADDRESS,
                query: { id },
                ...MethodsStructure.deleteMethod({ Authorization: `${token}` }),
            });
            if (res?.status === 200) {
                return res;
            }
        } catch (error) {
            // Handle error appropriately, e.g., throw or return an error object.
        }
    }

    static async updateUserAddress(id, data, token) {
        try {
            const res = await MakeApiCall({
                apiUrl: GET_USER_ADDRESS,
                query: { id },
                body: { ...data },
                ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
            });
            if (res?.status === 200) {
                return res;
            }
        } catch (error) {
            // Handle error appropriately, e.g., throw or return an error object.
        }
    }

    static async changePassword(data, token) {
        const res = await MakeApiCall({
            apiUrl: CHANGE_PASSWORD,
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

    static async convertImageToImageUrl(data, token) {
        try {
            const response = await fetch(IMAGE_UPLOAD, {
                method: "POST",
                cache: "no-store",
                body: data,
                headers: {
                    // Do not set Content-Type header, let the browser set it automatically
                    // "Content-Type": "multipart/form-data",
                    Authorization: `${token}`,
                },
            });

            const result = await response.json();
            return result;
        } catch (error) {
            console.error("Error:", error);
            return error;
        }
    }

    static async updateUserProfileImage(data, token) {
        const res = await MakeApiCall({
            apiUrl: PROFILE_URL,
            body: { ...data },
            ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
        });

        return res;
    }

    static async fetchUserInfo(token) {
        const responseData = await MakeApiCall({
            apiUrl: PROFILE_URL,
            ...MethodsStructure.getMethod({ Authorization: `${token}` }),
        });

        return responseData;
    }

    static async makeAContact(data) {
        return await MakeApiCall({
            apiUrl: CONTACTS,
            body: { ...data },
            ...MethodsStructure.postMethod(),
        });
    }

    static async updateCompanyVatCode(data, token) {
        const res = await MakeApiCall({
            apiUrl: COMPANY_VAT_CODE_URL,
            query: { ...data },
            ...MethodsStructure.patchMethod({ Authorization: `${token}` }),
        });

        return res;
    }

    static async subscribeNewsletter(data) {
        return await MakeApiCall({
            apiUrl: NEWS_LETTER,
            body: { ...data },
            ...MethodsStructure.postMethod(),
        });
    }
}
