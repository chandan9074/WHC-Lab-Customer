"use client";
import Buttons from "@/components/Buttons";
import Text from "@/components/Text";
import BlogService from "@/services/BlogService";
import { Form, Spin, Input } from "antd";
// import TextArea from "antd/es/input/TextArea";
import { getCookie } from "cookies-next";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
const { TextArea } = Input;

function CommentForm({ blogId }) {
    const _userInfo = getCookie("userInfo");
    const userInfo = _userInfo && JSON.parse(_userInfo);
    const token = getCookie("accessToken");
    const router = useRouter();
    const pathname = usePathname();
    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();

    const handleMakeComment = async (values) => {
        if (token) {
            setLoading(true);
            values.blogId = blogId;
            values.author = {
                _id: userInfo._id,
                authorName: userInfo?.firstName + " " + userInfo?.lastName,
            };
            values.author.profilePicture = userInfo?.profilePicture;

            const res = await BlogService.createBlogs(values, token);

            if (res?.status === 200) {
                toast.success(res?.message);
                form.resetFields();
                router.refresh();
            }
            setLoading(false);
        } else {
            router.push(`/log-in?redirect=${pathname}`);
        }
    };

    return (
        <div className="flex flex-col gap-6">
            <Spin spinning={loading} fullscreen />
            <Text.Secondary>Leave a Comment</Text.Secondary>

            <Form layout="vertical" onFinish={handleMakeComment} form={form}>
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
                        rows={4}
                        placeholder="Please write comment here..."
                        autoSize={{ minRows: 5, maxRows: 8 }}
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
