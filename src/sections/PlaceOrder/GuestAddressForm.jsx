import { Flex, Form, Input, Select, Typography } from "antd";
const { Text } = Typography;
const { TextArea } = Input;

import React from "react";
import BillingAddressToggleButton from "./BillingAddressToggleButton";
import { useUserContext } from "@/contexts/UserContext";
import { getCookie, hasCookie } from "cookies-next";

const GuestAddressForm = ({
    inputStyle,
    onToggleChange,
    billingAddress = false,
}) => {
    const { locations } = useUserContext();
    const location = getCookie("selected_location");
    const selectedLocation =
        hasCookie("selected_location") && JSON.parse(location);

    return (
        <div
            // name="form_item_path"
            // layout="vertical"
            // onFinish={onFinish}
            className="mt- p-4 bg-white"
        >
            <Flex horizontal={true} gap={20}>
                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            First Name
                        </p>
                    }
                    name={billingAddress ? "billingFirstName" : "firstName"}
                    rules={[
                        {
                            required: true,
                            message: "First name is required.",
                        },
                    ]}
                    className="w-1/2"
                >
                    <Input
                        className={`${inputStyle} bg-neutral-10 h-12 rounded-sm`}
                        placeholder="First Name"
                    />
                </Form.Item>

                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            Last Name
                        </p>
                    }
                    name={billingAddress ? "billingLastName" : "lastName"}
                    rules={[{ required: true }]}
                    className="w-1/2"
                >
                    <Input
                        className={`${inputStyle}  bg-neutral-10 h-12 rounded-sm`}
                        placeholder="Last Name"
                    />
                </Form.Item>
            </Flex>

            <Flex horizontal={true} gap={20}>
                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            Phone Number
                        </p>
                    }
                    name={
                        billingAddress ? "billingPrimaryPhone" : "primaryPhone"
                    }
                    rules={[{ required: true }]}
                    className="w-1/2"
                >
                    <Input
                        className={`${inputStyle}  bg-neutral-10 h-12 rounded-sm`}
                        placeholder="+880 - 1234567890"
                    />
                </Form.Item>

                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">Email</p>
                    }
                    name={
                        billingAddress ? "billingPrimaryEmail" : "primaryEmail"
                    }
                    rules={[{ required: true }]}
                    className="w-1/2"
                >
                    <Input
                        className={`${inputStyle}  bg-neutral-10 h-12 rounded-sm`}
                        placeholder="username@mail.com"
                    />
                </Form.Item>
            </Flex>

            <Flex horizontal={true} gap={20}>
                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            Vat (Optional)
                        </p>
                    }
                    name={
                        billingAddress ? "billingPrimaryEmail" : "primaryEmail"
                    }
                    rules={[{ required: false }]}
                    className="w-1/2"
                >
                    <Input
                        className={`${inputStyle}  bg-neutral-10 h-12 rounded-sm`}
                        placeholder="Enter Vat"
                    />
                </Form.Item>

                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            Company Registration Number
                        </p>
                    }
                    name={"companyRegistrationNumber"}
                    rules={[{ required: false }]}
                    className="w-1/2"
                >
                    <Input
                        className={`${inputStyle}  bg-neutral-10 h-12 rounded-sm`}
                        placeholder="Enter Registration Number"
                    />
                </Form.Item>
            </Flex>

            <Form.Item
                label={
                    <p className=" text-neutral-700 font-medium">
                        Company Name
                    </p>
                }
                name={"companyRegistrationNumber"}
                rules={[{ required: false }]}
                className="w-1/1"
            >
                <Input
                    className={`${inputStyle}  bg-neutral-10 h-12 rounded-sm`}
                    placeholder="Enter Company name"
                />
            </Form.Item>

            <Form.Item
                label={
                    <p className=" text-neutral-700 font-medium">
                        Street Address
                    </p>
                }
                name={billingAddress ? "billingAddressLine1" : "addressLine1"}
                rules={[{ required: true }]}
                className="w-1/1"
            >
                <TextArea
                    className={`${inputStyle} bg-neutral-10 rounded-sm`}
                    placeholder="e.g. Road no., Area, City, Zip code etc."
                    showCount
                    rows={4}
                    maxLength={1000}
                    autoSize={{
                        minRows: 3,
                        maxRows: 5,
                    }}
                />
            </Form.Item>

            <div className="flex  flex-col lg:flex-row w-full gap-5">
                <div className="flex flex-row w-full gap-5">
                    <Form.Item
                        label={
                            <p className=" text-neutral-700 font-medium">
                                Country
                            </p>
                        }
                        className={`w-1/2`}
                        name={billingAddress ? "billingCountry" : "country"}
                        rules={[{ required: true }]}
                    >
                        <Select
                            placeholder="Please select a country"
                            style={{
                                backgroundColor: "#FAFBFB",
                                height: 48,
                            }}
                            options={locations}
                            defaultValue={selectedLocation || null}
                        ></Select>
                    </Form.Item>

                    <Form.Item
                        label={
                            <p className=" text-neutral-700 font-medium">
                                District/State
                            </p>
                        }
                        className="w-1/2"
                        name={billingAddress ? "billingState" : "state"}
                        rules={[{ required: true }]}
                    >
                        <Input
                            className={`${inputStyle}  bg-neutral-10 h-12 rounded-sm`}
                            placeholder="Enter District/State name"
                        />
                        {/* <Select
                            placeholder="Please Select"
                            style={{
                                backgroundColor: "#FAFBFB",
                                height: 48,
                            }}
                        >
                            <Select.Option value="state">Demo</Select.Option>
                        </Select> */}
                    </Form.Item>
                </div>
                <div className="flex flex-row w-full gap-5">
                    <Form.Item
                        label={
                            <p className=" text-neutral-700 font-medium">
                                City/Area
                            </p>
                        }
                        className="w-1/2"
                        name={billingAddress ? "billingCity" : "city"}
                        rules={[{ required: true }]}
                    >
                        <Input
                            className={`${inputStyle}  bg-neutral-10 h-12 rounded-sm`}
                            placeholder="Enter City/Area name"
                        />
                        {/* <Select
                            placeholder="Please Select"
                            style={{
                                backgroundColor: "#FAFBFB",
                                height: 48,
                            }}
                        >
                            <Select.Option value="demo">Dhaka</Select.Option>
                        </Select> */}
                    </Form.Item>

                    <Form.Item
                        label={
                            <p className=" text-neutral-700 font-medium">
                                ZIP/Postal Code
                            </p>
                        }
                        className="w-1/2 whitespace-nowrap"
                        name={billingAddress ? "billingZip" : "zip"}
                        rules={[{ required: true }]}
                    >
                        <Input
                            className={`${inputStyle} bg-neutral-10 rounded-sm h-12`}
                            placeholder="ZIP/Postal code"
                        />
                    </Form.Item>
                </div>
            </div>
            {!billingAddress && (
                <BillingAddressToggleButton onToggleChange={onToggleChange} />
            )}
        </div>
    );
};

export default GuestAddressForm;
