import React, { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getCookie, setCookie } from "cookies-next";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const [showModal, setShowModal] = useState(false);
    const modalStateKey = "hideModalPermanently";
    const router = useRouter();
    const hideModalPermanently = getCookie(modalStateKey);

    useEffect(() => {
        console.log({ hideModalPermanently });

        if (!hideModalPermanently) {
            const interval = setInterval(() => {
                setShowModal(true);
            }, 10000); // 60000 ms = 1 minute

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

    return (
        <ModalContext.Provider
            value={{ showModal, handleCloseModal, handlePermanentlyCloseModal }}
        >
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => useContext(ModalContext);
