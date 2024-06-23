"use client";
import React, { useEffect, useState } from "react";
import CollaborationService from "@/services/CollaborationService";
import { Spin } from "antd";
import Card from "@/sections/Home/Collaboration/Card";

function CollaborationList() {
    const [collaborations, setCollaborations] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [totalPages, setTotalPages] = useState(0);

    const getCollaborations = async () => {
        setLoading(true);
        try {
            const res = await CollaborationService.getCollaborations(page);

            if (res?.status === 200) {
                setCollaborations((ps) => [...ps, ...res?.docs]);
                setTotalPages(res?.totalPages);
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getCollaborations();
    }, [page]);

    const handlePageChange = () => {
        setPage(2);
    };

    return (
        <div>
            <Spin spinning={loading} fullscreen />
            <div className="flex flex-col items-center justify-center gap-7">
                {collaborations?.map((item, index) => {
                    return (
                        <div key={index} className="w-full">
                            <Card data={item} />
                        </div>
                    );
                })}
                <button
                    onClick={handlePageChange}
                    disabled={page === totalPages}
                    className="border border-[#061628] p-4 rounded-full text-[16px] test-[#0B2848]"
                >
                    Show More
                </button>
            </div>
        </div>
    );
}

export default CollaborationList;
