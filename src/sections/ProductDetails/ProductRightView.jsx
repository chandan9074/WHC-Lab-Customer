"use client";

import Buttons from "@/components/Buttons";
import { Modal, Rate, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Icons from "../../../public/assets/Icons";
import AddToCartSuccession from "./AddToCartSuccession";
import { PRODUCT_DETAILS_PATH } from "@/helpers/slug";
import { getCookie, hasCookie, setCookie } from "cookies-next";
import { useCart } from "@/contexts/CartContext";
import { toast } from "react-toastify";
import { useWishlistContext } from "@/contexts/WishlistContext";
import { usePathname } from "next/navigation";
import { useUserContext } from "@/contexts/UserContext";
import CountrySelectionModal from "../Store/CountrySelectionModal";
import { checkStock } from "@/utils";

const ProductRightView = ({
    forModal = false,
    data,
    setOpenQuickViewModal,
}) => {
    const [selectedSize, setSelectedSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [maxLimit, setMaxLimit] = useState(0);
    const [loading, setLoading] = useState(false);
    const { getUpdateCartList, createCartItem } = useCart();
    const [openSuccessionModal, setOpenSuccessionModal] = useState(false);
    const [status, setStatus] = useState(null);
    const { currency } = useUserContext();

    const router = useRouter();
    const {
        createProductWishlist,
        deleteWishlist,
        getProductWishlist,
        checkProductInWishList,
    } = useWishlistContext();
    const pathname = usePathname();
    const [stockStatus, setStockStatus] = useState(null);

    const token = getCookie("accessToken");

    useEffect(() => {
        if (hasCookie("selected_location")) {
            const locationId = JSON.parse(getCookie("selected_location"));
            const stockStatusData = checkStock(data, locationId);
            setStockStatus(stockStatusData);
            if (locationId) {
                const stock = data?.variants.find(
                    (item) => item.location._id === locationId
                );

                if (stock) {
                    setMaxLimit(stock?.quantity);
                    setStatus(stock?.status);
                }
            }
        }
    }, [data]);

    const handleLocation = async (locationId) => {
        setCookie("selected_location", JSON.stringify(locationId));
        if (locationId) {
            const stock = data?.variants.find(
                (item) => item.location._id === locationId
            );

            if (stock) {
                setMaxLimit(stock?.quantity);
                setStatus(stock?.status);
            }
        }
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

    const handleAddToCart = async () => {
        if (data.inStock) {
            const locationId = JSON.parse(getCookie("selected_location"));
            const variant = data.variants.find(
                (item) => item.location._id === locationId
            );
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

    const handleChangeQuantity = (color) => {
        handelInitialMaxLimit(color);
    };

    const handelInitialMaxLimit = (color) => {
        Object.keys(data?.variants).forEach((col) => {
            if (data?.variants[col][0]?.color === color) {
                setMaxLimit(data?.variants[col][0]?.quantity);
            }
        });
    };

    const handelSelectColor = (item, index) => {
        setSelectedSize(index);
        setMaxLimit(item?.quantity);
    };

    // useEffect(() => {
    //     if ( < quantity) {
    //         setQuantity((ps) => 1);
    //     }
    // }, [quantity]);

    function formatToTwoDecimalPlaces(value) {
        return Number(value.toFixed(2));
    }

    return (
        <div className={`${forModal ? "" : "w-[486px]"} px-6`}>
            {loading && <Spin spinning={loading} fullscreen />}

            <p className="text-sm font-medium text-neutral-300 pb-2 capitalize">
                {data?.mainCategory?.name}
            </p>

            <h2 className="text-2xl font-semibold text-neutral-700 leading-9 pb-2 capitalize">
                {data.name}
            </h2>

            <div className="flex w-full justify-between">
                <div className="flex gap-x-2.5 items-center">
                    <Rate
                        disabled
                        defaultValue={data?.review?.summary?.average}
                        style={{ color: "#F08200", fontSize: 12 }}
                    />

                    <p className="text-neutral-700 text-sm font-medium">
                        {data?.review?.summary?.average}
                    </p>

                    <p className="text-[#8790AB] text-sm font-medium">.</p>

                    <p className="text-neutral-700 text-sm font-medium">
                        {data?.review?.summary?.total}
                        <span className="text-neutral-200 text-sm font-medium">
                            &nbsp; reviews
                        </span>
                    </p>
                </div>

                <div className="flex gap-x-3">
                    {hasCookie("accessToken") && (
                        <Buttons.IconButton
                            alt="favourite-icon"
                            height={1000}
                            width={1000}
                            icon={
                                checkProductInWishList(data._id)
                                    ? Icons.wishlist_active
                                    : Icons.wishlist_inactive
                            }
                            className="w-6 h-6"
                            onClick={handlewishlistClick}
                        />
                    )}

                    {!forModal && (
                        <Buttons.IconButton
                            alt="share-icon"
                            height={1000}
                            width={1000}
                            icon={Icons.share}
                            className="w-6 h-6"
                        />
                    )}
                </div>
            </div>

            <div className="flex flex-col items-start text-center gap-x-2">
                {data[currency.field] && (
                    <p className="text-brand-blue-500 font-semibold text-xl">
                        {currency.icon}
                        {data[currency.field]}
                    </p>
                )}
                {!stockStatus && (
                    <p className="py-1 px-2 bg-red-400 mt-2 text-white font-semibold rounded">
                        Out of Stock
                    </p>
                )}
            </div>

            <div className="my-10 w-full h-[1px] bg-[#EBEDF0]" />

            <div className="flex flex-col gap-y-3 order-2 md:order-1">
                {/* <p className="text-sm font-medium text-neutral-200">Color</p>
                <div className="flex gap-x-3 pb-6 border-b mb-6">
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
                        {data.variants[selectedColor]?.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => handelSelectColor(item, index)}
                                className={`text-xl ${
                                    selectedSize === index
                                        ? "text-white bg-magenta-600"
                                        : "text-neutral-700"
                                }  h-[50px] border border-neutral-50  flex justify-center items-center duration-300 rounded-sm`}
                            >
                                {item.size}
                            </button>
                        ))}
                    </div> */}

                    <div className="pb-6">
                        <Buttons.CounterBtn
                            maxLimit={maxLimit}
                            handleCurrentCount={handleCurrentCount}
                            disabled={!stockStatus}
                            current={quantity}
                        />
                    </div>

                    <div className={`pb-6 ${forModal && "space-y-5"}`}>
                        {forModal && (
                            // <Link href={PRODUCT_DETAILS_PATH + data?._id}>
                            <Buttons.OutlinedButton
                                label="View Details"
                                className="w-full h-12 font-semibold hover:text-white"
                                onClick={() => {
                                    router.push(
                                        PRODUCT_DETAILS_PATH + data?._id
                                    );
                                    setOpenQuickViewModal(false);
                                }}
                            />
                            // </Link>
                        )}
                        <Buttons.PrimaryButton
                            label={`ADD TO CART ${
                                stockStatus
                                    ? `- ${currency.icon} ${
                                          data[currency.field] &&
                                          data[currency.field] * quantity
                                      }`
                                    : ""
                            } `}
                            disabled={status !== "active"}
                            className={`h-[52px] ${
                                !stockStatus &&
                                "bg-brand-blue-300 hover:bg-brand-blue-300"
                            }  text-white font-semibold`}
                            width="w-full"
                            onClick={() => {
                                token
                                    ? handleAddToCart()
                                    : router.push(
                                          `/log-in?redirect=${pathname}`
                                      );
                            }}
                        />
                        {openSuccessionModal && (
                            <Modal
                                footer={false}
                                centered
                                open={openSuccessionModal}
                                onOk={handleOk}
                                onCancel={handleCancel}
                                width={1000}
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

                    <div
                        className={`flex overflow-auto px-4 py-2.5 bg-[#F3F5F6] rounded-sm`}
                    >
                        <div className="w-1.5 h-1 rounded-full bg-neutral-700 mt-2 mr-3" />
                        <p className="text-neutral-600 text-sm">
                            This product requires an additional 2-3 days beyond
                            our usual 4-7 days delivery time.
                        </p>
                    </div>
                </div>
            </div>

            <CountrySelectionModal handleLocation={handleLocation} />
        </div>
    );
};

export default ProductRightView;
