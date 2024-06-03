"use client";
import React, { Fragment, useState } from "react";
import BlogInfoCard from "./BlogInfoCard";
import { Pagination } from "antd";
import { getCookie } from "cookies-next";
import MakeApiCall from "@/services/MakeApiCall";
import { BLOG_URL } from "@/helpers/apiURLS";

function BlogContainer({ blogsData }) {
    const [current, setCurrent] = useState(1);
    const [list, setList] = useState(blogsData?.docs || []);
    const token = getCookie("accessToken");

    const onChange = async (page) => {
        console.log(page);
        const res = await MakeApiCall({
            apiUrl: BLOG_URL,
            headers: { Authorization: token },
            query: { page: page, limit: 9 },
        });
        setList(res.docs);

        setCurrent(page);
    };
    // const handlePagination = () => {
    //     console.log("page changed");
    // };

    return (
        <>
            <div className="grid grid-col-1 md:grid-cols-3 gap-6">
                {list?.map((data) => (
                    <Fragment key={data._id}>
                        <BlogInfoCard data={data} />
                    </Fragment>
                ))}
            </div>
            <div className="w-full flex justify-center mt-8">
                <Pagination
                    defaultCurrent={1}
                    current={current}
                    total={blogsData?.totalDocuments}
                    pageSize={9}
                    onChange={onChange}
                />
            </div>
        </>
    );
}

export default BlogContainer;
