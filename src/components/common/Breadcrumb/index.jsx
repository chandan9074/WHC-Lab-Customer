"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Select } from "antd";
import Image from "next/image";
import Icons from "../../../../public/assets/Icons";
import DistributorsService from "@/services/DistributorsService";
import { useEffect, useState } from "react";
import { currencyData } from "@/libs/common";
import { useUserContext } from "@/contexts/UserContext";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import { setCookie } from "cookies-next";

const NextBreadcrumb = () => {
    const [distributorsData, setDistributorsData] = useState([]);
    const paths = usePathname();
    console.log(paths);
    const pathNames = paths.split("/").filter((path) => path);
    // const hasStoreInPath = pathNames.includes("store");

    // const [selectLocation, setSelectLocation] = useState();
    const { locations, currency, setCurrency, handleLocation } =
        useUserContext();
    // const selected_locations = hasCookie("selected_location");
    // const [selected, setSelected] = useState(true);

    const handleChange = (value) => {
        // console.log(value, locations);
        // setSelectLocation(value);
        // const locationObj = locations.find((item) => item._id === value);
        // console.log(locationObj, "lcoation");
        const locationObj = locations.find((item) => item.value === value);
        setCookie("selected_location", JSON.stringify(value));
        setCookie("selected_currency", locationObj.currency);
        const getCurrencyKey = currencyData[locationObj.currency];
        setCurrency(getCurrencyKey);
        handleLocation(value);
    };

    // To Uppercase the Breadcrumb item
    // const toPascalCase = (string) => (string ? string : "");

    // Breadcrumb item array
    // const breadcrumbPath = () => {
    //     const removeQuestionMark = paths.replace(/\?/g, "/");
    //     const removeEquals = removeQuestionMark.replace(/\=/g, "/");
    //     const pathToPascalCase = toPascalCase(removeEquals);

    //     return pathToPascalCase.split("/").slice(1);
    // };

    // const getDistributors = async () => {
    //     const response = await DistributorsService.getDistributors();
    //     console.log(response, "---------------map");
    //     setDistributorsData(response.docs);
    // };

    // useEffect(() => {
    //     getDistributors();
    // }, []);

    // const options = distributorsData.map((doc) => ({
    //     value: doc.name,
    //     label: doc.name,
    // }));

    // const handleChange = (value) => {
    //     console.log(`selected ${value}`);
    // };

    return (
        <ul className="w-full justify-between items-center container mx-auto hidden md:flex">
            <div className="flex breadcrumb  py-6 font-poppins px-6 sm:px-0">
                <li>
                    <Link href="/" className="text-sm font-normal capitalize">
                        <span
                            className={
                                pathNames.length === 0
                                    ? "text-brand-blue-800"
                                    : "text-neutral-200 hover:brand-blue-800"
                            }
                        >
                            Home
                        </span>
                    </Link>
                </li>
                {pathNames.map((path, index) => (
                    <li key={index} className="flex items-center capitalize">
                        <span className="mx-2 text-neutral-200">/</span>
                        <Link href={`/${path}`}>
                            <span
                                className={
                                    index === pathNames.length - 1
                                        ? "text-brand-blue-800 font-medium"
                                        : "text-neutral-200 hover:brand-blue-800"
                                }
                            >
                                {path}
                            </span>
                        </Link>
                    </li>
                ))}
            </div>
            {paths === "/store" && (
                <Select
                    placeholder="Please select your country"
                    // style={{
                    //     backgroundColor: "#FAFBFB",
                    //     height: 50,
                    //     borderRadius: "20px",
                    // }}
                    className="h-10"
                    onChange={handleChange}
                    options={locations?.map((location, index) => ({
                        ...location,
                        label: (
                            <div className="flex justify-start items-center align-middle text-[#354764] gap-4">
                                {location.flag && (
                                    <Image
                                        width={1000}
                                        height={1000}
                                        alt="product-image"
                                        src={`${GET_IMAGE_RENDER}?key=${location.flag}`}
                                        className="w-[30px] h-[20px]"
                                    />
                                )}

                                {location.label}
                            </div>
                        ),
                    }))}
                />
            )}
        </ul>
    );
};

export default NextBreadcrumb;
