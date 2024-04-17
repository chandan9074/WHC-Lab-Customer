import React from "react";
import OrderItem from "../OrderItem";
import Link from "next/link";
import { ORDERS_HISTORY_PATH, TRACK_ORDER_PATH } from "@/helpers/slug";
import NoDataFound from "@/components/common/NoDataFound";

const ActiveOrders = ({ activeOrderList }) => {
    return (
        <div className="flex flex-col gap-4 my-6 px-4 md:px-0">
            {activeOrderList.length > 0 ? (
                activeOrderList.map((ele, index) => {
                    const createdAtDate = new Date(ele?.createdAt); // Convert createdAt to Date object if not already

                    return (
                        <Link
                            href={`${ORDERS_HISTORY_PATH}/${ele._id}`}
                            key={index}
                        >
                            <OrderItem
                                key={index}
                                createdAt={createdAtDate}
                                orderId={ele?._id}
                                state={ele.state}
                                lineItemCount={ele.lineItems.length}
                                total={ele.total}
                            />
                        </Link>
                    );
                })
            ) : (
                <NoDataFound message="No Active Order Found" />
            )}
        </div>
    );
};

export default ActiveOrders;
