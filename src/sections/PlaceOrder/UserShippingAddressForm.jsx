"use client";
import { Radio, Modal } from "antd";
import { useEffect, useState } from "react";
// import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
// import UserService from "@/services/UserService/UserService";
// import NoDataFound from "@/components/common/NoDataFound";
import { toast } from "react-toastify";
// import Link from "next/link";
import Buttons from "@/components/Buttons";
import AddressModal from "../MyAddressSection/AddressModal";
import { useUserContext } from "@/contexts/UserContext";

const UserShippingAddressForm = ({ data, setAddress }) => {
    // const [isModalOpen, setIsModalOpen] = useState(false);
    // const [isDetailsOpen, setIsDetailsOpen] = useState(null);
    // const [isNewAddress, setIsNewAddress] = useState(false);
    const [value, setValue] = useState();
    const [createNewAddressModal, setCreateNewAddressModal] = useState(false);
    const { locations } = useUserContext();
    // const [isUpdateData, setIsUpdateData] = useState(null);
    // const [openDeleteModal, setOpenDeleteModal] = useState(null);
    const router = useRouter();
    // const token = getCookie("accessToken");
    const [addressList, setAddressList] = useState([]);

    useEffect(() => {
        // console.log(data);
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

    const onChange = async (e) => {
        // console.log("radio checked", e.target.value);
        try {
            // console.log(e.target.value);
            setValue(e.target.value);
            setAddress(e.target.value);
        } catch (error) {
            console.error("Error updating default address:", error);
            toast.error("Failed to update default address");
        }
    };

    const handleAddressPageNavigation = () => {
        // router.push("/profile/my-address");
        setCreateNewAddressModal(true);
    };

    const handleOk = () => {
        setCreateNewAddressModal(false);
    };

    return (
        <div className="w-full flex flex-col gap-y-8">
            {addressList.length > 0 ? (
                <>
                    <Radio.Group
                        onChange={onChange}
                        value={value}
                        buttonCheckedBg="#000"
                        className="space-y-5 "
                    >
                        {addressList?.map((address, index) => (
                            <div
                                key={address._id}
                                className={`${
                                    value === address._id
                                        ? "border-[#0b2848] bg-white"
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
                                                            ? "text-magenta-600"
                                                            : "text-neutral-700"
                                                    }`}
                                                >
                                                    {address.name}
                                                </h2>

                                                {addressList[index]
                                                    .isDefault && (
                                                    <div className=" bg-neutral-20 rounded-sm px-2.5 py-[5px] ml-2">
                                                        <p className=" text-neutral-300 text-xs font-semibold">
                                                            Default
                                                        </p>
                                                    </div>
                                                )}
                                            </div>

                                            <p className="text-neutral-300 text-sm font-medium flex flex-wrap w-[200px] sm:w-full">
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
                                                    <span>
                                                        {address.street},
                                                    </span>
                                                )}
                                                {address.city && (
                                                    <span>{address.city},</span>
                                                )}
                                                {address.state && (
                                                    <span>
                                                        {address.state},
                                                    </span>
                                                )}
                                                {address.zip && (
                                                    <span>{address.zip},</span>
                                                )}
                                                {address.country && (
                                                    <span>
                                                        {address.country}
                                                    </span>
                                                )}
                                            </p>
                                        </div>
                                    </Radio>
                                </div>
                            </div>
                        ))}
                    </Radio.Group>
                </>
            ) : (
                <div className="w-full py-12 bg-[#EFF9F9] text-green-600 text-lg font-medium flex justify-center flex-col items-center gap-2">
                    {/* <>
                        {"Addresses not added yet! "}
                        <Link
                            href={"/profile/my-address"}
                            className="font-bold hover:text-current"
                        >
                            Add New Address
                        </Link>
                    </> */}
                    Addresses not added yet!
                    <Buttons.PrimaryButton
                        label={"Add New Address"}
                        onClick={handleAddressPageNavigation}
                        className={
                            "md:py-3 py-2 md:px-9 px-6 bg-magenta-600 rounded-sm text-white md:text-base text-sm font-semibold"
                        }
                    />
                </div>
            )}
            {createNewAddressModal && (
                <Modal
                    className="sm:w-[408px]"
                    title={
                        <p className="w-full flex justify-center text-neutral-700 border-b border-[#8790AB14] border-opacity-[8%] pb-5">
                            "Create New Address"
                        </p>
                    }
                    footer={false}
                    centered
                    open={createNewAddressModal}
                    onOk={handleOk}
                    onCancel={handleOk}
                >
                    <AddressModal
                        onOk={handleOk}
                        onCancel={handleOk}
                        data={{}}
                        addressList={data}
                        modalInnerTitle={"Create new address"}
                        buttonTitle={"Create"}
                        countryList={locations}
                        // handleDetailsModalOpen={handleDetailsModalOpen}
                        // getUserAddress={getUserData}
                    />
                </Modal>
            )}
        </div>
    );
};

export default UserShippingAddressForm;
