import Orders from "@/sections/Profile/Orders";
import { orderData, orderHistory } from "@/libs/data";
// import { getCookie } from "cookies-next";
// import { cookies } from "next/headers";
// import OrderServiceProfile from "@/services/OrderServiceProfile";

const ActiveOrders = async () => {
    // const token = getCookie("accessToken", { cookies });
    // const getOrders = OrderServiceProfile.getOrders(token);
    // const [orderData] = await Promise.all([getOrders]);
    // console.log("****orderData", orderData);
    return (
        <div className="py-6 md:py-12 sm:px-[0px] md:px-[10px] lg:px-[58px]">
            <Orders
                activeOrderList={orderData}
                orderHistoryList={orderHistory}
            />
        </div>
    );
};
export default ActiveOrders;
