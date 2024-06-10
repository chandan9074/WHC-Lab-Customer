"use client";
import PopupModal from "@/components/PopupModal";
import { useModal } from "@/contexts/PopupModalContext";
import React from "react";

const PopupModalComponent = ({ pageLocation }) => {
    const { showModal } = useModal();
    return <>{showModal && <PopupModal pageLocation={pageLocation} />}</>;
};

export default PopupModalComponent;
