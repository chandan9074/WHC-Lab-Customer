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

    useEffect(() => {
        const interval = setInterval(() => {
            setShowModal(true);
        }, 10 * 1000); // 60000 ms = 1 minute

        return () => clearInterval(interval);
    }, []);

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handlePermanentlyCloseModal = (pageLocation, id) => {
        const _modalState = getCookie(modalStateKey);
        const modalState = (_modalState && JSON.parse(_modalState)) || [];
        const obj = { pageLocation, id };

        // Check if the id already exists in the modalState array
        const alreadyExists = modalState.some((modal) => modal.id === id);

        if (!alreadyExists) {
            setCookie(modalStateKey, JSON.stringify([...modalState, obj]));
            setShowModal(false);
        }

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
