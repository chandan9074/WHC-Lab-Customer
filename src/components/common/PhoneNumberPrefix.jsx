import React from "react";
import { Form, Select } from "antd";

function PhoneNumberPrefix() {
    const { Option } = Select;
    return (
        <Form.Item name={"prefix"} noStyle className="outline-none">
            <Select
                defaultValue={"+880"}
                className="flex items-center w-20 focus:border-none"
                style={{
                    height: "52px",
                }}
            >
                <Option value="+880" className="text-red-800">
                    <span className="text-[#505F79]">+880</span>
                </Option>
                <Option value="+1">
                    <span className="text-[#505F79]">+1</span>
                </Option>
            </Select>
        </Form.Item>
    );
}

export default PhoneNumberPrefix;
