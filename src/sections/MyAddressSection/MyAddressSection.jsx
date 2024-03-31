"use client";
import { Radio } from "antd";
import { useEffect, useState } from "react";
import { Modal } from "antd";
import AddressModal from "./AddressModal";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import UserService from "@/services/UserService/UserService";
// import { toast } from "react-toastify";
import Buttons from "@/components/Buttons";
import Icons from "../../../public/assets/Icons";
import ConfirmationModal from "@/components/common/ConfirmationModal";
import NoDataFound from "@/components/common/NoDataFound";
import Image from "next/image";

const MyAddressSection = ({ data }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDetailsOpen, setIsDetailsOpen] = useState(null);
    const [isNewAddress, setIsNewAddress] = useState(false);
    const [value, setValue] = useState();
    const [isUpdateData, setIsUpdateData] = useState(null);
    const [openDeleteModal, setOpenDeleteModal] = useState(null);
    const router = useRouter();
    const token = getCookie("accessToken");
    const [addressList, setAddressList] = useState([]);

    // const getUserData = async () => {
    //     const userData = await UserService.getUserAddress(token);
    //     // return userData;
    //     setAddressList(userData.body.docs);
    //     handleActiveAddress(userData.body.docs);
    // };

    useEffect(() => {
        setAddressList(data);
        handleActiveAddress(data);
    }, [data]);

    const handleActiveAddress = (data) => {
        const defaults = data.find((item) => item.isDefault);
        if (defaults) {
            setValue(defaults._id);
        } else {
            setValue(null);
        }
    };

    const handleUpdateBtnClick = (address) => {
        setIsModalOpen(true);
        setIsUpdateData(address);
    };

    const handleDetailsModalOpen = (value) => {
        setIsDetailsOpen(value);
    };

    // const showModal = () => {
    //     setIsModalOpen(true);
    // };
    const handleOk = () => {
        setIsModalOpen(false);
        setIsUpdateData(null);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
        setIsUpdateData(null);
    };

    const radioStyle = {
        backgroundColor: "#EB038B", // Change the background color when checked
        // borderColor: "#magenta-600", // Change the border color
    };

    const onChange = async (e) => {
        console.log("radio checked", e.target.value);
        // // setValue(e.target.value);

        // // If the selected address is not the default address, update it
        // try {
        //     // Make the API call to update the address
        //     console.log(e.target.value);
        //     setValue(e.target.value);
        //     const res = await UserService.updateUserAddress(
        //         e.target.value,
        //         { isDefault: true },
        //         token
        //     );

        //     if (res?.status === 200) {
        //         toast.success("Default address updated successfully!");
        //         // router.refresh();
        //         getUserData();
        //     } else {
        //         toast.error("Failed to update default address");
        //     }
        // } catch (error) {
        //     console.error("Error updating default address:", error);
        //     toast.error("Failed to update default address");
        // }
    };

    const handleNewAddressBtn = () => {
        console.log("heelo");
        setIsNewAddress(true);
        setIsModalOpen(true);
    };

    const handleDelete = async (addressId) => {
        // const res = await UserService.deleteUserAddress(addressId, token);
        // if (res?.status === 200) {
        //     router.refresh();
        //     toast.success(res?.body?.message);
        // }
    };

    return (
        <div className="w-full flex flex-col gap-y-8">
            <div className="flex flex-col-reverse gap-y-5 items-start lg:flex-row  lg:justify-between lg:items-center">
                <h1 className="text-brand-blue-400 font-medium text-base leading-6">
                    Choose your default address
                </h1>

                <Buttons.PrimaryButton
                    label="Add new address"
                    className="w-full h-12 lg:w-auto flex justify-center items-center text-white font-medium px-6 bg-magenta-600 rounded-full"
                    onClick={handleNewAddressBtn}
                />
            </div>

            {addressList.length > 0 ? (
                <Radio.Group
                    onChange={onChange}
                    value={value}
                    buttonCheckedBg="#ff0022"
                    className="space-y-5 "
                >
                    {addressList?.map((address, index) => (
                        <div
                            key={address._id}
                            className={`${
                                value === address._id
                                    ? "border-magenta-600  bg-white"
                                    : "border-transparent bg-neutral-10"
                            } border flex justify-between px-4 py-4 lg:px-6 lg:py-5 rounded-sm`}
                        >
                            <div className="flex">
                                <Radio
                                    // style={radioStyle}
                                    value={address._id}
                                    className="custom-radio"
                                    checked={false}
                                >
                                    <div className="space-y-2">
                                        <div className="flex gap-x-2 items-center">
                                            <h2
                                                className={`font-semibold ${
                                                    value === address._id
                                                        ? "text-brand-blue-500"
                                                        : "text-neutral-700"
                                                }`}
                                            >
                                                {address.name}
                                            </h2>

                                            {addressList[index].isDefault && (
                                                <div className=" bg-neutral-20 rounded-sm px-2.5 py-[5px] ml-2">
                                                    <p className=" text-neutral-300 text-xs font-semibold">
                                                        Default
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <p className="text-neutral-400 text-sm font-normal tracking-wide flex flex-wrap w-[170px] sm:w-full">
                                            {address.addressLine1 && (
                                                <span>
                                                    {address.addressLine1},
                                                </span>
                                            )}
                                            {address.addressLine2 && (
                                                <span>
                                                    {address.addressLine2},
                                                </span>
                                            )}
                                            {address.street && (
                                                <span>{address.street},</span>
                                            )}
                                            {address.city && (
                                                <span>{address.city},</span>
                                            )}
                                            {address.state && (
                                                <span>{address.state},</span>
                                            )}
                                            {address.zip && (
                                                <span>{address.zip},</span>
                                            )}
                                            {address.country && (
                                                <span> {address.country}</span>
                                            )}
                                        </p>
                                    </div>
                                </Radio>
                            </div>

                            <div className="border-l border-primary-black border-opacity-[24%] pl-6 gap-4 items-center lg:flex hidden">
                                <Buttons.IconButton
                                    icon={Icons.edit}
                                    alt="edit-icon"
                                    height="h-6"
                                    width="w-6"
                                    onClick={() =>
                                        handleUpdateBtnClick(address)
                                    }
                                />
                                <Buttons.IconButton
                                    icon={Icons.trash}
                                    alt="delete-icon"
                                    width="w-6"
                                    height="h-6"
                                    type="button"
                                    onClick={() => {
                                        console.log("ASdf");
                                        setOpenDeleteModal(address._id);
                                        // handleAddressDelete(address.id);
                                    }}
                                />
                            </div>

                            <div className="relative w-20 flex justify-end items-start lg:hidden">
                                <div className="bg-neutral-20 p-1.5 rounded-[4px]">
                                    <Buttons.IconButton
                                        icon={Icons.dots_three_vertical}
                                        width="w-5"
                                        alt="three-dots-icon"
                                        height="h-5"
                                        type="button"
                                        onClick={() =>
                                            handleDetailsModalOpen(address._id)
                                        }
                                    />
                                </div>
                                {isDetailsOpen === address._id && (
                                    <ThreeDotsMenu
                                        handleDetailsModalOpen={
                                            handleDetailsModalOpen
                                        }
                                        handleUpdateBtnClick={
                                            handleUpdateBtnClick
                                        }
                                        address={address}
                                        detailsOpen={isDetailsOpen}
                                    />
                                )}
                                {openDeleteModal === address._id && (
                                    <ConfirmationModal
                                        modalTitle="Confirm cancellation"
                                        modalDescription="Do you want to delete this address ?"
                                        handleFunction={() =>
                                            handleDelete(address._id)
                                        }
                                        open={!!openDeleteModal}
                                        setOpen={setOpenDeleteModal}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </Radio.Group>
            ) : (
                <NoDataFound message="Addresses not added yet!" />
            )}

            <Modal
                className="sm:w-[408px]"
                title={
                    <p className="w-full flex justify-center text-neutral-700 border-b border-[#8790AB14] border-opacity-[8%] pb-5">
                        {isUpdateData ? "Update Address" : "Create New Address"}
                    </p>
                }
                footer={false}
                centered
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <AddressModal
                    onOk={handleOk}
                    onCancel={handleCancel}
                    data={isUpdateData ? isUpdateData : {}}
                    addressList={addressList}
                    modalInnerTitle={
                        isUpdateData
                            ? "Update existing address"
                            : "Create new address"
                    }
                    buttonTitle={isUpdateData ? "Update" : "Create"}
                    handleDetailsModalOpen={handleDetailsModalOpen}
                    // getUserAddress={getUserData}
                />
            </Modal>
        </div>
    );
};

export default MyAddressSection;

export const ThreeDotsMenu = ({
    handleDetailsModalOpen,
    handleUpdateBtnClick,
    address,
    detailsOpen,
}) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(null);
    let openModal = null;
    const router = useRouter();
    const token = getCookie("accessToken");

    const handleSelectUserId = (id) => {
        setOpenDeleteModal(true);
        openModal = id;
    };

    const handleDelete = async (addressId) => {
        // const res = await UserService.deleteUserAddress(addressId, token);
        // if (res?.status === 200) {
        //     router.refresh();
        //     toast.success(res?.body?.message);
        //     setOpenDeleteModal(null);
        //     handleDetailsModalOpen(null);
        // }
    };

    return (
        <>
            <div
                className="fixed top-0 left-0 w-full h-full bg-transparent z-10"
                onClick={() => handleDetailsModalOpen(null)}
            />
            <div
                className="absolute z-20 top-10 -left-36 w-48 bg-white animate-fadeIn py-4 px-5 shadow-md rounded-sm"
                // onClick={handleDetailsModalOpen}
            >
                {/* <Buttons.IconWithLabel
                    alt="edit-icon"
                    icon={Icons.edit}
                    label="Edit Address"
                    className="text-sm text-neutral-300 h-12"
                    onClick={() => handleUpdateBtnClick(address)}
                /> */}
                <button
                    className="flex justify-start items-center gap-2 w-full text-sm text-neutral-300 h-12"
                    onClick={() => handleUpdateBtnClick(address)}
                >
                    <p>Edit Address</p>
                    <Image
                        alt="edit-icon"
                        src={Icons.edit}
                        width={1000}
                        height={1000}
                        className="w-5 h-5"
                    />
                </button>

                {/* <Buttons.IconWithLabel
                    alt="trash-icon"
                    icon={Icons.trash}
                    label="Delete Address"
                    className="text-sm text-error-500 h-12"
                    onClick={() => {
                        handleSelectUserId(address?._id);
                    }}
                /> */}
                <button
                    className="flex justify-start items-center gap-2 w-full text-sm text-neutral-300 h-12"
                    onClick={() => {
                        handleSelectUserId(address?._id);
                    }}
                >
                    <p>Delete Address</p>
                    <Image
                        alt="trash-icon"
                        src={Icons.trash}
                        width={1000}
                        height={1000}
                        className="w-5 h-5"
                    />
                </button>
            </div>

            <ConfirmationModal
                modalTitle="Confirm cancellation"
                modalDescription="Do you want to delete this address ?"
                handleFunction={() => handleDelete(address._id)}
                open={openDeleteModal}
                setOpen={setOpenDeleteModal}
            />
        </>
    );
};
