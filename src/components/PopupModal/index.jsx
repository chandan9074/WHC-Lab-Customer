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
    const { _id, title, content, image, buttonName, buttonLink } =
        filteredData[0];

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
            // wrapClassName="w-[1000px]"

            okText={buttonName}
            okButtonProps={{
                style: { background: "#0b2848" },
            }}
            footer={(_, { OkBtn, CancelBtn }) => (
                <div className="flex flex-row justify-between px-4 py-6 relative z-30 ">
                    <Button
                        onClick={() =>
                            handlePermanentlyCloseModal(pageLocation, _id)
                        }
                    >
                        Don&apos;t show again
                    </Button>
                    <div>
                        <OkBtn className="hover:bg-[#0b2848] bg-[#0b2848]" />
                    </div>
                </div>
            )}
            className="p-0 m-0 relative rounded-lg overflow-hidden"
            // classNames={{
            //     body: "w-[1000px]",
            //     header: "w-[1000px]",
            //     footer: "w-[1000px]",
            //     // wrapper: "w-[1000px] relative",
            // }}
            width={800}
            styles={{ padding: "0px" }}
            closable={false}
            maskClosable={true}
            closeIcon={<></>}
        >
            <Image
                src={`${GET_IMAGE_RENDER}?key=${image}`}
                alt={title}
                className="w-full h-full object-cover absolute inset-0 z-0 "
                height={1000}
                width={1000}
                onLoadingComplete={(image) =>
                    image.classList.remove("opacity-0")
                }
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black z-20 opacity-40" />
            <div className="relative top-[10%] left-[0%] text-white z-30">
                <button
                    onClick={handleCloseModal}
                    className="absolute top-0 right-0 text-xl rounded-full text-white leading-4 font-medium"
                >
                    X
                </button>
                <div className="flex flex-col gap-8 px-4 py-6">
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
