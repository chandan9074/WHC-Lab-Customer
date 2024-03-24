"use client";

import Buttons from "@/components/Buttons";
import { Modal, Rate } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Icons from "../../../public/assets/Icons";
import AddToCartSuccession from "./AddToCartSuccession";

const ProductRightView = ({
    forModal = false,
    data,
    setOpenQuickViewModal,
}) => {
    const [selectedColor, setSelectedColor] = useState(
        Object.keys(data.variants)[0]
    );
    const [selectedSize, setSelectedSize] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [maxLimit, setMaxLimit] = useState(0);
    const [loading, setLoading] = useState(false);
    // const { getUpdateCartList, createCartItem } = useCart();
    const [openSuccessionModal, setOpenSuccessionModal] = useState(false);
    const [wishlistData, setWishlistData] = useState([]);
    const [wishlistIds, setWishlistIds] = useState([]);
    const router = useRouter();

    // const token = getCookie("accessToken");

    // const { createProductWishlist, deleteWishlist } =
    //     useContext(wishlistContext);

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

    // const handlewishlistClick = async () => {
    //     if (wishlistIds?.includes(data._id)) {
    //         //delete
    //         await deleteWishlist(data._id);
    //         await getWishlist(); // Call getWishlist after delete
    //     } else {
    //         //create
    //         await createProductWishlist(data._id);
    //         await getWishlist(); // Call getWishlist after create
    //     }
    // };

    const handleCurrentCount = (val) => {
        setQuantity(val);
    };

    const handleOk = () => {
        setOpenSuccessionModal(false);
    };

    const handleCancel = () => {
        setOpenSuccessionModal(false);
    };

    // const handleAddToCart = async () => {
    //     setLoading(true);
    //     try {
    //         const res = await createCartItem(data?._id, quantity, token);

    //         if (res?.status === 200) {
    //             toast.success(res?.body?.message);
    //             getUpdateCartList(token);
    //             setOpenSuccessionModal(true);
    //         }
    //     } catch (e) {
    //         toast.error(e?.error?.message);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

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

    useEffect(() => {
        if (maxLimit < quantity) {
            setQuantity((ps) => 1);
        }
    }, [maxLimit, quantity]);

    return (
        <div className={`${forModal ? "" : "w-[486px]"} px-6`}>
            {/* {loading && <Spin spinning={loading} fullscreen />} */}

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
                        defaultValue={4}
                        style={{ color: "#F08200", fontSize: 12 }}
                    />

                    <p className="text-neutral-700 text-sm font-medium">4.0</p>

                    <p className="text-[#8790AB] text-sm font-medium">.</p>

                    <p className="text-neutral-700 text-sm font-medium">
                        12,345{" "}
                        <span className="text-neutral-200 text-sm font-medium">
                            reviews
                        </span>
                    </p>
                </div>

                <div className="flex gap-x-3">
                    {/* {hasCookie("accessToken") && ( */}
                    <Buttons.IconButton
                        alt="favourite-icon"
                        height={1000}
                        width={1000}
                        icon={
                            // wishlistIds?.includes(data._id)
                            //     ? Icons.wishlist_filled
                            // :
                            Icons.wishlistIcon
                        }
                        className="w-6 h-6"
                        // onClick={handlewishlistClick}
                    />
                    {/* )} */}

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

            <div className="flex items-center text-center gap-x-2">
                {data?.offerPrice && (
                    <p className="text-neutral-300 line-through font-medium">
                        $ {data?.price}
                    </p>
                )}

                <p className="text-brand-blue-500 font-semibold text-xl">
                    $ {data?.offerPrice ? data?.offerPrice : data?.price}
                </p>
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
                            current={quantity}
                        />
                    </div>

                    <div className={`pb-6 ${forModal && "space-y-5"}`}>
                        {forModal && (
                            <Link href={PRODUCT_DETAILS_PATH + data?._id}>
                                <Buttons.OutlinedButton
                                    label="View Details"
                                    width="w-full h-12"
                                    active={true}
                                    activeTextColor="text-neutral-700 text-base font-semibold"
                                    activeBorderColor="border border-neutral-700"
                                />
                            </Link>
                        )}
                        <Buttons.PrimaryButton
                            label={`ADD TO CART - $ ${
                                data.offerPrice
                                    ? data.offerPrice * quantity
                                    : data.price * quantity
                            }`}
                            className="h-[52px] bg-magenta-600 text-white font-semibold"
                            width="w-full"
                            // onClick={() => {
                            //     token
                            //         ? handleAddToCart()
                            //         : router.push("/sign-in");
                            // }}
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
        </div>
    );
};

export default ProductRightView;
