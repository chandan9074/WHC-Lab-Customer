import { DatePicker, Form, Input } from "antd";
import React from "react";
import dayjs from "dayjs";
// import moment from "dayjs/plugin/advancedFormat";

const CardForm = ({ form, handleExpiryDate }) => {
    const monthFormat = "YYYY/MM";
    const onChange = (date, dateString) => {
        // console.log(dateString);
        handleExpiryDate(dateString);
    };
    return (
        <div className="flex flex-col md:flex-row gap-3 w-full">
            <Form.Item
                name="cardNumber"
                label="Card Number"
                className="grow w-full"
                rules={[
                    {
                        required: true,
                        message: "Please input your card number!",
                    },
                ]}
            >
                <Input
                    placeholder="1234 1234 1234 1234"
                    className="grow h-12"
                />
            </Form.Item>
            <div className="flex gap-3 w-full">
                <Form.Item
                    name="expiredDate"
                    label="Expiry Date"
                    // getValueProps={(i) => ({ value: moment(i) })}
                    rules={[
                        {
                            required: true,
                            message: "Please input your expiry date!",
                        },
                    ]}
                    // className="w-full"
                >
                    {/* <Input placeholder="MM/YY" /> */}
                    <DatePicker
                        defaultValue={dayjs("2024/01", monthFormat)}
                        format={monthFormat}
                        picker="month"
                        placeholder="YY/MM"
                        onChange={onChange}
                        className="w-full md:w-32"
                    />
                </Form.Item>
                <Form.Item name="csv" label="CVV/CVC" className="w-full ">
                    <Input placeholder="123" className="h-12" />
                </Form.Item>
            </div>
        </div>
    );
};

export default CardForm;
