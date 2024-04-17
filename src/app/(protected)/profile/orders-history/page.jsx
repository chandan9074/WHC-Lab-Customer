import Orders from "@/sections/Profile/Orders";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { ORDERS_URL } from "@/helpers/apiURLS";


async function getOderHistoryData(token) {
    const res = await fetch(ORDERS_URL, {
        headers: { Authorization: token },
    });
    return res.json();
}

const ActiveOrders = async () => {
    const token = getCookie("accessToken", { cookies });
    const orderData = await getOderHistoryData(token);

    return (
        <div className="py-6 md:py-12 sm:px-[0px] md:px-[10px] lg:px-[58px]">
            <Orders
                activeOrderList={orderData?.error ? [] : orderData?.docs}
                orderHistoryList={orderData?.error ? [] : orderData?.docs}
            />
        </div>
    );
};
export default ActiveOrders;
