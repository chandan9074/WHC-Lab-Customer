"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { Typography, Button, Spin } from "antd";
import Icons from "../../../../public/assets/Icons";
// import wishlistContext from "@/contexts/WishlistContext";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
// import { useRouter } from "next/navigation";
// import { useCart } from "@/contexts/CartContext";
// import { toast } from "react-toastify";
// import { getCookie, hasCookie } from "cookies-next";

const { Text } = Typography;

const Wish = ({
    image,
    name,
    price,
    inStock,
    id,
    handleGetWishList,
    setLoading,
}) => {
    // const { deleteWishlist } = useContext(wishlistContext);
    // const { getUpdateCartList, createCartItem } = useCart();
    // const token = getCookie("accessToken");

    const handleDelete = async (id) => {
        // setLoading(true);
        // const res = await deleteWishlist(id);
        // if (res?.status === 200) {
        //     handleGetWishList();
        //     toast.success(res?.body?.message);
        // }
    };

    const handleAddCartItem = async () => {
        // const res = await createCartItem(id, 1, token);
        // if (res?.status === 200) {
        //     toast.success(res?.body?.message);
        //     handleGetWishList();
        //     getUpdateCartList();
        // }
    };

    return (
        <div className="w-full flex flex-row items-center justify-between p-2 ">
            <div className="flex flex-row items-center gap-4">
                <Image
                    alt={name}
                    src={`${GET_IMAGE_RENDER}?key=${image}`}
                    // src={image}
                    width={80}
                    height={80}
                    className="rounded-sm w-[80px] h-[80px]"
                />
                <div className="flex flex-col">
                    <Text className="w-32  md:w-32 lg:w-full text-base text-neutral-700">
                        {name}
                    </Text>
                    {inStock ? (
                        <Text className="text-neutral-300 font-medium text-base">
                            $ {price}
                        </Text>
                    ) : (
                        <Text
                            type="danger"
                            className="font-medium text-error-500"
                        >
                            Out of Stock
                        </Text>
                    )}
                </div>
            </div>
            <div className="flex flex-col gap-0 items-start">
                <Button
                    size="small"
                    type="text"
                    className="px-2 py-4 flex items-center justify-center rounded-full"
                    onClick={() => handleDelete(id)}
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
                    disabled={!inStock}
                    onClick={handleAddCartItem}
                >
                    <Image
                        alt="add"
                        src={inStock ? Icons.plus : Icons.disabled_plus}
                        width={18}
                        height={18}
                    />
                </Button>
            </div>
        </div>
    );
};

export default Wish;
