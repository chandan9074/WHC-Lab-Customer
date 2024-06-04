"use client";
import React, { useState } from "react";
import OrderItem from "../OrderItem";
import Link from "next/link";
import { ORDERS_HISTORY_PATH, TRACK_ORDER_PATH } from "@/helpers/slug";
import NoDataFound from "@/components/common/NoDataFound";
import { Pagination } from "antd";
import MakeApiCall from "@/services/MakeApiCall";
import { ORDERS_URL } from "@/helpers/apiURLS";
import { getCookie } from "cookies-next";

const ActiveOrders = ({ activeOrderList, data }) => {
    const [current, setCurrent] = useState(1);
    const [list, setList] = useState(activeOrderList || []);
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

    return (
        <div className="flex flex-col gap-4 my-6 px-4 md:px-0">
            {list.length > 0 ? (
                list.map((ele, index) => {
                    const createdAtDate = new Date(ele?.createdAt); // Convert createdAt to Date object if not already

                    return (
                        <>
                            <OrderItem key={index} data={ele} />
                        </>
                    );
                })
            ) : (
                <NoDataFound message="No Active Order Found" />
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

export default ActiveOrders;
