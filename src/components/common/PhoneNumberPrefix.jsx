import React from "react";
import { Form, Select } from "antd";

function PhoneNumberPrefix() {
    const { Option } = Select;
    return (
        <Form.Item name={"prefix"} value="+880" noStyle>
            <Select
                defaultValue="+880"
                className="flex items-center w-20 h-full"
            >
                <Option value="+880">+880</Option>
                <Option value="+1">+1</Option>
            </Select>
        </Form.Item>
    );
}

export default PhoneNumberPrefix;
