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
import MakeApiCall from "@/services/MakeApiCall";
import { MY_ADDRESS_URL } from "@/helpers/apiURLS";
import { toast } from "react-toastify";
import { useUserContext } from "@/contexts/UserContext";

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
    const { locations } = useUserContext();

    const getUserData = async () => {
        const userData = await MakeApiCall({
            apiUrl: MY_ADDRESS_URL,
            headers: { Authorization: token },
        });

        // return userData;
        setAddressList(userData.docs);
        handleActiveAddress(userData.docs);
    };

    useEffect(() => {
        setAddressList(data);
        handleActiveAddress(data);
    }, [data]);

    const handleActiveAddress = (data) => {
        const defaults = data?.find((item) => item.isDefault);
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
        // setValue(e.target.value);

        // If the selected address is not the default address, update it
        try {
            // Make the API call to update the address
            setValue(e.target.value);
            const res = await MakeApiCall({
                method: "PATCH",
                apiUrl: MY_ADDRESS_URL,
                query: { id: e.target.value },
                body: { isDefault: true },
                headers: { Authorization: token },
            });
            await getUserData();
            toast.success("Default address updated successfully!");
        } catch (error) {
            toast.error("Failed to update default address");
        }
    };

    const handleNewAddressBtn = () => {
        setIsNewAddress(true);
        setIsModalOpen(true);
    };

    const handleDelete = async (addressId) => {
        const res = await MakeApiCall({
            method: "DELETE",
            apiUrl: MY_ADDRESS_URL,
            query: { id: addressId },
            headers: { Authorization: token },
        });

        handleDetailsModalOpen(null);
        getUserData();
        toast.success(res?.message);
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

            {addressList?.length > 0 ? (
                <Radio.Group
                    onChange={onChange}
                    value={value}
                    buttonCheckedBg="#ff0022"
                    className="space-y-5 "
                >
                    {addressList?.map((address, index) => (
                        <div
                            key={address._id}
                            className={`${value === address._id
                                    ? "border-magenta-600  bg-white"
                                    : "border-transparent bg-neutral-10"
                                } border flex justify-between items-start lg:items-center px-4 py-4 lg:px-6 lg:py-5 rounded-sm`}
                        >
                            <div className="flex flex-1 items-start">
                                <Radio
                                    // style={radioStyle}
                                    value={address._id}
                                    className="custom-radio"
                                    checked={false}
                                >
                                    <div className="space-y-2">
                                        <div className="flex gap-x-2 items-center">
                                            <h2
                                                className={`font-semibold ${value === address._id
                                                        ? "text-brand-blue-500"
                                                        : "text-neutral-700"
                                                    }`}
                                            >
                                                {address.name}
                                            </h2>

                                            {addressList[index].isDefault && (
                                                <div className=" bg-neutral-30 rounded-sm px-2.5 py-[5px] ml-2">
                                                    <p className=" text-neutral-300 text-xs font-semibold">
                                                        Default
                                                    </p>
                                                </div>
                                            )}
                                        </div>

                                        <div className="text-neutral-400 text-sm font-normal tracking-wide w-full flex flex-wrap flex-1">
                                            {address.addressLine1 && (
                                                <p>{address.addressLine1},</p>
                                            )}
                                            {address.addressLine2 && (
                                                <p>{address.addressLine2},</p>
                                            )}
                                            {address.street && (
                                                <p>{address.street},</p>
                                            )}
                                            {address.city && (
                                                <p>{address.city},</p>
                                            )}
                                            {address.state && (
                                                <p>{address.state},</p>
                                            )}
                                            {address.zip && (
                                                <p>{address.zip},</p>
                                            )}
                                            {address.country && (
                                                <p> {address.country}</p>
                                            )}
                                        </div>
                                    </div>
                                </Radio>
                            </div>

                            <div className="h-10 border-l border-primary-black border-opacity-[24%] pl-6 gap-4 items-center lg:flex lg:items-center hidden">
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
                                        address.isDefault ? toast.warning(`Default address cannot be deleted. Change the default first. ${address.isDefault}`) : setOpenDeleteModal(address._id);;

                                    }}
                                />
                            </div>

                            <div className="relative  flex  justify-end items-start lg:hidden">
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
                                        handleDelete={handleDelete}
                                        getUserData={getUserData}
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
                    getUserAddress={getUserData}
                    countryList={locations}
                />
            </Modal>
        </div>
    );
};

export default MyAddressSection;

export const ThreeDotsMenu = ({
    getUserData,
    handleDetailsModalOpen,
    handleUpdateBtnClick,
    address,
    handleDelete,
    detailsOpen,
}) => {
    const [openDeleteModal, setOpenDeleteModal] = useState(null);
    let openModal = null;
    const router = useRouter();
    const token = getCookie("accessToken");

    const handleSelectUserId = (id) => {
        setOpenDeleteModal(true);
        openModal = id;
        // handleDetailsModalOpen(null);
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
