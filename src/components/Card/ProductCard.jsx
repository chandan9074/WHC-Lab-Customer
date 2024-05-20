"use client";
import Image from "next/image";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Icons from "../../../public/assets/Icons";
import { Modal, Spin } from "antd";
// import QuickViewModalContent from "@/sections/ProductDetails/QuickViewModalContent";
import Link from "next/link";
// import { PRODUCT_DETAILS_PATH } from "@/helpers/slug";
import { getCookie, hasCookie } from "cookies-next";
// import wishlistContext from "@/contexts/WishlistContext";
import { useRouter } from "next/navigation";
// import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Images from "../../../public/assets/Images";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import { PRODUCT_DETAILS_PATH } from "@/helpers/slug";
import QuickViewModalContent from "@/sections/ProductDetails/QuickViewModalContent";
import { useWishlistContext } from "@/contexts/WishlistContext";

const ProductCard = ({ data, wishListIds }) => {
    const router = useRouter();
    const [openModal, setOpenModal] = useState(false);
    const {
        createProductWishlist,
        deleteWishlist,
        checkProductInWishList,
        getProductWishlist,
    } = useWishlistContext();

    const [loading, setLoading] = useState(false);

    const handleOk = () => {
        setOpenModal(false);
    };
    const handleCancel = () => {
        setOpenModal(false);
    };

    const handlewishlistClick = async () => {
        // setIsFavourite(!isFavourite);

        const locationId = JSON.parse(getCookie("selected_location"));

        const variant = data.variants.find(
            (item) => item.location._id === locationId
        );

        const stockId = variant.stockId;
        console.log(data, "data console");
        setLoading(true);
        checkProductInWishList(data._id)
            ? //delete
              await deleteWishlist(data._id)
            : //create
              await createProductWishlist(
                  data._id,
                  stockId,
                  variant.location.currency
              );
        setLoading(false);
        getProductWishlist();
        router.refresh();
    };

    return (
        <div className="group w-full space-y-4">
            <div className="relative mb-4">
                <div className="w-full h-[214px] lg:h-[400px] overflow-hidden rounded-2xl border border-[#EBEDF0]">
                    <Image
                        alt="product-image"
                        src={`${GET_IMAGE_RENDER}?key=${data.featuredImage}`}
                        className="w-full h-[214px] lg:h-[400px] object-cover group-hover:scale-110 duration-300"
                        width={1000}
                        height={1000}
                    />
                </div>

                {hasCookie("accessToken") && (
                    <div
                        className={`absolute top-4 right-4 ${
                            wishListIds?.includes(data._id) ? "block" : "hidden"
                        } md:group-hover:block  animate-fadeIn cursor-pointer`}
                        onClick={handlewishlistClick}
                    >
                        {loading ? (
                            <Spin spinning={loading} />
                        ) : (
                            <Image
                                alt="wishlist-icon"
                                src={
                                    checkProductInWishList(data._id)
                                        ? Icons.wishlist_active
                                        : Icons.wishlist_inactive
                                }
                                // src={Icons.wishlist_active}
                                className="w-[22px] h-[22px] relative"
                            />
                        )}
                    </div>
                )}

                <div
                    className="absolute bottom-0 left-0 w-full  gap-x-2 justify-center items-center h-12 bg-brand-blue-800 bg-opacity-45 md:group-hover:flex hidden animate-fadeIn cursor-pointer duration-300 rounded-b-2xl"
                    onClick={() => setOpenModal(true)}
                >
                    <Image
                        alt="view-icon"
                        src={Icons.eye}
                        className="w-6 h-6 relative"
                    />
                    <p className="text-white font-medium">Quick View</p>
                </div>
            </div>

            <Link
                href={PRODUCT_DETAILS_PATH + data?._id}
                // href={"/"}
                className="space-y-2 "
            >
                <div className="h-10">
                    <h2 className="text-brand-blue-800 text-sm font-normal line-clamp-2">
                        {data.name}
                    </h2>
                </div>
                <div className="flex gap-x-2">
                    <p
                        className={`text-sm font-medium ${
                            data.offerPrice
                                ? "line-through text-neutral-100"
                                : "text-brand-blue-500"
                        }`}
                    >
                        ${data.price}
                    </p>
                    {data.offerPrice && (
                        <p className="text-brand-blue-500 text-sm font-semibold">
                            ${data.offerPrice}
                        </p>
                    )}
                </div>
            </Link>

            <Modal
                footer={false}
                centered
                open={openModal}
                onOk={handleOk}
                onCancel={handleCancel}
                width={1000}
            >
                <QuickViewModalContent
                    data={data}
                    setOpenQuickViewModal={setOpenModal}
                />
            </Modal>
        </div>
    );
};

export default ProductCard;
