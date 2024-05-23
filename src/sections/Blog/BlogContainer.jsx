"use client";
import React, { Fragment, useState } from "react";
import BlogInfoCard from "./BlogInfoCard";
import { Pagination } from "antd";

function BlogContainer({ blogsData, blogDataTotalPage, blogDataLimit }) {
    const [current, setCurrent] = useState(1);
    // const handlePagination = () => {
    //     console.log("page changed");
    // };
    const onChange = (page) => {
        console.log(page);
        setCurrent(page);
    };
    return (
        <>
            <div className="grid grid-col-1 md:grid-cols-3 gap-6">
                {blogsData?.map((data) => (
                    <Fragment key={data._id}>
                        <BlogInfoCard data={data} />
                    </Fragment>
                ))}
            </div>
            <div className="w-full flex justify-center mt-8">
                <Pagination
                    defaultCurrent={1}
                    current={current}
                    total={blogDataTotalPage * blogDataLimit}
                    onChange={(value) => setCurrent(value)}
                />
            </div>
        </>
    );
}

export default BlogContainer;
