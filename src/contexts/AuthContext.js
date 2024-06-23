import { createContext, useContext, useEffect, useState } from "react";
import { hasCookie, getCookie, deleteCookie, setCookie } from "cookies-next";
import {
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import { socialAuth } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { FACEBOOK_LOGIN_URL, GOOGLE_LOGIN_URL } from "@/helpers/apiURLS";
import MakeApiCall from "@/services/MakeApiCall";
import { toast } from "react-toastify";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);
    const [isLogin, setIsLogin] = useState(false);
    const router = useRouter();

    // if user already
    useEffect(() => {
        if (hasCookie("userInfo")) {
            setUserInfo(JSON.parse(getCookie("userInfo")));
        }
        if (hasCookie("accessToken")) {
            setIsLogin(true);
        }
    }, []);

    const handlePageTransition = (response) => {
        // Assuming your API returns a token in the response
        const token = response.token;
        const userInfo = response.user;

        // set userInfo and token inside a state
        setUserInfo(userInfo);
        setIsLogin(true);

        // Set the token and userInfo set inside cookie
        setCookie("accessToken", token, {
            maxAge: 60 * 60 * 12,
        });
        setCookie("userInfo", JSON.stringify(userInfo), {
            maxAge: 60 * 60 * 12,
        });
    };

    const handleSocialLogin = async (firebaseToken, apiEndPoint) => {
        try {
            let url = `${apiEndPoint}?firebaseToken=${firebaseToken}`;
            const res = await MakeApiCall({ apiUrl: url, method: "POST" });
            handlePageTransition(res);
            return res;
        } catch (error) {
            // console.error("Error in makeFacebookLogin:", error.message);
            throw new Error(error.message || "Something went wrong");
        }
    };

    const googleSingIn = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            if (socialAuth) {
                const result = await signInWithPopup(socialAuth, provider);
                const user = result.user;
                if (user) {
                    const res = await handleSocialLogin(
                        user?.accessToken,
                        GOOGLE_LOGIN_URL
                    );

                    toast.success("Successfully logged in!");
                    return res;

                    // if(res.status === 200){
                    //     toast.success(res.message)
                    // }
                }
            }
        } catch (error) {
            throw new Error(error.message || "Something went wrong");
            // throw error;
        }
    };

    const facebookSignIn = async () => {
        const provider = new FacebookAuthProvider();
        provider.setCustomParameters({
            display: "popup",
        });

        try {
            if (socialAuth) {
                const result = await signInWithPopup(socialAuth, provider);

                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                // const credential = FacebookAuthProvider.credentialFromResult(user?.accessToken);

                if (user) {
                    const res = await handleSocialLogin(
                        user?.accessToken,
                        FACEBOOK_LOGIN_URL
                    );

                    return res;
                }
            }
        } catch (error) {
            console.error("Error in facebookSignIn:", error);
            toast.error(error?.message);
            throw error;
        }
    };

    const logOut = () => {
        deleteCookie("userInfo");
        deleteCookie("accessToken");
        deleteCookie("selected_location");
        deleteCookie("selected_currency");
        setUserInfo(null);
        setIsLogin(false);
        signOut(socialAuth);
        toast.success("Successfully logged out!");
        router.push("/");
    };

    const values = {
        userInfo,
        setUserInfo,
        isLogin,
        setIsLogin,
        googleSingIn,
        facebookSignIn,
        logOut,
        handlePageTransition,
    };

    return (
        <AuthContext.Provider value={values}>{children}</AuthContext.Provider>
    );
}

export const useAuthContext = () => useContext(AuthContext);
