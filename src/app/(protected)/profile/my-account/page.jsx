import MyAccountSection from "@/sections/MyAccountSection/MyAccountSection";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { MY_ACCOUNT_URL } from "@/helpers/apiURLS";
import MakeApiCall from "@/services/MakeApiCall";

async function getData(token) {
    const res = await MakeApiCall({
        apiUrl: MY_ACCOUNT_URL,
        headers: { Authorization: token },
    });
    return res;

}

const MyAccount = async () => {
    const token = getCookie("accessToken", { cookies });

    const userData = await getData(token);

    return (
        <div className="flex justify-center items-center rounded-sm">
            <MyAccountSection data={userData.user} />
        </div>
    );
};

export default MyAccount;
