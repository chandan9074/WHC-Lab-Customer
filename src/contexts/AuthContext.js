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
        console.log("handlePageTransition(response);");
        // Assuming your API returns a token in the response
        const token = response.token;
        const userInfo = response.user;

        // set userInfo and token inside a state
        setUserInfo(userInfo);
        setIsLogin(true);

        // Set the token and userInfo set inside cookie
        setCookie("accessToken", token);
        setCookie("userInfo", JSON.stringify(userInfo));

        // You can use the router to navigate to home page
        router.push("/");
    };

    const handleSocialLogin = async (firebaseToken, apiEndPoint) => {
        try {
            let url = `${apiEndPoint}?firebaseToken=${firebaseToken}`;
            const res = await MakeApiCall({ apiUrl: url, method: "POST" });
            console.log(res);
            handlePageTransition(res);
        } catch (error) {
            console.error("Error in makeFacebookLogin:", error);
        }
    };

    const googleSingIn = async () => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({ prompt: "select_account" });

        try {
            if (socialAuth) {
                const result = await signInWithPopup(socialAuth, provider);
                const user = result.user;
                console.log(user);
                if (user) {
                    await handleSocialLogin(
                        user?.accessToken,
                        GOOGLE_LOGIN_URL
                    );
                }
            }
        } catch (error) {
            console.error("Error in google sign in:", error);
            throw error;
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
                    console.log(user);
                    await handleSocialLogin(
                        user?.accessToken,
                        FACEBOOK_LOGIN_URL
                    );
                }
            }
        } catch (error) {
            console.error("Error in facebookSignIn:", error);
            throw error;
        }
    };

    const logOut = () => {
        console.log("logout");
        deleteCookie("userInfo");
        deleteCookie("accessToken");
        setUserInfo(null);
        setIsLogin(false);
        signOut(socialAuth);
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
