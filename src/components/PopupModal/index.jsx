import React from "react";
import { useModal } from "@/contexts/PopupModalContext";
import { Button, Modal } from "antd";

const PopupModal = () => {
    const { handleCloseModal, handlePermanentlyCloseModal, showModal } =
        useModal();

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
        >
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
        </Modal>
    );
};

export default PopupModal;
