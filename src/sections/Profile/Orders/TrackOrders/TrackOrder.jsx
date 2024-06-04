"use client";
import Buttons from "@/components/Buttons";
import OrderItem from "../OrderItem";
import { useState } from "react";
import Link from "next/link";
import { TRACK_ORDER_PATH } from "@/helpers/slug";
import NoDataFound from "@/components/common/NoDataFound";

// const filterData = ["All", "Active", "Completed"];
const filterData = ["Active orders"];

const TrackOrder = ({ trackOrderList }) => {
    // const [activeTrackOrder, setActiveTrackOrder] = useState("All");
    // const [activeTrackOrder, setActiveTrackOrder] = useState("Active orders");

    // const _data = trackOrderList.filter(
    //     (item) => item.state.toLowerCase() !== "delivered"
    // );

    // const [data, setData] = useState(trackOrderList);
    // const [data, setData] = useState(_data);

    // const [searchValue, setSearchValue] = useState("");

    // const handleFilterClick = (value) => {
    //     setActiveTrackOrder(value);

    //     // all
    //     if (value.toLowerCase() === "all") {
    //         setData(trackOrderList);
    //         // complete
    //     } else if (value.toLowerCase() === "completed") {
    //         const _data = trackOrderList.filter(
    //             (item) => item.state.toLowerCase() === "delivered"
    //         );
    //         setData(_data);
    //         // active
    //     } else {
    //         const _data = trackOrderList.filter(
    //             (item) => item.state.toLowerCase() !== "delivered"
    //         );
    //         setData(_data);
    //     }
    // };

    // const handleSuffixClick = () => {
    //     // if value matched
    //     if (searchValue) {
    //         const _data = trackOrderList.filter((item) =>
    //             item._id.includes(searchValue)
    //         );
    //         setData(_data);
    //         // if no value found
    //     } else {
    //         setData(trackOrderList);
    //     }
    // };

    // const handleOrderItemClick = (id) => { };

    return (
        <div>
            {/* <p className="text-neutral-200">Filter</p>
            <Buttons.SearchInput
                label="search"
                handleSearchClick={handleSuffixClick}
                placeholder="Search by Order ID"
                onChange={(e) => setSearchValue(e.target.value)}
                className={"mb-6"}
            /> */}

            {/* <div className="flex justify-between md:justify-normal md:gap-3 mb-6">
                {filterData.map((item, index) => (
                    <Buttons.PrimaryOutlinedBtn
                        key={index}
                        onClick={() => handleFilterClick(item)}
                        label={item}
                        active={item === activeTrackOrder}
                        paddingX="md:px-[24px] px-[16px]"
                    />
                ))}
            </div> */}

            <div className="flex flex-col gap-5">
                {trackOrderList.length > 0 ? (
                    trackOrderList.map((ele, index) => {
                        const createdAtDate = new Date(ele?.createdAt); // Convert createdAt to Date object if not already

                        return (
                            // <Link
                            //     className="cursor-pointer"
                            // key={index}
                            //     // onClick={() => handleOrderItemClick(ele.id)}
                            //     href={`${TRACK_ORDER_PATH}/${ele._id}`}
                            // >
                            <OrderItem key={index} data={ele} />
                            // </Link>
                        );
                    })
                ) : (
                    <NoDataFound message="No Track Orders Found" />
                )}
            </div>
        </div>
    );
};

export default TrackOrder;
