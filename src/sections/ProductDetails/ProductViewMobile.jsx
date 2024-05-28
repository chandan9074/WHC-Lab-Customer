"use client";

import Buttons from "@/components/Buttons";
import { Carousel, Modal, Rate } from "antd";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import Icons from "../../../public/assets/Icons";
import Image from "next/image";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import AddToCartSuccession from "./AddToCartSuccession";
import { getCookie } from "cookies-next";
import { useWishlistContext } from "@/contexts/WishlistContext";
import { toast } from "react-toastify";
import { useCart } from "@/contexts/CartContext";

const ProductViewMobile = ({ data }) => {
    const carouselRef = useRef();
    const [selectedColor, setSelectedColor] = useState(
        Object.keys(data.variants)[0]
    );
    const [selectedSize, setSelectedSize] = useState(0);
    const [openQuickViewModal, setOpenQuickViewModal] = useState(false);
    const [openSuccessionModal, setOpenSuccessionModal] = useState(false);
    const [wishlistData, setWishlistData] = useState([]);
    const [wishlistIds, setWishlistIds] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [maxLimit, setMaxLimit] = useState(0);
    const [loading, setLoading] = useState(false);
    const { getUpdateCartList, createCartItem } = useCart();
    const router = useRouter();

    const token = getCookie("accessToken");

    const {
        checkProductInWishList,
        createProductWishlist,
        deleteWishlist,
        getProductWishlist,
    } = useWishlistContext();

    // const getWishlist = useCallback(async () => {
    //     const wishlists = await WishlistServices.getWishlist(token);
    //     setWishlistData(wishlists?.body?.docs);
    //     const ids = wishlists?.body?.docs?.map((wishes) => wishes.productId);
    //     setWishlistIds(ids);
    // }, [token]);

    // useEffect(() => {
    //     getWishlist();
    //     handelInitialMaxLimit(selectedColor);
    // }, [getWishlist]);

    const handelInitialMaxLimit = (color) => {
        Object.keys(data?.variants).forEach((col) => {
            if (data?.variants[col][0]?.color === color) {
                setMaxLimit(data?.variants[col][0]?.quantity);
            }
        });
    };

    const handlewishlistClick = async () => {
        if (checkProductInWishList(data._id)) {
            //delete
            await deleteWishlist(data._id);
            await getProductWishlist(); // Call getWishlist after delete
        } else {
            const locationId = JSON.parse(getCookie("selected_location"));

            const variant = data.variants.find(
                (item) => item.location._id === locationId
            );

            //create
            const stockId = variant.stockId;
            const sku = variant.sku;
            await createProductWishlist(
                data._id,
                stockId,
                sku,
                variant.location.currency
            );
            await getProductWishlist(); // Call getWishlist after create
        }
    };

    const handleCurrentCount = (val) => {
        setQuantity(val);
    };

    const handleOk = () => {
        setOpenSuccessionModal(false);
    };
    const handleCancel = () => {
        setOpenSuccessionModal(false);
    };

    const handleNextClick = (type) => {
        if (carouselRef && carouselRef.current) {
            if (type === "next") {
                carouselRef.current.next();
            } else {
                carouselRef.current.prev();
            }
        }
    };

    const handleChangeQuantity = (color) => {
        handelInitialMaxLimit(color);
    };

    useEffect(() => {
        if (maxLimit < quantity) {
            setQuantity((ps) => 1);
        }
    }, [maxLimit, quantity]);

    const handelSelectColor = (item, index) => {
        setSelectedSize(index);
        setMaxLimit(item?.quantity);
    };

    const handleAddToCart = async () => {
        if (data.inStock) {
            const locationId = JSON.parse(getCookie("selected_location"));
            const variant = data.variants.find(
                (item) => item.location._id === locationId
            );
            console.log({ data });
            const stockId = variant.stockId;
            const sku = variant.sku;

            try {
                const res = await createCartItem(
                    data?._id,
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
        <div className="w-full py-4">
            {/* {loading && <Spin spinning={loading} fullscreen />} */}
            <div className="py-4">
                <p className="text-sm font-medium text-neutral-300 pb-2 capitalize">
                    {data?.mainCategory?.name}
                </p>

                <h2 className="text-xl font-medium text-neutral-700 leading-9 pb-2 capitalize">
                    {data.name}
                </h2>

                <div className="flex w-full justify-between items-center pb-4">
                    <div className="flex gap-x-2.5 items-center">
                        <Rate
                            disabled
                            defaultValue={4}
                            style={{ color: "#F08200", fontSize: "12px" }}
                        />

                        <p className="text-neutral-700 text-sm font-medium">
                            4.0
                        </p>

                        <p className="text-neutral-300 text-sm font-medium">
                            .
                        </p>

                        <p className="text-neutral-700 text-sm font-medium">
                            12.345{" "}
                            <span className="text-neutral-300 text-sm font-medium">
                                reviews
                            </span>
                        </p>
                    </div>

                    <div className="flex gap-x-3">
                        {/* {hasCookie("accessToken") && ( */}
                        <Buttons.IconButton
                            alt="favourite-icon"
                            height={32}
                            width={32}
                            icon={
                                // wishlistIds?.includes(data._id)
                                //     ? Icons.wishlist_filled
                                // :
                                Icons.wishlistIcon
                            }
                            className="w-6 h-6"
                            onClick={handlewishlistClick}
                        />
                        {/* )} */}

                        <Buttons.IconButton
                            alt="share-icon"
                            height={32}
                            width={32}
                            icon={Icons.share}
                            className="w-6 h-6"
                        />
                    </div>
                </div>

                <div className="flex items-center text-center gap-x-2 pb-6">
                    {data?.offerPrice && (
                        <p className="text-neutral-300 line-through font-medium mt-1">
                            $ {data?.price}
                        </p>
                    )}

                    <p className="text-neutral-700 font-semibold text-xl">
                        $ {data?.offerPrice ? data?.offerPrice : data?.price}
                    </p>
                </div>
            </div>

            <div className="relative w-full">
                <Carousel dots={true} ref={carouselRef}>
                    {[data.featuredImage, ...data.images].map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-center items-center"
                        >
                            <Image
                                src={`${GET_IMAGE_RENDER}?key=${item}`}
                                alt="value"
                                width={1000}
                                height={1000}
                                className="xs:w-full   h-[408px] sm:h-[500px] md:h-[600px] rounded-sm"
                            />
                        </div>
                    ))}
                </Carousel>
                <button
                    onClick={() => handleNextClick("prev")}
                    className="absolute top-1/2 -left-2 p-4 bg-transparent transform -translate-y-1/2"
                >
                    <Image
                        src={Icons.right_arrow_gray}
                        alt="value"
                        className="w-8 h-8 rotate-180"
                    />
                </button>
                <button
                    onClick={() => handleNextClick("next")}
                    className="absolute top-1/2 -right-2 p-4 bg-transparent transform -translate-y-1/2"
                >
                    <Image
                        src={Icons.right_arrow_gray}
                        alt="value"
                        className="w-8 h-8"
                    />
                </button>
            </div>

            <div className="space-y-3 mt-5 order-2 md:order-1 pb-6">
                {/* <p className="text-sm font-medium text-neutral-200">Color</p>
                <div className="flex gap-x-3 pb-6">
                    {Object.keys(data.variants).map((color, colorIndex) => (
                        <div
                            key={`${color}-${colorIndex}`}
                            className={`${
                                selectedColor === color
                                    ? "border-[#3A3A3A] border-opacity-40"
                                    : "border-transparent"
                            } border-[3px] rounded-full cursor-pointer`}
                        >
                            <div
                                onClick={() => {
                                    setSelectedColor(color);
                                    handleChangeQuantity(color);
                                }}
                                className={`w-9 h-9 rounded-full duration-300`}
                                style={{ backgroundColor: `${color}` }}
                            />
                        </div>
                    ))}
                </div> */}

                <div className="flex flex-col gap-y-3">
                    {/* <div className="flex justify-between items-center w-full">
                        <p className="text-sm font-medium text-neutral-200">
                            Select Size
                        </p>
                    </div>

                    <div className="grid grid-cols-5 gap-3 pb-8">
                        {data?.variants[selectedColor]?.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handelSelectColor(item, index)}
                                className={`text-xl ${
                                    selectedSize === index
                                        ? "text-white bg-magenta-600"
                                        : "text-neutral-700"
                                }  py-3 px-5 border border-neutral-50 col-span-1 flex justify-center items-center duration-300 rounded-sm`}
                            >
                                {item.size}
                            </button>
                        ))}
                    </div> */}

                    <div className="pb-8">
                        <Buttons.CounterBtn
                            maxLimit={maxLimit}
                            handleCurrentCount={handleCurrentCount}
                            current={quantity}
                        />
                    </div>

                    <div className="pb-6">
                        <Buttons.PrimaryButton
                            label={`ADD TO CART - $ ${
                                data.offerPrice
                                    ? data.offerPrice * quantity
                                    : data.price * quantity
                            }`}
                            className="w-full h-[52px] bg-magenta-600 text-white font-semibold rounded-full"
                            onClick={() => {
                                token
                                    ? handleAddToCart()
                                    : router.push("/sign-in");
                            }}
                        />

                        {openSuccessionModal && (
                            <Modal
                                footer={false}
                                centered
                                open={openSuccessionModal}
                                onOk={handleOk}
                                onCancel={handleCancel}
                            >
                                <AddToCartSuccession
                                    data={data}
                                    quantity={quantity}
                                    setOpenQuickViewModal={
                                        setOpenQuickViewModal
                                    }
                                    setOpenSuccessionModal={
                                        setOpenSuccessionModal
                                    }
                                />
                            </Modal>
                        )}
                    </div>

                    <div className="flex px-4 py-2.5 bg-white rounded-sm">
                        <li className="text-xs text-neutral-600" />
                        <p className="text-neutral-600 text-xs">
                            This product requires an additional 2-3 days beyond
                            our usual 4-7 days delivery time.
                        </p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                <h3 className="text-neutral-700 font-medium">
                    About the product
                </h3>
                <p className="text-neutral-700 font-normal leading-6">
                    Floaty florals and a flattering fit-and-flare silhouette
                    make this green tiered midi an elegant pick. A versatile
                    option, dress down with chunky trainers or up with strappy
                    sandals.
                </p>
            </div>
        </div>
    );
};

export default ProductViewMobile;
