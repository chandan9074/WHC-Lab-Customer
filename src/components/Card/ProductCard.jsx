"use client";
import Image from "next/image";
import React, { useCallback, useContext, useEffect, useState } from "react";
import Icons from "../../../public/assets/Icons";
import { Modal, Spin } from "antd";
// import QuickViewModalContent from "@/sections/ProductDetails/QuickViewModalContent";
import Link from "next/link";
// import { PRODUCT_DETAILS_PATH } from "@/helpers/slug";
// import BannerService from "@/services/bannerService/BannerService";
// import { hasCookie } from "cookies-next";
// import wishlistContext from "@/contexts/WishlistContext";
// import { useRouter } from "next/navigation";
// import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Images from "../../../public/assets/Images";

const ProductCard = ({ data, wishListIds }) => {
    // const router = useRouter();
    // const [openModal, setOpenModal] = useState(false);
    // const [isFavourite, setIsFavourite] = useState(false);
    // const [loading, setLoading] = useState(false);

    // const { createProductWishlist, deleteWishlist } =
    //     useContext(wishlistContext);

    // const handleOk = () => {
    //     setOpenModal(false);
    // };
    // const handleCancel = () => {
    //     setOpenModal(false);
    // };

    // const handlewishlistClick = async () => {
    //     // setIsFavourite(!isFavourite);
    //     setLoading(true);
    //     wishListIds?.includes(data._id)
    //         ? //delete
    //           await deleteWishlist(data._id)
    //         : //create
    //           await createProductWishlist(data._id);
    //     setLoading(false);
    //     router.refresh();
    // };

    // const fetchBanner = useCallback(async () => {
    //     try {
    //         const banner = await BannerService.getBannerImage(
    //             data.featuredImage
    //         );
    //         setBannerImage(banner);
    //     } catch (error) {
    //         console.error("Error fetching banner:", error);
    //     }
    // }, [data]);

    // useEffect(() => {
    //     fetchBanner();
    // }, [fetchBanner]);

    return (
        <div className="group w-full space-y-4">
            <div className="relative mb-4">
                <div className="w-full h-[214px] lg:h-[400px] overflow-hidden rounded-2xl border border-[#EBEDF0]">
                    <Image
                        alt="product-image"
                        // src={`${GET_IMAGE_RENDER}?key=${data.featuredImage}`}
                        src={data.featuredImage}
                        className="w-full h-[214px] lg:h-[400px] object-cover group-hover:scale-110 duration-300"
                        width={1000}
                        height={1000}
                    />
                </div>

                {/* {hasCookie("accessToken") && ( */}
                <div
                    className={`absolute top-4 right-4 ${
                        wishListIds?.includes(data._id) ? "block" : "hidden"
                    } md:group-hover:block  animate-fadeIn cursor-pointer`}
                    // onClick={handlewishlistClick}
                >
                    {/* {loading ? (
                        <Spin spinning={loading} />
                    ) : ( */}
                    <Image
                        alt="wishlist-icon"
                        // src={
                        //     wishListIds?.includes(data._id)
                        //         ? Icons.wishlist_filled
                        //         : Icons.wishlist_neutral
                        // }
                        src={Icons.wishlistIcon}
                        className="w-[22px] h-[22px] relative"
                    />
                    {/* )} */}
                </div>
                {/* )} */}

                <div
                    className="absolute bottom-0 left-0 w-full  gap-x-2 justify-center items-center h-12 bg-black-1300 bg-opacity-45 md:group-hover:flex hidden animate-fadeIn cursor-pointer"
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
                // href={PRODUCT_DETAILS_PATH + data?._id}
                href={"/"}
                className="space-y-2 "
            >
                <div className="h-10">
                    <h2 className="text-neutral-700 text-sm font-medium clamp">
                        {data.name}
                    </h2>
                </div>
                <div className="flex gap-x-2">
                    <p className="text-error-500 text-sm font-medium">
                        ${data.offerPrice ? data.offerPrice : data.price}
                    </p>
                    {data.offerPrice && (
                        <p className="text-neutral-700 text-sm font-medium line-through">
                            ${data.price}
                        </p>
                    )}
                </div>
            </Link>

            {/* <Modal
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
            </Modal> */}
        </div>
    );
};

export default ProductCard;
