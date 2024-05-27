"use client";
import React, { useEffect, useState } from "react";
import CountryCategorySelection from "./CountryCategorySelection";
import Map from "./Map";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import DistributorsService from "@/services/DistributorsService";

const DistributorContainer = ({
    distinctCountry,
    distinctCategory,
    distributorsData,
}) => {
    const [distributorList, setDistributorList] = useState(
        distributorsData.length > 0 ? distributorsData : []
    );
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState({
        country: "",
        category: "",
    });

    console.log(searchParams);

    useEffect(() => {
        searchParams.forEach((value, key) => {
            setSearchQuery((prev) => ({ ...prev, [key]: value }));
        });
    }, []);

    const handleUpdateSearchQuery = () => {
        console.log("clidck");
        const params = new URLSearchParams(searchParams);
        Object.keys(searchQuery).forEach((key) => {
            if (searchQuery[key]) {
                params.set(key, searchQuery[key]);
            } else {
                params.delete(key);
            }
        });
        const queryString = params.toString();
        const updatedPath = queryString
            ? `${pathname}?${queryString}`
            : pathname;
        // setIsLoading(false);
        // if (!firstRender) {
        router.push(updatedPath, { scroll: false });
        // }
    };

    const handleDistributors = async () => {
        const response = await DistributorsService.getDistributors(searchQuery);
        setDistributorList(response.docs);
    };

    useEffect(() => {
        if (searchQuery.category || searchQuery.country) {
            handleUpdateSearchQuery();
            handleDistributors();
        }
    }, [searchQuery]);

    return (
        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-4 space-y-4 md:space-y-9 w-full md:w-[384px]">
                <h1 className="text-5xl font-semibold text-brand-blue-800 leading-[62.4px]">
                    Know Our Distributors
                </h1>
                <CountryCategorySelection
                    // data={distributorsData.docs}
                    distinctCountry={distinctCountry}
                    distinctCategory={distinctCategory}
                    setSearchQuery={setSearchQuery}
                    searchQuery={searchQuery}
                />
            </div>
            <div className="col-span-12 md:col-span-8 relative z-0">
                <Map data={distributorList} />
            </div>
        </div>
    );
};

export default DistributorContainer;
