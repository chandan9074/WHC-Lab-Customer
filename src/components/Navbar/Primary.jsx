"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Images from "../../../public/assets/Images";
import Icons from "../../../public/assets/Icons";
import MegaMenu from "../common/MegaMenu";
import { motion } from "framer-motion";
import Link from "next/link";
import { useAuthContext } from "@/contexts/AuthContext";
import {
    MY_ACCOUNT_PATH,
    MY_CART_PATH,
    MY_WISHLIST_PATH,
} from "@/helpers/slug";
import { useCart } from "@/contexts/CartContext";

const Primary = () => {
    const [open, setOpen] = useState(false);

    const { isLogin } = useAuthContext();
    const { cartItem } = useCart();

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                document.body.style.overflow = "hidden";
            }, 400); // 3ms delay
            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return (
        <>
            <div className="relative  lg:py-6 sm:py-5 py-4  bg-white flex flex-col gap-4">
                <div className="container mx-auto px-6 sm:px-3  flex items-center justify-between">
                    <Link href={"/"}>
                        <Image
                            src={Images.WHC_logo}
                            alt="Logo"
                            width={1000}
                            height={1000}
                            className="sm:w-[120px] w-[100px] "
                        />
                    </Link>
                    <div className="flex items-center gap-6">
                        <div className="sm:flex sm:gap-6 h-full sm:items-center hidden">
                            <MobileMenuItem
                                isLogin={isLogin}
                                cartItem={cartItem?.length || 0}
                            />
                            <div className="w-[1px] h-6 bg-neutral-30"></div>
                        </div>

                        <div className="flex items-center gap-2">
                            <h5 className="text-brand-blue-500 text-lg font-semibold">
                                Menu
                            </h5>
                            <button
                                onClick={() => {
                                    setOpen(true);
                                }}
                            >
                                <Image
                                    src={Icons.menu}
                                    alt="search"
                                    width={1000}
                                    height={1000}
                                    className="w-9 h-9"
                                />
                            </button>
                        </div>
                        {open && (
                            <motion.div
                                variants={{
                                    open: { opacity: 1 },
                                    closed: { opacity: 0 },
                                }}
                                initial="closed"
                                animate={"open"}
                                transition={{ duration: 0.5, delay: 0.25 }}
                                className="fixed top-0 left-0 w-full h-screen bg-white z-50 overflow-auto"
                            >
                                <MegaMenu setOpen={setOpen} open={open} />
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
            <div className="w-full h-[1px] bg-neutral-50"></div>
            <div className="flex flex-col gap-2 sm:gap-4 sm:hidden py-2">
                <div className="flex justify-end container mx-auto px-6 sm:px-3 ">
                    <MobileMenuItem
                        isLogin={isLogin}
                        cartItem={cartItem?.length || 0}
                    />
                </div>
            </div>
        </>
    );
};

export default Primary;

function MobileMenuItem({ isLogin, cartItem }) {
    return (
        <div className="flex gap-3 sm:gap-4 items-center">
            {/* <Image
                src={Icons.search_blue}
                alt="search"
                width={1000}
                height={1000}
                className="w-5 sm:w-[30px] h-5 sm:h-[30px] cursor-pointer"
            /> */}
            {isLogin && (
                <>
                    <Link href={MY_WISHLIST_PATH}>
                        <Image
                            src={Icons.wishlistIcon_blue}
                            alt="search"
                            width={1000}
                            height={1000}
                            className="w-5 sm:w-[30px] h-5 sm:h-[30px] cursor-pointer"
                        />
                    </Link>
                    <Link href={MY_ACCOUNT_PATH}>
                        <Image
                            src={Icons.grey_bg_profile_avatar}
                            alt="search"
                            width={1000}
                            height={1000}
                            className="w-5 sm:w-[40px] h-5 sm:h-[40px] cursor-pointer"
                        />
                    </Link>
                    <Link href={MY_CART_PATH}>
                        <button className="py-1 sm:py-2 px-4 border border-neutral-50 rounded-3xl font-medium flex gap-2 items-center">
                            <p className="text-brand-blue-500 text-sm sm:text-base leading-6">
                                My Cart
                            </p>
                            <p className="w-8 h-8 flex justify-center items-center bg-brand-blue-500 text-white text-xs sm:text-sm rounded-full">
                                {cartItem}
                            </p>
                        </button>
                    </Link>
                </>
            )}
        </div>
    );
}
