import React from "react";
import { useModal } from "@/contexts/PopupModalContext";
import { Button, Modal } from "antd";
import { GET_IMAGE_RENDER } from "@/helpers/apiURLS";
import Image from "next/image";

const PopupModal = ({ pageLocation }) => {
    const {
        handleCloseModal,
        handlePermanentlyCloseModal,
        showModal,
        popupInfo,
    } = useModal();

    const filterDataByLocation = (data, pageLocation) => {
        return data.filter((item) => item.position === pageLocation);
    };

    const filteredData = filterDataByLocation(popupInfo, pageLocation);

    // Return nothing if no data matches the location
    if (!filteredData.length) return null;

    // want to display the first matching item
    const { title, content, image, buttonName, buttonLink } = filteredData[0];

    const handleOk = () => {
        window.open(buttonLink);
        handleCloseModal();
    };

    return (
        <Modal
            open={showModal}
            onOk={handleOk}
            onCancel={handleCloseModal}
            centered
            okText={buttonName}
            okButtonProps={{
                style: { background: "#0b2848" },
            }}
            footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex flex-row justify-between p-5 relative z-30">
                    <Button onClick={handlePermanentlyCloseModal}>
                        Don't show again
                    </Button>
                    <div>
                        <OkBtn className="hover:bg-[#0b2848] bg-[#0b2848]" />
                    </div>
                </div>
            )}
            className="p-0 m-0 relative rounded-lg overflow-hidden"
            styles={{ padding: "0px" }}
            closable={false}
            maskClosable={true}
            closeIcon={<></>}
        >
            <Image
                src={`${GET_IMAGE_RENDER}?key=${image}`}
                alt={title}
                className="w-full h-full object-cover absolute inset-0 z-0 transition-opacity opacity-0 duration-[2s]"
                height={1000}
                width={1000}
                onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                }
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black z-20 opacity-40" />
            <div className="relative top-[10%] left-[0%] text-white z-30">
                <div className="flex flex-col gap-8 p-5">
                    <h1 className="text-2xl font-semibold align-top">
                        {title}
                    </h1>
                    <h2>
                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                        ></div>
                    </h2>
                </div>
            </div>
        </Modal>
    );
};

export default PopupModal;
