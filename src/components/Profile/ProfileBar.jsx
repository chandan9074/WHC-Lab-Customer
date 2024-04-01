"use client";

import { Collapse, Typography } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Buttons from "../Buttons";
import Icons from "../../../public/assets/Icons";

const { Text } = Typography;

const ProfileBar = ({ width, data, name, image }) => {
    const currentPath = usePathname();
    const pathSegment = currentPath.split("/");
    const secondLastSegment = pathSegment[pathSegment.length - 2];
    const formattedSegment = secondLastSegment
        .split("-") // Split by "-"
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Uppercase first letter of each word
        .join(" "); // Join with spaces
    const router = useRouter();
    const currentPathForCollapse = data
        .flatMap((item) => item.children)
        .filter((child) => child.url === currentPath)
        .map((matchedChild) => {
            return {
                title: matchedChild.title,
                icon: matchedChild.activeIcon,
            };
        })[0];
    const [showHideCollapse, setShowHideCollapse] = useState(false);
    const [activeIcon, setActiveIcon] = useState("");

    const [currentPage, setCurrentPage] = useState(
        currentPathForCollapse && currentPathForCollapse.title
    );

    // const { logOut } = useContext(userContext);
    // const { resetCartItemLength } = useCart();

    const handleLogout = useCallback(async () => {
        // Cookies.remove("accessToken");
        // Cookies.remove("userInfo");
        // resetCartItemLength();
        // router.push("/");
        // try {
        //     await logOut();
        //     localStorage.setItem("showDiscountBar", "true");
        // } catch (e) {
        //     console.log(e);
        // }
        // }, [logOut, resetCartItemLength, router]);
    }, []);

    useEffect(() => {
        currentPage === undefined && setCurrentPage(formattedSegment);

        // Iterate over profileData
        if (!currentPathForCollapse) {
            // Iterate over profileData
            data.forEach((category) => {
                category?.children?.forEach((item) => {
                    if (item?.title === formattedSegment) {
                        // Update activeIcon if the title matches
                        setActiveIcon(item?.activeIcon);
                    }
                });
            });
        }
    }, [currentPage, data, formattedSegment, currentPathForCollapse]);

    const items = [
        {
            key: "1",
            label: (
                <div
                    className="flex flex-row gap-3"
                    onClick={() => {
                        setShowHideCollapse(!showHideCollapse);
                    }}
                >
                    <Image
                        alt="Collapse icon"
                        src={
                            currentPathForCollapse
                                ? currentPathForCollapse?.icon
                                : activeIcon
                        }
                    />
                    <Text className="text-magenta-500 font-bold">
                        {currentPage}
                    </Text>
                </div>
            ),
            children: (
                <>
                    {data.length > 0 &&
                        data.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    onClick={() =>
                                        setShowHideCollapse(!showHideCollapse)
                                    }
                                >
                                    <p className="text-neutral-100 text-xs font-medium p-2">
                                        {item.title}
                                    </p>
                                    <div className="flex flex-col ">
                                        {item.children.length > 0 &&
                                            item.children.map(
                                                (value, childIndex) => (
                                                    // value.title ===
                                                    // TRACK_ORDER_NAV ? (
                                                    //     <Link
                                                    //         key={childIndex}
                                                    //         href={`${TRACK_ORDER_PATH}`}
                                                    //     >
                                                    //         <Buttons.ProfileTabBtn
                                                    //             icon={
                                                    //                 value.inactiveIcon
                                                    //             }
                                                    //             iconWidth="w-6"
                                                    //             iconHeight="h-6"
                                                    //             label={
                                                    //                 value.title
                                                    //             }
                                                    //         />
                                                    //     </Link>
                                                    // ) : (
                                                    <Link
                                                        key={childIndex}
                                                        href={
                                                            value.url
                                                                ? `${value.url}`
                                                                : ""
                                                        }
                                                    >
                                                        <Buttons.ProfileTabBtn
                                                            icon={
                                                                currentPath.includes(
                                                                    value.url
                                                                )
                                                                    ? value.activeIcon
                                                                    : value.inactiveIcon
                                                            }
                                                            iconWidth="w-6"
                                                            iconHeight="h-6"
                                                            label={value.title}
                                                            active={currentPath.includes(
                                                                value.url
                                                            )}
                                                            onClick={() => {
                                                                setCurrentPage(
                                                                    value.title
                                                                );
                                                            }}
                                                        />
                                                    </Link>
                                                )
                                                // )
                                            )}
                                    </div>

                                    <div className="px-[10px] pt-[13px] pb-[18px]">
                                        <div className="border-b border-primary-gray border-opacity-[8%] px-[10px]"></div>
                                    </div>
                                </div>
                            );
                        })}
                    <div className="">
                        <Buttons.ProfileTabBtn
                            icon={Icons.logout}
                            iconWidth="w-6"
                            iconHeight="h-6"
                            label="Logout"
                            onClick={handleLogout}
                        />
                    </div>
                </>
            ),
        },
    ];

    // const user = Cookies.get("userInfo");

    return (
        <div className={`bg-white rounded-sm ${width || "w-full"}`}>
            <div
                className={`${
                    width ? width : "w-[300px]"
                } px-6 py-12 rounded-2xl border-[1.5px] border-[#EBEDF0]  hidden lg:block`}
            >
                {/* Profile Details */}
                <div className="mb-6 px-4 flex items-center gap-x-3">
                    <Image
                        alt="profile"
                        src={image ? image : ""}
                        width={1000}
                        height={1000}
                        className="w-12 h-12 rounded-full mb-2"
                    />
                    <p className="text-neutral-700  text-base font-medium">
                        {name}
                    </p>
                </div>

                {/* Nav  */}
                {data.length > 0 &&
                    data.map((item, index) => (
                        <div key={index}>
                            <p className="text-neutral-100 text-xs font-medium p-2 pb-5">
                                {item.title}
                            </p>
                            <div className="flex flex-col ">
                                {/* Nav Children */}
                                {item.children.length > 0 &&
                                    item.children.map((value, childIndex) =>
                                        value.title === "TRACK_ORDER_NAV" ? (
                                            <Link
                                                key={childIndex}
                                                href={value.url}
                                            >
                                                <Buttons.ProfileTabBtn
                                                    icon={
                                                        currentPath.includes(
                                                            value.url
                                                        )
                                                            ? value.activeIcon
                                                            : value.inactiveIcon
                                                    }
                                                    iconWidth="w-6"
                                                    iconHeight="h-6"
                                                    label={value.title}
                                                    active={currentPath.includes(
                                                        value.url
                                                    )}
                                                />
                                            </Link>
                                        ) : (
                                            <Link
                                                key={childIndex}
                                                href={
                                                    value.url
                                                        ? `${value.url}`
                                                        : ""
                                                }
                                            >
                                                <Buttons.ProfileTabBtn
                                                    icon={
                                                        currentPath.includes(
                                                            value.url
                                                        )
                                                            ? value.activeIcon
                                                            : value.inactiveIcon
                                                    }
                                                    iconWidth="w-6"
                                                    iconHeight="h-6"
                                                    label={value.title}
                                                    active={currentPath.includes(
                                                        value.url
                                                    )}
                                                />
                                            </Link>
                                        )
                                    )}
                            </div>

                            <div className="px-[10px] pt-[13px] pb-[18px]">
                                <div className="border-b border-primary-gray border-opacity-[8%] px-[10px]" />
                            </div>
                        </div>
                    ))}
                <div className="">
                    <Buttons.ProfileTabBtn
                        icon={Icons.logout}
                        iconWidth="w-6"
                        iconHeight="h-6"
                        label="Logout"
                        onClick={handleLogout}
                    />
                </div>
            </div>
            <div
                className={`block lg:hidden px-5`}
                onClick={() => {
                    setShowHideCollapse(!showHideCollapse);
                }}
            >
                <Collapse
                    activeKey={showHideCollapse ? ["1"] : []}
                    ghost
                    items={items}
                    expandIconPosition={"end"}
                    accordion={false}
                />
            </div>
        </div>
    );
};

export default ProfileBar;
