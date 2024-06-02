"use client";
import InfoPagesContainer from "@/components/common/InfoPagesContainer";
import PageHeaderWithNameAndBgImage from "@/components/common/PageHeaderWithNameAndBgImage";
import Layouts from "@/layouts";
import Image from "next/image";
import React, { useState } from "react";
import Icons from "../../../../public/assets/Icons";
import { Button, Form, Input, Spin } from "antd";
import LabelText from "@/components/common/LabelText";
import PhoneNumberInputField from "@/components/common/PhoneNumberInputField";
import Buttons from "@/components/Buttons";
import UserService from "@/services/UserService/UserService";
import { toast } from "react-toastify";

function Contact() {
    const [loading, setLoding] = useState(false);
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoding(true);
        values.phone = values.prefix + values.phone;
        delete values.prefix;

        try {
            const res = await UserService.makeAContact(values);

            if (res?.status === 200) {
                toast.success(res?.message);
                form.resetFields();
            }
        } catch (e) {
            toast.error(e?.message);
        } finally {
            setLoding(false);
        }
    };

    return (
        <Layouts.Primary breadcrumb={false}>
            <PageHeaderWithNameAndBgImage pageHeading="Contact Us" />
            <InfoPagesContainer>
                <div className="flex flex-col gap-12 md:flex-row">
                    <div className="w-full p-6 md:p-12 flex flex-col gap-6 md:gap-9">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl md:text-4xl font-semibold text-brand-blue-500 font-montserrat">
                                Send Us A Message
                            </h3>
                            <p className="text-sm md:text-base text-neutral-400 font-poppins">
                                Want to get in touch? We’d love to hear from you
                            </p>
                        </div>
                        <Form
                            onFinish={onFinish}
                            layout="vertical"
                            className="flex flex-col gap-6 md:gap-9"
                            initialValues={{ prefix: "+1" }}
                            form={form}
                        >
                            <div className="flex flex-col gap-6">
                                <Form.Item
                                    label={<LabelText>Name</LabelText>}
                                    name="name"
                                    rules={[
                                        {
                                            required: true,
                                            message: "Please input your name!",
                                        },
                                    ]}
                                    className="mb-0"
                                >
                                    <Input placeholder="Enter your name" />
                                </Form.Item>
                                <div className="flex flex-col gap-6 md:flex-row md:items-center">
                                    <div className="w-full md:w-1/2">
                                        <Form.Item
                                            label={<LabelText>Email</LabelText>}
                                            name="email"
                                            rules={[
                                                {
                                                    type: "email",
                                                    message:
                                                        "The input is not valid E-mail!",
                                                },
                                                {
                                                    required: true,
                                                    message:
                                                        "Please input your E-mail!",
                                                },
                                            ]}
                                            className="mb-0 w-full"
                                        >
                                            <Input placeholder="Enter your email" />
                                        </Form.Item>
                                    </div>
                                    <div className="w-full md:w-1/2">
                                        <PhoneNumberInputField
                                            labelText="Phone"
                                            name="phone"
                                        />
                                    </div>
                                </div>

                                <Form.Item
                                    label={<LabelText>Description</LabelText>}
                                    name="description"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please enter description!",
                                        },
                                    ]}
                                >
                                    <Input.TextArea
                                        showCount
                                        rows={6}
                                        maxLength={100}
                                        placeholder="Please write description here..."
                                    />
                                </Form.Item>

                                <p className="text-neutral-400 text-base font-poppins">
                                    I consent to the processing of my personal
                                    data to WHC Lab for contact purposes. For
                                    more information, please refer to our{" "}
                                    <span className="text-brand-blue-500">
                                        privacy policy
                                    </span>
                                    .
                                </p>
                            </div>

                            <div className="w-full">
                                {!loading ? (
                                    <Buttons.PrimaryButton
                                        label={"Submit"}
                                        width={"md:w-1/3 w-full"}
                                    />
                                ) : (
                                    <Button
                                        className="h-[52px] py-3 sm:py-3.5 px-6 font-montserrat rounded-full  flex items-center gap-2.5 md:w-1/3 w-full justify-center bg-brand-blue-800 text-white font-bold"
                                        loading={loading}
                                    >
                                        Submit
                                    </Button>
                                )}
                            </div>
                        </Form>
                    </div>
                    <div className="w-full bg-neutral-10 p-6 md:p-12 flex flex-col gap-6 md:gap-9 rounded-2xl border border-stroke-new">
                        <h3 className="text-2xl md:text-4xl font-semibold text-brand-blue-500 font-montserrat">
                            Let’s Connect
                        </h3>
                        <div className="flex flex-col gap-4">
                            {Array(5)
                                .fill()
                                .map((_, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3"
                                    >
                                        <Image
                                            src={Icons.phone}
                                            width={1000}
                                            height={1000}
                                            alt="arrow-button"
                                            className="w-5 h-5 md:w-6 md:h-6"
                                        />
                                        <p className="text-brand-blue-500 text-sm md:text-lg font-light">
                                            EU Sales & Technical: +353 894 068
                                            622
                                        </p>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </InfoPagesContainer>
        </Layouts.Primary>
    );
}

export default Contact;
