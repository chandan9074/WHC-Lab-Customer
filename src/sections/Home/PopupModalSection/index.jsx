"use client";
import PopupModal from "@/components/PopupModal";
import { useModal } from "@/contexts/PopupModalContext";
import { getCookie } from "cookies-next";
import React from "react";

const PopupModalComponent = ({ pageLocation }) => {
    const { popupInfo } = useModal();
    const _modalState = getCookie("hideModalPermanently");
    const modalState = (_modalState && JSON.parse(_modalState)) || [];

    const filterDataByLocation = (data, pageLocation) => {
        return data.filter((item) => item.position === pageLocation);
    };

    const filteredData = filterDataByLocation(popupInfo, pageLocation);

    // Return nothing if no data matches the location
    if (!filteredData.length) return null;

    // want to display the first matching item
    const { _id } = filteredData[0];

    // render only id is missmatch with cookies data and pageLocation.
    const shouldRender = modalState.some(
        (modal) => modal.id === _id && modal.pageLocation === pageLocation
    );

    if (shouldRender) {
        return null;
    }

    return (
        <>
            <PopupModal pageLocation={pageLocation} />
        </>
    );
};

export default PopupModalComponent;
