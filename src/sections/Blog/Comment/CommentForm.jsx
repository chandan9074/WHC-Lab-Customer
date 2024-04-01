'use client'
import Buttons from '@/components/Buttons'
import Text from '@/components/Text'
import { Form } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import React from 'react'

function CommentForm() {
    return (
        <div className='flex flex-col gap-6'>
            <Text.Secondary>Leave a Comment</Text.Secondary>

            <Form
                layout="vertical"
                onFinish={(values) => console.log(values)}
            >
                <Form.Item
                    name="comment"
                    rules={[{ required: true, message: 'Please input your comment!' }]}
                >
                    <TextArea rows={5} placeholder='Please write comment here...' />
                </Form.Item>

                <div className="mt-8">
                    <Buttons.PrimaryButton label={'Submit Comment'} />
                </div>
            </Form>
        </div>
    )
}

export default CommentForm