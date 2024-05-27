"use client";
import { Button, Typography } from "antd";
import Image from "next/image";
import Icons from "../../../../public/assets/Icons";
// import wishlistContext from "@/contexts/WishlistContext";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
// import { useRouter } from "next/navigation";
import { useCart } from "@/contexts/CartContext";
import { getCookie } from "cookies-next";
import { toast } from "react-toastify";
import Link from "next/link";
import { formatPrice } from "@/utils";

const { Text } = Typography;

const Wish = ({ wishData, handleDelete }) => {
    const { getUpdateCartList, createCartItem } = useCart();
    const token = getCookie("accessToken");
    const currency = getCookie("selected_currency");

    // const handleAddCartItem = async () => {
    //     if (wishData?.stockId) {
    //         try {
    //             const res = await createCartItem(
    //                 wishData?._id,
    //                 1,
    //                 wishData?.stockId,
    //                 currency,
    //                 token
    //             );
    //             if (res?.status === 200) {
    //                 toast.success(res?.message);
    //                 handleDelete(wishData?._id);
    //                 getUpdateCartList();
    //             }
    //         } catch (error) {
    //             toast.error(error?.message);
    //         }
    //     } else {
    //         toast.warning("This product is currently out of stock.");
    //     }
    // };

    const handleAddToCart = async () => {
        console.log(wishData);
        if (wishData.inStock) {
            const locationId = JSON.parse(getCookie("selected_location"));
            const variant = wishData.variants.find(
                (item) => item.location._id === locationId
            );
            const stockId = variant.stockId;
            const sku = variant.sku;

            try {
                const res = await createCartItem(
                    wishData?._id,
                    quantity,
                    stockId,
                    sku,
                    variant.location.currency,
                    token
                );
                setLoading(true);
                if (res?.status === 200) {
                    toast.success(res?.message);
                    getUpdateCartList(token);
                    setOpenSuccessionModal(true);
                }
            } catch (e) {
                toast.error(e?.message);
            } finally {
                setLoading(false);
            }
        } else {
            toast.error("This product is out of stock");
        }
    };

    return (
        <div className="w-full flex flex-row items-center justify-between p-2 ">
            <div className="flex flex-row items-center gap-4">
                <Image
                    alt={wishData?.productName}
                    src={`${GET_IMAGE_RENDER}?key=${wishData?.productFeaturedImage}`}
                    width={80}
                    height={80}
                    className="rounded-sm w-[80px] h-[80px]"
                />
                <div className="flex flex-col">
                    <Link href={`/store/product-details/${wishData?._id}`}>
                        <Text className="w-32  md:w-32 lg:w-full text-base text-neutral-700">
                            {wishData?.productName}
                        </Text>
                    </Link>

                    <Text className="text-neutral-300 font-medium text-base">
                        {formatPrice(
                            {
                                dollarPrice: wishData?.dollarPrice,
                                euroPrice: wishData?.euroPrice,
                                poundPrice: wishData?.poundPrice,
                            },
                            currency
                        )}
                    </Text>
                    <Text
                        // type="success"
                        className={`font-semibold ${
                            wishData?.inStock
                                ? "text-green-500"
                                : "text-error-50"
                        }`}
                    >
                        {wishData?.inStock ? "In stock" : "Out of stock"}
                    </Text>
                </div>
            </div>
            <div className="flex flex-col gap-0 items-start">
                <Button
                    size="small"
                    type="text"
                    className="px-2 py-4 flex items-center justify-center rounded-full"
                    onClick={() => handleDelete(wishData?.productId)}
                >
                    <Image
                        alt="trash"
                        src={Icons.trash}
                        width={22}
                        height={22}
                    />
                </Button>
                <Button
                    className="px-2 py-4 flex items-center justify-center rounded-full w-full"
                    size="small"
                    type="text"
                    // disabled={!wishData.inStock}
                    onClick={handleAddToCart}
                >
                    <Image
                        alt="add"
                        src={
                            wishData?.inStock ? Icons.plus : Icons.disabled_plus
                        }
                        width={18}
                        height={18}
                    />
                </Button>
            </div>
        </div>
    );
};

export default Wish;
