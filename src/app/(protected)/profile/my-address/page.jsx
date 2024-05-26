// import { getCookie } from "@/helpers/cookiesUtils";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { MY_ADDRESS_URL } from "@/helpers/apiURLS";
import MyAddressSection from "@/sections/MyAddressSection/MyAddressSection";
import MakeApiCall from "@/services/MakeApiCall";

async function getAddress(token) {
    const res = await MakeApiCall({
        apiUrl: MY_ADDRESS_URL,
        query: {
            page: 1,
            limit: 10,
        },
        headers: { Authorization: token },
    });
    return res;
}

const MyAddress = async () => {
    const token = getCookie("accessToken", { cookies });
    const addressData = await getAddress(token);

    return (
        <div className="flex justify-center items-center rounded-sm p-4 lg:py-12 lg:px-[58px]">
            <MyAddressSection data={addressData.docs} />
        </div>
    );
};

export default MyAddress;
