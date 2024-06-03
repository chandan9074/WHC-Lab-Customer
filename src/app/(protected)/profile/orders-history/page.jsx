import Orders from "@/sections/Profile/Orders";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { ORDERS_URL } from "@/helpers/apiURLS";
import MakeApiCall from "@/services/MakeApiCall";

async function getOderHistoryData(token) {
    const res = await MakeApiCall({
        apiUrl: ORDERS_URL,
        headers: { Authorization: token },
        query: { page: 1, limit: 6 },
    });
    return res;
}

const ActiveOrders = async () => {
    const token = getCookie("accessToken", { cookies });
    const orderData = await getOderHistoryData(token);
    console.log("orderData---------", orderData);

    return (
        <div className="py-6 md:py-12 sm:px-[0px] md:px-[10px] lg:px-[58px]">
            <Orders
                activeOrderList={orderData?.error ? [] : orderData?.docs}
                orderHistoryList={orderData?.error ? [] : orderData?.docs}
                data={orderData}
            />
        </div>
    );
};
export default ActiveOrders;
