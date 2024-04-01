import Buttons from "@/components/Buttons";
import { Form } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Icons from "../../../../../public/assets/Icons";
import TextArea from "antd/es/input/TextArea";

const ItemReviewForm = ({ submit, productName, category, image }) => {
    const [form] = Form.useForm();
    const [selectedRating, setSelectedRating] = useState(null);

    const handleRating = (value) => {
        setSelectedRating(value);
    };

    const onFinish = (values) => {
        const _data = {
            ...values,
            rating: selectedRating,
        };
        submit(_data);
    };

    const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
    };

    return (
        <div>
            <Form
                layout="vertical"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                form={form}
            >
                <div className=" px-[30px] pt-8">
                    <div className="flex flex-col items-center">
                        <Image
                            alt="avatar"
                            src={image ? image : ""}
                            width={1000}
                            height={1000}
                            className="h-[120px] w-[120px]"
                        />
                        {productName && (
                            <p className="text-brand-blue-800 text-base font-medium mt-4">
                                {productName}
                            </p>
                        )}
                        {category && (
                            <div className="text-neutral-300 text-[13px] font-medium ">
                                {category}
                            </div>
                        )}
                    </div>

                    <div className="mt-8">
                        <p className="text-brand-blue-800 text-sm font-medium">
                            Rating
                        </p>
                        <div className="text-neutral-400 text-sm font-medium">
                            Give your rating by taping the stars
                        </div>

                        <div className="flex gap-x-[10px] mt-5">
                            {Array.from(
                                { length: 5 },
                                (_, index) => index + 1
                            ).map((item, i) => (
                                <Buttons.RatingBtn
                                    key={i}
                                    icon={Icons.rating}
                                    label={item.toString()}
                                    onClick={() => handleRating(item)}
                                    active={selectedRating === item}
                                    type="button"
                                />
                            ))}
                        </div>

                        <div className="space-y-3 mt-7">
                            <p className="text-neutral-400 text-xs font-medium leading-[15.62px] md:text-sm md:leading-[18.23px]">
                                Write something about the seller
                            </p>

                            <Form.Item
                                name="review"
                                rules={[
                                    {
                                        required: false,
                                    },
                                ]}
                            >
                                <TextArea
                                    className="text-neutral-400"
                                    placeholder="Write your review here...."
                                    style={{ width: "100%", height: "100px" }}
                                    // maxLength={300}
                                />
                            </Form.Item>
                            <div className="text-neutral-100 text-[12px] mt-2">
                                Max character limit: 300
                            </div>
                        </div>
                    </div>

                    {/* <div className="border-t border-x-primary-black-88 mt-[48px] mb-5"></div> */}
                </div>

                <div className="pb-5 px-[30px] pt-10">
                    <Buttons.PrimaryButton
                        label="Submit"
                        variant="primary"
                        width="w-full"
                        onClick={() => form.submit()}
                    />
                </div>
            </Form>
        </div>
    );
};

export default ItemReviewForm;
