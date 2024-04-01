import { formatDate } from "@/helpers/utils";
import React from "react";

const OrderInfo = ({ data }) => {
    return (
        <div className="w-full px-[30px] py-6 bg-white border border-neutral-30 rounded-lg">
            <OrderInfoDetails
                heading="Order Id"
                subHeading={`#${data._id}`}
                isLine={true}
            />

            <OrderInfoDetails
                heading="Date"
                subHeading={formatDate(data.createdAt)}
                isLine={true}
            />

            <OrderInfoDetails
                heading="Phone Number"
                subHeading={data.customerInfo.phoneNumber}
                isLine={true}
            />

            <OrderInfoDetails
                heading="Email"
                subHeading={data.customerInfo.email}
                isLine={true}
            />

            <OrderInfoDetails
                heading="Delivery Address"
                subHeading={data.customerInfo.deliveryAddress}
                isLine={true}
            />

            <OrderInfoDetails
                heading="Billing Address"
                subHeading={data.customerInfo.billingAddress}
                isLine={true}
            />

            <OrderInfoDetails
                heading="Payment method"
                subHeading={data.customerInfo.paymentMethod}
                isLine={true}
            />
            <OrderInfoDetails
                heading="Order Note"
                subHeading={data.customerInfo.note}
                isLine={false}
            />
        </div>
    );
};

export default OrderInfo;

const OrderInfoDetails = ({ heading, subHeading, isLine }) => {
    return (
        <div>
            <div className="flex flex-col gap-x-1">
                <p className="text-neutral-800 text-sm font-medium">
                    {heading}
                </p>
                <p className="text-neutral-400 text-[15px] font-normal font-['DM Sans']">
                    {subHeading}
                </p>
            </div>
            {isLine && (
                <div className="w-full border-b border-dashed border-neutral-30 my-4"></div>
            )}
        </div>
    );
};
