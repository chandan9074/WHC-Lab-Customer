"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Icons from "../../../public/assets/Icons";
import { PRIVACY_AND_POLICY, TERMS_AND_CONDITIONS } from "@/helpers/slug";
import { useState } from "react";
import { toast } from "react-toastify";
import { Spin } from "antd";
import UserService from "@/services/UserService/UserService";
import { useUserContext } from "@/contexts/UserContext";

const AnimatedFooter = ({ navLinks, socialLinks }) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const { socialList } = useUserContext();

    const handleAddNewsletter = async () => {
        if (!email) {
            toast.error("Email is required");
            return;
        }

        try {
            setLoading(true);

            const res = await UserService.subscribeNewsletter({ email });
            if (res?.status === 200) {
                toast.success(res?.message);
                setEmail("");
            }
        } catch (e) {
            toast.error(e?.message);
        } finally {
            setLoading(false);
        }
    };

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <Spin spinning={loading} fullscreen />
            <div className="pt-20 flex flex-col lg:flex-row gap-y-9 justify-between text-white">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    className="space-y-9 md:space-y-20"
                >
                    <div className="flex flex-col gap-y-[18px] md:w-[300px]">
                        <h1 className="text-white text-4xl md:text-5xl font-bold leading-[43.88px] md:leading-[58.51px]">
                            WHC LAB
                        </h1>
                        <p className="text-[#9194A6] text-sm md:text-[15px]  font-normal md:font-medium leading-[25px] md:leading-7">
                            Revolutionizing Longevity and Health through
                            Personalized Medicine and Advanced Science.
                        </p>
                    </div>
                    <div className="flex flex-wrap gap-y-4 gap-x-[50px] md:gap-x-9">
                        {navLinks.map((item) => (
                            <Link
                                key={item._id}
                                href={item.path}
                                className="text-[#D9D9D9] py-[4.5px] text-[13.5px] font-bold hover:border-b hover:border-[#D9D9D9]  duration-150"
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </motion.div>
                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{
                        duration: 1,
                        type: "spring",
                        damping: 10,
                        stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    className="md:w-[500px]"
                >
                    <div className="space-y-9">
                        <div className="flex flex-col gap-y-2 md:gap-y-0">
                            <p className="text-[#9194A6] text-[13.5px] font-medium leading-5">
                                Subscribe to our newsletter{" "}
                            </p>
                            <div className="flex gap-x-3">
                                <input
                                    type="text"
                                    value={email}
                                    className="bg-transparent border-b-[1.5px] border-[#2B2E3A] h-12 outline-none"
                                    onChange={(e) => {
                                        e.preventDefault();
                                        setEmail(e.target.value);
                                    }}
                                />
                                <button
                                    className="w-[42px] h-[42px] flex justify-center items-center rounded-full bg-[#1B1B1B]"
                                    onClick={handleAddNewsletter}
                                >
                                    <Image
                                        src={Icons.arrow_up_right_gray}
                                        width={1000}
                                        height={1000}
                                        alt="arrow-button"
                                        className="w-3 h-3"
                                    />
                                </button>
                            </div>
                        </div>
                        {/* <div className="space-y-[15px]">
                            <p className="text-[#9194A6] text-[13.5px] font-medium leading-5">
                                Drop us a line
                            </p>
                            <button className="group flex items-center gap-x-1.5 px-[18px] py-[10.5px] border-[1.5px] border-[#2B2E3A] hover:bg-[#1B1B1B] hover:border-[#1B1B1B] rounded-[37.5px] w-60 hover:w-[260px] duration-300 relative">
                                <Image
                                    src={Icons.copy}
                                    width={1000}
                                    height={1000}
                                    alt="copy"
                                    className="hidden group-hover:block animate-fadeIn w-[15px] h-[15px] absolute"
                                />
                                <p className="text-xs font-bold text-[#D9D9D9] group-hover:text-white leading-4 ml-0 group-hover:ml-5 duration-300">
                                    business_whclab@mail.com
                                </p>
                                <Image
                                    src={Icons.paper_plane_tilt}
                                    width={1000}
                                    height={1000}
                                    alt="paper_plane_tilt"
                                    className="w-[15px] h-[15px] group-hover:hidden"
                                />
                                <Image
                                    src={Icons.paper_plane_tilt_white}
                                    width={1000}
                                    height={1000}
                                    alt="paper_plane_tilt"
                                    className="w-[15px] h-[15px] hidden group-hover:block"
                                />
                            </button>
                        </div> */}
                        <div className="space-y-[15px]">
                            <p className="text-[#9194A6] text-[13.5px] font-medium leading-5">
                                Stay up-to date
                            </p>
                            <div className="flex gap-3 flex-wrap">
                                {socialList?.map((item) => (
                                    <Link
                                        key={item.name}
                                        className="group flex items-center gap-x-1.5 px-[18px] py-[10.5px] border-[1.5px] border-[#2B2E3A] hover:bg-[#1B1B1B] hover:border-[#1B1B1B] rounded-[37.5px]  duration-300 relative"
                                        href={item.link}
                                        target="_blank"
                                    >
                                        <p className="text-xs font-bold text-[#D9D9D9] group-hover:text-white leading-4 mr-0 group-hover:mr-3 duration-300">
                                            {capitalizeFirstLetter(item.name)}
                                        </p>

                                        <Image
                                            src={Icons.arrow_up_right_white}
                                            width={1000}
                                            height={1000}
                                            alt="arrow-up-right"
                                            className="w-[15px] h-[15px] hidden group-hover:block animate-fadeIn"
                                        />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
            <motion.div
                className="text-white border-t border-[#2B2E3A] py-[30px] w-full flex flex-col md:flex-row gap-y-9 items-center justify-center md:justify-between mt-12"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    duration: 1,
                    type: "spring",
                    damping: 10,
                    stiffness: 100,
                }}
                viewport={{ once: true }}
            >
                <div className="flex gap-x-3 text-[#D9D9D9] text-xs font-semibold leading-4 items-center">
                    <Link href={PRIVACY_AND_POLICY}>
                        <p>Privacy Policy</p>
                    </Link>
                    <div className="w-[4.5px] h-[4.5px] bg-[#9194A6] rounded-full" />
                    <Link href={TERMS_AND_CONDITIONS}>
                        <p>Terms of services</p>
                    </Link>
                </div>
                <p className="text-[#9194A6] font-normal text-xs leading-4">
                    © 2024 WHC Lab. All rights reserved.{" "}
                </p>
                <p className="text-[#9194A6] font-normal text-xs leading-4">
                    Developed by{" "}
                    <a href="https://zaagsys.com/" target="_blank">
                        ZAAG Systems Ltd.
                    </a>
                </p>
            </motion.div>
        </>
    );
};

export default AnimatedFooter;
