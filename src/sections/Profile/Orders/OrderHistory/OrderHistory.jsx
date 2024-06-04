"use client";
import React, { useState } from "react";
import OrderItem from "../OrderItem";
import NoDataFound from "@/components/common/NoDataFound";
import { Pagination } from "antd";
import { getCookie } from "cookies-next";
import MakeApiCall from "@/services/MakeApiCall";
import { ORDERS_URL } from "@/helpers/apiURLS";

const OrderHistory = ({ orderHistoryList, data }) => {
    const [current, setCurrent] = useState(1);
    const [list, setList] = useState(orderHistoryList || []);
    const token = getCookie("accessToken");

    const onChange = async (page) => {
        console.log(page);
        const res = await MakeApiCall({
            apiUrl: ORDERS_URL,
            headers: { Authorization: token },
            query: { page: page, limit: 6 },
        });
        setList(res.docs);

        setCurrent(page);
    };
    // console.log(orderHistoryList);
    return (
        <div className="flex flex-col my-6 gap-4 px-4 md:px-0">
            {list.length > 0 ? (
                list.map((ele, index) => {
                    const createdAtDate = new Date(ele?.createdAt); // Convert createdAt to Date object if not already

                    return <OrderItem key={index} data={ele} />;
                })
            ) : (
                <NoDataFound message="No Oder History Found" />
            )}
            <div className="w-full flex justify-end mt-8">
                <Pagination
                    defaultCurrent={1}
                    current={current}
                    total={data?.totalDocuments}
                    pageSize={6}
                    onChange={onChange}
                />
            </div>
        </div>
    );
};

export default OrderHistory;
