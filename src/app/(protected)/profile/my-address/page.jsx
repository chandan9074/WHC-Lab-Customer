// import { getCookie } from "@/helpers/cookiesUtils";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import MyAddressSection from "@/sections/MyAddressSection/MyAddressSection";
import UserService from "@/services/UserService/UserService";
import { accountData } from "@/libs/myAccountData";

const MyAddress = async () => {
    const token = getCookie("accessToken", { cookies });
    // console.log(token);
    const userData = await UserService.getUserAddress(token);

    return (
        <div className="flex justify-center items-center rounded-sm p-4 lg:py-12 lg:px-[58px]">
            <MyAddressSection data={accountData.shippingAddresses} />
        </div>
    );
};

export default MyAddress;
