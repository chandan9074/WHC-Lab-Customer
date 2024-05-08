import Buttons from "@/components/Buttons";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Icons from "../../../public/assets/Icons";
import { MY_ACCOUNT_PATH, MY_CART_PATH, PRODUCTS_PATH } from "@/helpers/slug";

const AddToCartSuccession = ({
    data,
    quantity,
    setOpenQuickViewModal,
    setOpenSuccessionModal,
}) => {
    const router = useRouter();
    return (
        <div className="p-3">
            <div className="flex items-center gap-x-2">
                <Image
                    src={Icons.check_circle}
                    alt="check-circle"
                    className="w-8 lg:w-6 h-8 lg:h-6"
                />
                <p className="text-neutral-700 text-sm lg:text-xl font-medium">
                    Product successfully added to your Cart.
                </p>
            </div>

            <div className="w-full h-[1px] bg-neutral-30 my-6" />

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12">
                <Image
                    src={`${GET_IMAGE_RENDER}?key=${data?.featuredImage}`}
                    // src={
                    //     "http://192.168.10.61:5002/v1/files/view-image" +
                    //     data?.featuredImage
                    // }
                    width={1000}
                    height={1000}
                    alt="product-image"
                    className="w-full lg:w-[428px] lg:h-[439px]"
                />

                <div className="w-full lg:w-[428px]">
                    <div className="space-y-2 lg:space-y-4">
                        <h3 className="text-neutral-700 font-normal text-sm">
                            <span className="font-medium text-base">
                                {" "}
                                Product Name:
                            </span>
                            {data?.name}
                        </h3>

                        <h3 className="text-neutral-700 font-normal text-sm">
                            <span className="font-medium text-base">SKU:</span>{" "}
                            {data?.sku}
                        </h3>

                        <h3 className="text-neutral-700 font-normal text-sm">
                            <span className="font-medium text-base">
                                Quantity:
                            </span>
                            {quantity}
                        </h3>

                        <h3 className="text-neutral-700 font-normal text-sm">
                            <span className="font-medium text-base">
                                Unit Price:
                            </span>{" "}
                            ${" "}
                            {data?.offerPrice ? data?.offerPrice : data?.price}
                        </h3>

                        <h3 className="text-neutral-700 font-normal text-sm">
                            <span className="font-medium text-base">
                                Sub Total:
                            </span>{" "}
                            ${" "}
                            {data?.offerPrice
                                ? data?.offerPrice * quantity
                                : data?.price * quantity}
                        </h3>
                    </div>

                    <div className="flex flex-col gap-y-4 lg:gap-y-5 pt-6 lg:pt-12">
                        {/* <Link href={MY_CART_PATH}> */}
                        <Buttons.IconWithLabel
                            label={"GO TO CART"}
                            className="w-full h-12 bg-magenta-600 text-white font-semibold rounded-full"
                            onClick={() => router.push(MY_CART_PATH)}
                        />
                        {/* </Link> */}
                        {/* <Link href={PRODUCTS_PATH}> */}
                        <Buttons.OutlinedButton
                            label="CONTINUE SHOPPING"
                            width="w-full h-12 rounded-sm"
                            active={true}
                            activeTextColor="text-neutral-700 text-base font-semibold"
                            activeBorderColor="border border-neutral-700"
                            onClick={() => {
                                router.push(PRODUCTS_PATH);
                                setOpenSuccessionModal(false);
                                setOpenQuickViewModal(false);
                            }}
                        />
                        {/* </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddToCartSuccession;
