import { Form, Input, InputNumber } from "antd";
import React from "react";
import LabelText from "./LabelText";
import PhoneNumberPrefix from "./PhoneNumberPrefix";

function PhoneNumberInputField({
    name = "primaryPhone",
    labelText = "Enter your phone number",
}) {
    return (
        <Form.Item
            label={<LabelText>{labelText}</LabelText>}
            name={name}
            rules={[
                {
                    required: true,
                    message: "Please input your phone number!",
                },
                {
                    min: 10,
                    message: "Please enter valid phone number!",
                },
            ]}
            className="w-full text-sm font-medium text-neutral-300 mb-0"
        >
            <InputNumber
                controls={false}
                min={10}
                addonBefore={<PhoneNumberPrefix />}
                className="w-full rounded"
                placeholder="1234567890"
            />
        </Form.Item>
    );
}

export default PhoneNumberInputField;
