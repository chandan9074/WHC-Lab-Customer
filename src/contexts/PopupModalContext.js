import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";
import MakeApiCall from "@/services/MakeApiCall";
import { POPUP_INFORMATION } from "@/helpers/apiURLS";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const [popupInfo, setPopupInfo] = useState([]);
    const modalStateKey = "hideModalPermanently";
    const router = useRouter();
    const hideModalPermanently = getCookie(modalStateKey);

    useEffect(() => {
        console.log({ hideModalPermanently });

        if (!hideModalPermanently) {
            const interval = setInterval(() => {
                setShowModal(true);
            }, 30000); // 60000 ms = 1 minute

            return () => clearInterval(interval);
        }
    }, [hideModalPermanently]);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePermanentlyCloseModal = () => {
        setCookie(modalStateKey, "true");
        setShowModal(false);
        router.refresh();
    };

    // get Popup information from API endpoint
    const getPopupInformation = async () => {
        try {
            const res = await MakeApiCall({
                apiUrl: POPUP_INFORMATION,
                method: "GET",
            });

            if (res?.status === 200) {
                setPopupInfo(res?.docs);
            }
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getPopupInformation();
    }, []);

    const values = {
        showModal,
        popupInfo,
        handleCloseModal,
        handlePermanentlyCloseModal,
    };

    return (
        <ModalContext.Provider value={values}>{children}</ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
