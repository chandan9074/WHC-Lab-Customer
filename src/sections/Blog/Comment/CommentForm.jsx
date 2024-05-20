"use client";
import Buttons from "@/components/Buttons";
import Text from "@/components/Text";
import BlogService from "@/services/BlogService";
import { Form, Spin } from "antd";
import TextArea from "antd/es/input/TextArea";
import { getCookie } from "cookies-next";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function CommentForm({ blogId }) {
    const userInfo = JSON.parse(getCookie("userInfo"));
    const token = getCookie("accessToken");
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleMakeComment = async (values) => {
        setLoading(true);
        values.blogId = blogId;
        values.author = {
            _id: userInfo._id,
            authorName: userInfo?.firstName + " " + userInfo?.lastName,
        };

        const res = await BlogService.createBlogs(values, token);

        if (res?.status === 200) {
            toast.success(res?.message);
            router.refresh();
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col gap-6">
            <Spin spinning={loading} fullscreen />
            <Text.Secondary>Leave a Comment</Text.Secondary>

            <Form layout="vertical" onFinish={handleMakeComment}>
                <Form.Item
                    name="commentText"
                    rules={[
                        {
                            required: true,
                            message: "Please input your comment!",
                        },
                    ]}
                >
                    <TextArea
                        rows={5}
                        placeholder="Please write comment here..."
                    />
                </Form.Item>

                <div className="mt-8">
                    <Buttons.PrimaryButton label={"Submit Comment"} />
                </div>
            </Form>
        </div>
    );
}

export default CommentForm;
