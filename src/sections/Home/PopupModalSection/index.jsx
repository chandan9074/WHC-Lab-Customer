"use client";
import PopupModal from "@/components/PopupModal";
import { useModal } from "@/contexts/PopupModalContext";
import React from "react";

const PopupModalComponent = () => {
    const { showModal } = useModal();
    return <>{showModal && <PopupModal />}</>;
};

export default PopupModalComponent;
