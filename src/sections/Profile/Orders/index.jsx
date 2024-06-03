"use client";
import React, { useState } from "react";
import { Typography } from "antd";
import ActiveOrders from "./ActiveOrders/ActiveOrders";
import OrderHistory from "./OrderHistory/OrderHistory";

const { Text } = Typography;

const Orders = ({ activeOrderList, orderHistoryList, data }) => {
    const [activeTab, setActiveTab] = useState(true);
    const [current, setCurrent] = useState("mail");

    const onClick = (e) => {
        console.log("click ", e);
        // setCurrent(e.key);
    };
    return (
        <div className="">
            {/* Tab component */}
            <div className="flex-row w-full flex">
                {tab.map((ele, index) => (
                    <div
                        className={`w-1/2 flex items-center justify-center ${
                            activeTab == ele.status
                                ? "border-b-brand-blue-500"
                                : ""
                        } border-b-2 duration-200 pb-2`}
                        key={index}
                        onClick={() => setActiveTab(ele.status)}
                    >
                        <Text
                            className={` ${
                                activeTab === ele.status
                                    ? "text-brand-blue-500"
                                    : "text-neutral-300"
                            } font-bold text-[16px] cursor-pointer`}
                        >
                            {ele.name}
                        </Text>
                    </div>
                ))}
            </div>

            {activeTab ? (
                <ActiveOrders activeOrderList={activeOrderList} data={data} />
            ) : (
                <OrderHistory orderHistoryList={orderHistoryList} data={data} />
            )}
        </div>
    );
};

export default Orders;

const tab = [
    { name: "Active orders", status: true },
    { name: "Order history", status: false },
];
