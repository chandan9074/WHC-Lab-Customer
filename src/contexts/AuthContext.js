import { createContext, useContext, useEffect, useState } from "react";
import { hasCookie, getCookie } from "cookies-next";
import {
    signInWithPopup,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    FacebookAuthProvider,
} from "firebase/auth";
import { socialAuth } from "@/config/firebase";
import { useRouter } from "next/navigation";

const authContext = createContext();

export function AuthProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);
    const router = useRouter();

    // if user already
    useEffect(() => {
        if (hasCookie("userInfo")) {
            setUserInfo(JSON.parse(getCookie("userInfo")));
        }
    }, []);

    const handlePageTransition = (res) => {
        if (res?.status === 200) {
            const token = res.body.token;
            const userInfo = res.body.user;
            // Set the token in a cookie
            Cookies.set("accessToken", token);
            Cookies.set("userInfo", JSON.stringify(userInfo));
            router.push("/");
        }
    };

    const handleGoogleLogin = async (data) => {
        console.log(data);
        // try {
        //     const res = await AuthService.googleLogin(data);

        //     if (res?.status === 200) {
        //         handlePageTransition(res);
        //     }
        // } catch (error) {
        //     console.error("Error in makeFacebookLogin:", error);
        // }
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
                    await handleGoogleLogin(user?.accessToken);
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
                    // await handleFacebookLogin(user?.accessToken);
                }
            }
        } catch (error) {
            console.error("Error in facebookSignIn:", error);
            throw error;
        }
    };

    const logOut = () => {
        signOut(socialAuth);
    };

    const values = {
        userInfo,
        setUserInfo,
        googleSingIn,
        facebookSignIn,
        logOut,
    };

    return (
        <authContext.Provider value={values}>{children}</authContext.Provider>
    );
}

export const useAuthContext = () => useContext(authContext);
