import React from "react";
import { useModal } from "@/contexts/PopupModalContext";
import { Button, Modal } from "antd";

const PopupModal = ({ pageLocation }) => {
    const {
        handleCloseModal,
        handlePermanentlyCloseModal,
        showModal,
        popupInfo,
    } = useModal();

    console.log({ popupInfo });

    return (
        <Modal
            title="Advertising"
            open={showModal}
            // onOk={handleOk}
            onCancel={handleCloseModal}
            centered
            footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex flex-row justify-between">
                    <Button onClick={handlePermanentlyCloseModal}>
                        Don't show again
                    </Button>
                    <div className="space-x-2 hover:">
                        {/* <CancelBtn /> */}
                        {/* <OkBtn /> */}
                    </div>
                </div>
            )}
            className=""
        >
            <div className="bg-gray-500">
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </div>
        </Modal>
    );
};

export default PopupModal;
