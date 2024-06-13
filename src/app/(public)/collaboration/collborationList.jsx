"use client";
import React, { useEffect, useState } from "react";
import CollaborationService from "@/services/CollaborationService";
import { Spin } from "antd";
import Card from "@/sections/Home/Collaboration/Card";

function CollaborationList() {
    const [collaborations, setCollaborations] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const getCollaborations = async () => {
        try {
            const res = await CollaborationService.getCollaborations(page);

            if (res?.status === 200) {
                setCollaborations(res);
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

    // const handlePageChange = () => {
    //     setPage(2);
    // };

    return (
        <div>
            <Spin spinning={loading} fullscreen />
            <div className="flex flex-col items-center justify-center gap-7">
                {collaborations?.docs?.map((collaboration, index) => {
                    return <Card data={collaboration} key={index} />;
                })}
                {/* <button onClick={handlePageChange}>asdfasdf</button> */}
            </div>
        </div>
    );
}

export default CollaborationList;
