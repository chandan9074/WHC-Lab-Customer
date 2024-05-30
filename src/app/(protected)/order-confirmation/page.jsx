"use client";
import Layouts from "@/layouts";
import React, { Suspense, useEffect } from "react";
import { useRouter } from "next/navigation";

function OrderConfirmation() {
    const router = useRouter();

    useEffect(() => {
        router.back();
    }, []);

    return (
        <Suspense fallback={null}>
            <Layouts.Primary>OrderConfirmation page.</Layouts.Primary>
        </Suspense>
    );
}

export default OrderConfirmation;
