import React, { useState } from "react";
import { Modal } from "antd";

const ConfirmationModal = ({
    modalTitle,
    modalDescription,
    handleFunction,
    open,
    setOpen,
}) => {
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState(modalDescription);

    const handleOk = () => {
        setConfirmLoading(true);
        handleFunction();
        setConfirmLoading(false);
        setOpen(false);
    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <>
            <Modal
                title={`${modalTitle}`}
                open={open}
                onOk={handleOk}
                centered
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                okButtonProps={{ style: { background: "#0B2848" } }}
                okText="Delete"
            >
                <p>{modalText}</p>
            </Modal>
        </>
    );
};

export default ConfirmationModal;
