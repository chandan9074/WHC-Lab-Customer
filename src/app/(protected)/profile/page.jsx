"use client";
import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";
import Loader from "@/components/common/Loader";

function Profile() {
    const router = useRouter();

    useEffect(() => {
        router.push("/profile/my-account");
    }, []);

    return (
        <Suspense fallback={<Loader />}>
            <div className="h-screen w-full"></div>
        </Suspense>
    );
}

export default Profile;
