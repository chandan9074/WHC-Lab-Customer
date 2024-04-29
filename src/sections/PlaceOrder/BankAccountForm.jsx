import { Flex, Form, Input, InputNumber, Select } from "antd";
import React from "react";

const BankAccountForm = ({ inputStyle }) => {
    return (
        <div>
            <Flex horizontal={true} gap={20}>
                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            Account Type
                        </p>
                    }
                    className={`w-1/2 `}
                    name="type"
                    rules={[{ required: true }]}
                >
                    <Select
                        placeholder="Savings"
                        style={{
                            backgroundColor: "#FAFBFB",
                            height: 48,
                        }}
                    >
                        <Select.Option value="savings">Savings</Select.Option>
                        <Select.Option value="current">Current</Select.Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            Routing Number
                        </p>
                    }
                    name="routingNumber"
                    rules={[
                        {
                            required: true,
                            message: "Routing number name is required.",
                        },
                    ]}
                    className="w-1/2"
                >
                    <InputNumber
                        className={`${inputStyle}  bg-neutral-10 h-12 w-full rounded-sm pt-1`}
                        controls={false}
                        placeholder="123456798"
                        type="number"
                    />
                </Form.Item>
            </Flex>

            <Flex horizontal={true} gap={20}>
                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            Account Number
                        </p>
                    }
                    name="accountNumber"
                    rules={[
                        {
                            required: true,
                            message: "Account number name is required.",
                        },
                    ]}
                    className="w-1/2"
                >
                    <InputNumber
                        className={`${inputStyle}  bg-neutral-10 h-12 w-full rounded-sm pt-1`}
                        controls={false}
                        placeholder="123456798123456789"
                        type="number"
                    />
                </Form.Item>

                <Form.Item
                    label={
                        <p className=" text-neutral-700 font-medium">
                            Account Name
                        </p>
                    }
                    name="accountName"
                    rules={[
                        {
                            required: true,
                            message: "Account name is required.",
                        },
                    ]}
                    className="w-1/2"
                >
                    <Input
                        className={`  bg-neutral-10 rounded-sm h-12 active:text-black`}
                        placeholder="Account Holder's Name"
                    />
                </Form.Item>
            </Flex>
        </div>
    );
};

export default BankAccountForm;
