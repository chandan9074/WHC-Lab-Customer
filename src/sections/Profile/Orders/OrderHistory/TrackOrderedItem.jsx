import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Icons from "../../../../../public/assets/Icons";
import Badges from "@/components/Badges";
import Buttons from "@/components/Buttons";
import { getTextShort } from "@/helpers/utils";
import PriceFormatter from "@/components/common/PriceFormatter";
import { currencyData } from "@/libs/common";

const TrackOrderedItem = ({ data, leaveItemReview }) => {
    const pathName = usePathname();
    const [isCollapse, setIsCollapse] = useState(true);

    const [isSellerRating, setIsSellerRating] = useState(false);
    console.log({ data });

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

    // const handleSellerRatingOpen = () => {
    //     setIsSellerRating(true);
    // };

    // seller rating submit
    const handleAddSellerRating = (values) => {
        console.log("review values - ", values);
        setIsWriteReview(false);
    };

    return (
        <div className="border border-neutral-30 border-opacity-[12%] px-5 py-5 rounded-lg w-full ">
            {/* Collapse */}
            <div className=" flex justify-between items-center">
                <div>
                    <p
                        onClick={() => setIsCollapse(!isCollapse)}
                        className={`text-neutral-700 text-sm font-medium cursor-pointer mb-2`}
                    >
                        #{data.number}
                    </p>

                    {data?.state && <Badges.Primary title={data?.state} />}
                </div>

                <div className="flex items-center gap-x-5">
                    <div>
                        <p className="text-neutral-300 text-sm font-medium mb-2 text-end">
                            {data.lineItems && data.lineItems.length} items
                        </p>
                        <PriceFormatter
                            price={data?.total}
                            variant="default"
                            currency={data?.currency}
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
                                <p className="text-neutral-400 leading-[21px] text-sm font-medium md:block hidden">
                                    {getTextShort(item.name, 40)}
                                </p>

                                <p className="text-neutral-400 leading-[21px] text-sm font-medium md:hidden block">
                                    {getTextShort(item.name, 20)}
                                </p>

                                <div className="text-neutral-400 leading-[19.5px] text-[13px] font-medium">
                                    {item.quantity} x&nbsp;
                                    {currencyData[data?.currency]?.icon}
                                    {item.price}
                                </div>
                            </div>

                            <div className="w-[40%] md:max-w-fit md:block flex justify-end">
                                <PriceFormatter
                                    price={Number(item.quantity) * item.price}
                                    variant="default"
                                    currency={data?.currency}
                                />
                            </div>
                        </div>
                        {i !== data.lineItems.length - 1 && (
                            <div className="border-b border-dashed border-primary-black border-opacity-[12%] my-3"></div>
                        )}
                    </div>
                ))}

            <div className="mt-5 md:mt-9 flex flex-col gap-y-3">
                <Buttons.OutlinedButton
                    className="h-12"
                    label="Leave items review"
                    onClick={() => leaveItemReview()}
                />
            </div>

            {/* <CustomModal
                title="Write review asdf"
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
            </CustomModal> */}
        </div>
    );
};

export default TrackOrderedItem;
