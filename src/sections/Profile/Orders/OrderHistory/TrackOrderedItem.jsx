import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icons from "../../../../../public/assets/Icons";
import Badges from "@/components/Badges";
import PriceFormatter from "@/components/common/PriceFormatter";
import { getTextShort } from "@/helpers/utils";
import Buttons from "@/components/Buttons";
import CustomModal from "@/components/common/CustomModal";
import ItemReviewForm from "@/app/(protected)/profile/track-orders/ItemReviewForm";
import Images from "../../../../../public/assets/images";

const TrackOrderedItem = ({ data, leaveItemReview, trackOrder }) => {
    const pathName = usePathname();
    const [isCollapse, setIsCollapse] = useState(true);

    const [isSellerRating, setIsSellerRating] = useState(false);

    useEffect(() => {
        // Get the screen width
        const screenWidth = window.innerWidth;

        // Set the initial state based on the screen width
        if (screenWidth > 719) {
            setIsCollapse(true);
        } else {
            setIsCollapse(false);
        }
    }, []);

    const handleSellerRatingOpen = () => {
        setIsSellerRating(true);
    };

    // seller rating submit
    const handleAddSellerRating = (values) => {
        console.log("review values - ", values);
        setIsWriteReview(false);
    };

    return (
        <div className="bg-neutral-10 border border-neutral-30 border-opacity-[12%] px-5 py-5 rounded-lg w-full ">
            {/* Collapse */}
            <div className=" flex justify-between items-center">
                <div>
                    <p
                        onClick={() => setIsCollapse(!isCollapse)}
                        className={`text-neutral-700 text-sm font-medium cursor-pointer mb-2`}
                    >
                        Products
                    </p>

                    {data.state && <Badges.Primary title={data.state} />}
                </div>

                <div className="flex items-center gap-x-5">
                    <div>
                        <p className="text-neutral-300 text-sm font-medium mb-2 text-end">
                            {data.lineItems && data.lineItems.length} items
                        </p>
                        <PriceFormatter
                            price={1515.15}
                            variant="default"
                            fontWeight="font-bold"
                        />
                    </div>
                    <Image
                        src={
                            isCollapse
                                ? Icons.arrow_up_neutral
                                : Icons.arrow_down_neutral
                        }
                        width={1000}
                        height={1000}
                        alt=""
                        className="w-6 h-6 cursor-pointer"
                        onClick={() => setIsCollapse(!isCollapse)}
                    />
                </div>
            </div>

            <div className="h-[1px] bg-neutral-30 bg-opacity-[12%] my-5"></div>

            {isCollapse &&
                data.lineItems &&
                data.lineItems.map((item, i) => (
                    <div key={i} className="animate-fadeIn ">
                        <div className="flex items-center justify-between gap-x-4">
                            <div>
                                <p className="text-neutral-600 text-sm font-medium md:block hidden">
                                    {getTextShort(item.name, 40)}
                                </p>

                                <p className="text-neutral-600 text-sm font-medium md:hidden block">
                                    {getTextShort(item.name, 20)}
                                </p>

                                <div className="text-neutral-300 text-[13px] font-medium">
                                    {item.quantity} x $ {item.salePrice}
                                </div>
                            </div>

                            <div className="w-[40%] md:max-w-fit md:block flex justify-end">
                                <PriceFormatter
                                    price={
                                        Number(item.quantity) * item.salePrice
                                    }
                                    variant="default"
                                />
                            </div>
                        </div>
                        {i !== data.lineItems.length - 1 && (
                            <div className="border-b border-dashed border-primary-black border-opacity-[12%] my-3"></div>
                        )}
                    </div>
                ))}

            <div className="mt-5 flex flex-col gap-y-3">
                <Buttons.LabelBtn
                    label="Track your order"
                    variant="primary"
                    width="w-full h-12"
                    onClick={() => trackOrder()}
                />

                <div className="flex gap-x-3">
                    <Buttons.PrimaryOutlinedBtn
                        label="Give Seller Ratings"
                        border="border"
                        paddingX="px-[12px]"
                        className="border-neutral-300 w-full"
                        onClick={() => handleSellerRatingOpen()}
                    />

                    <Buttons.PrimaryOutlinedBtn
                        label="Leave items review"
                        border="border"
                        paddingX="px-[12px]"
                        className="border-neutral-300 w-full"
                        onClick={() => leaveItemReview()}
                    />
                </div>
            </div>

            <CustomModal
                title="Write review"
                open={isSellerRating}
                onCancel={() => setIsSellerRating(false)}
                footer={null}
                wrapClassName="custom-modal"
            >
                <ItemReviewForm
                    // data={singleProduct}
                    submit={handleAddSellerRating}
                    image={Images.profile_avatar}
                    productName={"Gadget Electronics"}
                    // category={singleProduct && singleProduct.brand}
                />
            </CustomModal>
        </div>
    );
};

export default TrackOrderedItem;
