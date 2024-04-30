import { Form, Switch, Typography } from "antd";
import React from "react";
const { Text } = Typography;

const BillingAddressToggleButton = ({ onToggleChange }) => {
    return (
        <div className="flex justify-between items-center mt-6">
            <div className="flex flex-col">
                <Text className="font-bold text-neutral-700 text-lg">
                    Billing address <span className="text-red-500">*</span>
                </Text>
                <Text className="text-[#5D6B82]">Same as delivery address</Text>
            </div>
            <Form.Item valuePropName="checked" name="billingAddress">
                <Switch defaultChecked onChange={onToggleChange} />
            </Form.Item>
        </div>
    );
};

export default BillingAddressToggleButton;
