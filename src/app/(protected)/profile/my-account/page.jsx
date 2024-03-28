import MyAccountSection from "@/sections/MyAccountSection/MyAccountSection";
import UserService from "@/services/UserService/UserService";
import React from "react";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";

const MyAccount = async () => {
    // const userInfo = getCookie("userInfo", { cookies });
    const token = getCookie("accessToken", { cookies });
    // const user = JSON.parse(userInfo);
    // console.log(token);

    // if (userInfo) {
    //     user = JSON.parse(userInfo?.value);
    // } else {
    //     console.error("User cookie is empty or undefined.");
    // }

    const userData = await UserService.getUserInfo(1);
    console.log(userData);

    return (
        <div className="flex justify-center items-center rounded-sm">
            <MyAccountSection data={userData?.body?.body?.user} />
        </div>
    );
};

export default MyAccount;
