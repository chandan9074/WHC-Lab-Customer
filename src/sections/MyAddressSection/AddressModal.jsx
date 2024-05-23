import Buttons from "@/components/Buttons";
import UserService from "@/services/UserService/UserService";
import { Form, Input, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
import { countriesData } from "@/libs/myAccountData";
import MakeApiCall from "@/services/MakeApiCall";
import { MY_ADDRESS_URL } from "@/helpers/apiURLS";
import { toast } from "react-toastify";
const { TextArea } = Input;

const AddressModal = ({
    data,
    addressList,
    onOk,
    onCancel,
    modalInnerTitle,
    buttonTitle,
    handleDetailsModalOpen,
    getUserAddress,
    countryList,
}) => {
    const router = useRouter();
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [countryData, setCountryData] = useState(countryList);
    const [selectedState, setSelectedState] = useState([]);
    const token = getCookie("accessToken");

    const [form] = Form.useForm();

    useEffect(() => {
        form.setFieldsValue({
            name: data.name ? data.name : null,
            country: data.country ? data.country : null,
            state: data.state ? data.state : null,
            city: data.city ? data.city : null,
            zip: data.zip ? data.zip : null,
            addressLine1: data.addressLine1 ? data.addressLine1 : null,
        });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data]);

    const onFinish = async (values) => {
        if (Object.keys(data).length === 0) {
            // For create
            try {
                let body = {};
                if (addressList.length > 0) {
                    body = { ...values, isDefault: false };
                } else {
                    body = { ...values, isDefault: true };
                }
                const res = await MakeApiCall({
                    apiUrl: MY_ADDRESS_URL,
                    method: "POST",
                    body: body,
                    headers: { Authorization: token },
                });

                toast.success(res?.message);
                getUserAddress && getUserAddress();
                onOk();
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            // For update
            try {
                const res = await MakeApiCall({
                    apiUrl: MY_ADDRESS_URL,
                    method: "PATCH",
                    query: { id: data._id },
                    body: { ...values },
                    headers: { Authorization: token },
                });

                handleDetailsModalOpen(null);
                toast.success(res?.message);
                // router.refresh();
                getUserAddress();
                onOk();
            } catch (error) {
                toast.error(error.message);
            }
        }
    };

    const handleCountryChange = (value) => {
        setSelectedCountry(value);
        const newState = countriesData.find((item) => item.country === value);
        const optionsState = newState?.states.map((item) => {
            return {
                value: item,
                label: item,
            };
        });
        setSelectedState(optionsState);
    };

    return (
        <div className="w-full flex flex-col">
            <div className="py-6 flex flex-col gap-y-6">
                {/* <h1 className="text-neutral-700 text-xl font-medium">
                    {modalInnerTitle}
                </h1> */}

                <Form layout="vertical" onFinish={onFinish} form={form}>
                    <Form.Item
                        label={
                            <h3 className="text-neutral-400 text-sm font-medium">
                                Address name
                            </h3>
                        }
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Address name is required!",
                            },
                            {
                                min: 2,
                                message:
                                    "Address name must be 2 characters long!",
                            },
                        ]}
                    >
                        <Input
                            className="py-3 rounded-sm border border-neutral-40 bg-neutral-10"
                            placeholder="My address"
                        />
                    </Form.Item>

                    <div className="grid grid-cols-2 gap-x-5">
                        <Form.Item
                            className="col-span-1"
                            label={
                                <h3 className="text-neutral-400 text-sm font-medium">
                                    Country
                                </h3>
                            }
                            name="country"
                            rules={[
                                {
                                    required: true,
                                    message: "Country is required!",
                                },
                            ]}
                        >
                            <Select
                                // defaultValue={data ? data.country : ""}
                                placeholder="Select Country"
                                className="country-state-select  bg-neutral-10"
                                style={{
                                    // backgroundColor: "#FAFBFB",
                                    height: 52,
                                }}
                                options={countryData}
                                onChange={handleCountryChange}
                            />
                        </Form.Item>

                        <Form.Item
                            className="col-span-1"
                            label={
                                <h3 className="text-neutral-400 text-sm font-medium">
                                    State/District
                                </h3>
                            }
                            name="state"
                            rules={[
                                {
                                    required: true,
                                    message: "State/District is required!",
                                },
                                {
                                    min: 2,
                                    message:
                                        "State/District must be 2 characters long!",
                                },
                            ]}
                        >
                            <Input
                                className="py-3 rounded-sm border border-neutral-40 bg-neutral-10"
                                placeholder="Enter state/district name"
                            />
                        </Form.Item>

                        <Form.Item
                            className="col-span-1"
                            label={
                                <h3 className="text-neutral-400 text-sm font-medium">
                                    City/Area
                                </h3>
                            }
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: "City is required!",
                                },
                                {
                                    min: 2,
                                    message: "City must be 2 characters long!",
                                },
                            ]}
                        >
                            <Input
                                className="py-3 rounded-sm border border-neutral-40 bg-neutral-10"
                                placeholder="Enter city/area name"
                            />
                        </Form.Item>

                        <Form.Item
                            className="col-span-1"
                            label={
                                <h3 className="text-neutral-400 text-sm font-medium">
                                    ZIP/Postal code
                                </h3>
                            }
                            name="zip"
                            rules={[
                                {
                                    required: true,
                                    message: "ZIP/Postal code is required!",
                                },
                                {
                                    min: 2,
                                    message:
                                        "ZIP/Postal code must be 2 characters long!",
                                },
                            ]}
                        >
                            <Input
                                className="py-3 rounded-sm border border-neutral-40 bg-neutral-10"
                                placeholder="Enter zip/postal code"
                            />
                        </Form.Item>
                    </div>

                    <Form.Item
                        label={
                            <h3 className="text-neutral-400 text-sm font-medium">
                                Street Address
                            </h3>
                        }
                        name="addressLine1"
                        rules={[
                            {
                                required: true,
                                message: "Street address is required!",
                            },
                            {
                                min: 2,
                                message:
                                    "Street address must be 2 characters long!",
                            },
                        ]}
                    >
                        <TextArea
                            rows={4}
                            placeholder="Enter address..."
                            maxLength={1000}
                            showCount
                            className="text-neutral-500 text-sm font-medium "
                        />
                    </Form.Item>
                    <div className="pt-6">
                        <Buttons.PrimaryButton
                            label={buttonTitle}
                            className="flex justify-center items-center h-12 text-white font-semibold"
                            width="w-full"
                            type="submit"
                            // onClick={onOk}
                        />
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default AddressModal;
