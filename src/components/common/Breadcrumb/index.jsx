// "use client";

// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { Select } from "antd";
// import Image from "next/image";
// import Icons from "../../../../public/assets/Icons";
// import DistributorsService from "@/services/DistributorsService";
// import { useEffect, useState } from "react";
// import { currencyData } from "@/libs/common";
// import { useUserContext } from "@/contexts/UserContext";
// import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
// import { setCookie } from "cookies-next";

// const NextBreadcrumb = () => {
//     const [distributorsData, setDistributorsData] = useState([]);
//     const paths = usePathname();
//     console.log(paths);
//     const pathNames = paths.split("/").filter((path) => path);
//     // const hasStoreInPath = pathNames.includes("store");
//     const { setNavLocation, setNavLocationValue, navLocationValue } =
//         useUserContext();
//     // const [selectLocation, setSelectLocation] = useState();
//     const { locations, setCurrency } = useUserContext();
//     // const selected_locations = hasCookie("selected_location");
//     // const [selected, setSelected] = useState(true);

//     const handleChange = (value) => {
//         console.log("click");
//         const locationObj = locations.find((item) => item.value === value);
//         setCookie("selected_location", JSON.stringify(value), {
//             maxAge: 60 * 60 * 12,
//         });
//         setCookie("selected_currency", locationObj.currency);
//         const getCurrencyKey = currencyData[locationObj.currency];
//         setCurrency(getCurrencyKey);
//         setNavLocationValue(value);
//         setNavLocation(value);
//     };

//     // To Uppercase the Breadcrumb item
//     // const toPascalCase = (string) => (string ? string : "");

//     // Breadcrumb item array
//     // const breadcrumbPath = () => {
//     //     const removeQuestionMark = paths.replace(/\?/g, "/");
//     //     const removeEquals = removeQuestionMark.replace(/\=/g, "/");
//     //     const pathToPascalCase = toPascalCase(removeEquals);

//     //     return pathToPascalCase.split("/").slice(1);
//     // };

//     // const getDistributors = async () => {
//     //     const response = await DistributorsService.getDistributors();
//     //     console.log(response, "---------------map");
//     //     setDistributorsData(response.docs);
//     // };

//     // useEffect(() => {
//     //     getDistributors();
//     // }, []);

//     // const options = distributorsData.map((doc) => ({
//     //     value: doc.name,
//     //     label: doc.name,
//     // }));

//     // const handleChange = (value) => {
//     //     console.log(`selected ${value}`);
//     // };

//     return (
//         <ul className="w-full justify-between items-center container mx-auto hidden md:flex">
//             <div className="flex breadcrumb  py-6 font-poppins px-6 sm:px-0">
//                 <li>
//                     <Link href="/" className="text-sm font-normal capitalize">
//                         <span
//                             className={
//                                 pathNames.length === 0
//                                     ? "text-brand-blue-800"
//                                     : "text-neutral-200 hover:brand-blue-800"
//                             }
//                         >
//                             Home
//                         </span>
//                     </Link>
//                 </li>
//                 {pathNames.map((path, index) => (
//                     <li key={index} className="flex items-center capitalize">
//                         <span className="mx-2 text-neutral-200">/</span>
//                         <Link href={`/${path}`}>
//                             <span
//                                 className={
//                                     index === pathNames.length - 1
//                                         ? "text-brand-blue-800 font-medium"
//                                         : "text-neutral-200 hover:brand-blue-800"
//                                 }
//                             >
//                                 {path}
//                             </span>
//                         </Link>
//                     </li>
//                 ))}
//             </div>
//             {paths === "/store" && (
//                 <Select
//                     placeholder="Please select your country"
//                     // style={{
//                     //     backgroundColor: "#FAFBFB",
//                     //     height: 50,
//                     //     borderRadius: "20px",
//                     // }}
//                     style={{
//                         width: "350px",
//                     }}
//                     value={navLocationValue}
//                     className="h-10"
//                     onChange={(value) => handleChange(value)}
//                     options={locations?.map((location, index) => ({
//                         ...location,
//                         label: (
//                             <div className="flex justify-start items-center align-middle text-[#354764] gap-4">
//                                 {location.flag && (
//                                     <Image
//                                         width={1000}
//                                         height={1000}
//                                         alt="product-image"
//                                         src={`${GET_IMAGE_RENDER}?key=${location.flag}`}
//                                         className="w-[30px] h-[20px]"
//                                     />
//                                 )}

//                                 {location.label}
//                             </div>
//                         ),
//                     }))}
//                 />
//             )}
//         </ul>
//     );
// };

// export default NextBreadcrumb;

"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Breadcrumb, Select } from "antd";
import { useState } from "react";
import { useUserContext } from "@/contexts/UserContext";
import { hasCookie, setCookie } from "cookies-next";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Image from "next/image";
import { currencyData } from "@/libs/common";

// Utility function to generate breadcrumb paths
const generateBreadcrumbPaths = (pathname) => {
    const pathnames = pathname.split("/").filter((x) => x);
    return pathnames.map((name, index) => {
        const url = `/${pathnames.slice(0, index + 1).join("/")}`;
        return { pathname: name, url };
    });
};

// Function to convert string to PascalCase
const toPascalCase = (str) =>
    str.replace(/\w+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());

const NextBreadcrumb = () => {
    const pathname = usePathname();
    const breadcrumbPaths = generateBreadcrumbPaths(pathname);
    const [distributorsData, setDistributorsData] = useState([]);
    const paths = usePathname();
    // console.log(paths);
    const pathNames = paths.split("/").filter((path) => path);
    const hasStoreInPath = pathNames.includes("store");
    const { setNavLocation, setNavLocationValue, navLocationValue } =
        useUserContext();
    const [selectLocation, setSelectLocation] = useState();
    const { locations, setCurrency } = useUserContext();
    const selected_locations = hasCookie("selected_location");
    const [selected, setSelected] = useState(true);

    const handleChange = (value) => {
        // console.log("click");
        const locationObj = locations.find((item) => item.value === value);
        setCookie("selected_location", JSON.stringify(value));
        setCookie("selected_currency", locationObj.currency);
        const getCurrencyKey = currencyData[locationObj.currency];
        setCurrency(getCurrencyKey);
        setNavLocationValue(value);
        setNavLocation(value);
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
        <div className="container mx-auto py-6 px-4 md:px-0 flex flex-col md:flex-row justify-between item-start md:items-center gap-y-4 md:gap-y-0">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link
                        href="/"
                        className={pathname === "/" ? "text-black" : ""}
                    >
                        Home
                    </Link>
                </Breadcrumb.Item>
                {breadcrumbPaths.map((path, index) => {
                    const isLast = index === breadcrumbPaths.length - 1;
                    const displayName = toPascalCase(path.pathname);

                    return (
                        <Breadcrumb.Item
                            key={index}
                            className={`capitalize ${
                                isLast ? "text-black-800" : ""
                            }`}
                        >
                            <Link
                                href={path.url}
                                className={isLast ? "text-magenta-600" : ""}
                            >
                                {displayName}
                            </Link>
                        </Breadcrumb.Item>
                    );
                })}
            </Breadcrumb>
            {paths === "/store" && (
                <Select
                    placeholder="Please select your country"
                    // style={{
                    //     backgroundColor: "#FAFBFB",
                    //     height: 50,
                    //     borderRadius: "20px",
                    // }}
                    style={{
                        width: "350px",
                    }}
                    value={navLocationValue}
                    className="h-10"
                    onChange={(value) => handleChange(value)}
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
        </div>
    );
};

export default NextBreadcrumb;
