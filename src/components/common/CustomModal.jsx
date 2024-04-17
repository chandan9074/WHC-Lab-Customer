import React from "react";
import Icons from "../../../public/assets/Icons";
import { Modal } from "antd";
import Image from "next/image";

const CustomModal = ({ children, ...rest }) => {
    return (
        <Modal
            footer={null}
            wrapClassName="custom-modal"
            closeIcon={
                <Image
                    width={24}
                    height={24}
                    src={Icons.cross_blue}
                    alt="modal"
                />
            }
            {...rest}
        >
            {children}
        </Modal>
    );
};

export default CustomModal;
