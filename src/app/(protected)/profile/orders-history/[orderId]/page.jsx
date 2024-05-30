"use client";
import { trackOrderData } from "@/libs/data";
import TrackOrderedItem from "@/sections/Profile/Orders/OrderHistory/TrackOrderedItem";
import { useEffect, useState } from "react";
import OrderInfo from "../OrderInfo";
import ItemReview from "../ItemReview";
import ItemReviewForm from "../ItemReviewForm";
// import Summary from "@/sections/Profile/Orders/OrderSummary/Summary";
import Summary from "@/components/OrderSummary/Summary";
import CustomModal from "@/components/common/CustomModal";
import OrderService from "@/services/OrderService";
import { getCookie } from "cookies-next";
import ProductService from "@/services/productsService";
import { toast } from "react-toastify";

const OrderDetails = ({ params: { orderId } }) => {
    const [data, setData] = useState({});
    const token = getCookie("accessToken");
    const [singleProduct, setSingleProduct] = useState(null);
    const [isWriteReview, setIsWriteReview] = useState(false);
    const [isReview, setIsReview] = useState(false);

    const getSingleOrder = async () => {
        try {
            const res = await OrderService.getOrderData("id", orderId, token);
            if (res?.status === 200) {
                setData(res?.doc);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getSingleOrder();
    }, []);

    const handleTrackOrder = () => {
        console.log("track order");
    };

    const handleItemReview = () => {
        setIsReview(true);
        setIsWriteReview(false);
    };

    const handleWriteReview = (i) => {
        setIsReview(false);
        setIsWriteReview(true);
        getSingleProductById(i);
    };

    const getSingleProductById = (id) => {
        const _product = data.lineItems.filter((item) => item._id === id);
        setSingleProduct(_product[0]);
    };

    // product review rating submit
    const handleAddProductReview = async (values) => {
        values.orderId = orderId;

        try {
            const res = await ProductService.postProductReview(values, token);
            toast.success(res?.message);
        } catch (e) {
            toast.error(e?.message);
        } finally {
            setIsWriteReview(false);
        }
    };
    return (
        <div className="py-6 md:py-12 sm:px-[0px] md:px-[10px] lg:px-[58px]">
            <div className="flex justify-center mb-10">
                <span className="text-neutral-300 text-base font-medium">
                    Order id{" "}
                    <span className="text-neutral-700 font-bold">
                        #{data?.number}
                    </span>
                </span>
            </div>

            <div className="lg:flex justify-center lg:gap-x-[60px]">
                {/* <div className="w-full md:max-w-[500px]"> */}
                <div className="w-full">
                    <p className="text-neutral-300  text-center text-sm font-medium mb-5 md:block hidden">
                        Ordered items
                    </p>
                    <TrackOrderedItem
                        data={data}
                        leaveItemReview={handleItemReview}
                        trackOrder={handleTrackOrder}
                    />
                </div>

                {/* <div className="w-full md:max-w-[500px]"> */}
                <div className="w-full">
                    <div className="mb-6 md:mt-0 mt-6">
                        <p className="text-neutral-300 text-center text-sm font-medium mb-5 md:mt-0 mt-10">
                            Order summery
                        </p>
                        <Summary
                            total={data?.total}
                            subTotal={data?.subtotal}
                            totalItems={data?.lineItems?.length}
                            // shippingCharge={shippingCharge}
                            discount={data?.couponAmount}
                            couponCode={data?.couponCode}
                            // tax={tax}
                            showTotalItemCount={true}
                            orderCurrency={data?.currency}
                        />
                    </div>

                    <div className=" md:pb-0 pb-10">
                        <p className="text-brand-blue-500 text-center text-sm font-medium mb-5">
                            Order Info
                        </p>
                        <OrderInfo data={data} />
                    </div>
                </div>
            </div>

            <CustomModal
                title={
                    <h4 className="w-full flex justify-center">Items Review</h4>
                }
                open={isReview}
                onCancel={() => setIsReview(false)}
                footer={null}
                wrapClassName="custom-modal"
            >
                <ItemReview
                    data={data.lineItems}
                    handleWriteReview={handleWriteReview}
                />
            </CustomModal>
            {isWriteReview && (
                <CustomModal
                    title={
                        <h4 className="w-full flex justify-center">
                            Write Review
                        </h4>
                    }
                    open={isWriteReview}
                    onCancel={() => setIsWriteReview(false)}
                    footer={null}
                    wrapClassName="custom-modal"
                >
                    <ItemReviewForm
                        data={singleProduct}
                        submit={handleAddProductReview}
                        image={singleProduct && singleProduct.featuredImage}
                        productName={singleProduct && singleProduct.name}
                        category={singleProduct && singleProduct.brand}
                    />
                </CustomModal>
            )}
        </div>
    );
};

export default OrderDetails;
