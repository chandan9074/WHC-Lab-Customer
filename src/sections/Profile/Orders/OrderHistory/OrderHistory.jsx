import React from "react";
import OrderItem from "../OrderItem";
import NoDataFound from "@/components/common/NoDataFound";

const OrderHistory = ({ orderHistoryList }) => {
    // console.log(orderHistoryList);
    return (
        <div className="flex flex-col my-6 gap-4 px-4 md:px-0">
            {orderHistoryList.length > 0 ? (
                orderHistoryList.map((ele, index) => {
                    const createdAtDate = new Date(ele?.createdAt); // Convert createdAt to Date object if not already

                    return (
                        <OrderItem
                            key={index}
                            createdAt={createdAtDate}
                            orderId={ele?.number}
                            state={ele.state}
                            lineItemCount={ele.lineItems.length}
                            total={ele.total}
                            currency={ele?.currency}
                        />
                    );
                })
            ) : (
                <NoDataFound message="No Oder History Found" />
            )}
        </div>
    );
};

export default OrderHistory;
