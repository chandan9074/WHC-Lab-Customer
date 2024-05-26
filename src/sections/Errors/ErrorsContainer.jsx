"use client"; // Error components must be Client Components

import { useEffect } from "react";
import Image from "next/image";
import Buttons from "@/components/Buttons";
import Link from "next/link";
import Images from "../../../public/assets/Images";

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <div className="w-full h-screen flex flex-col items-center justify-center gap-4 p-2">
            <Image
                alt="profile"
                src={Images.something_went_wrong}
                width={1000}
                height={1000}
                className="w-[30rem] h-[30rem] rounded-full mb-2"
            />
            <h2 className="text-magenta-600 font-extrabold text-4xl">Oops!</h2>
            <h2 className="text-base text-brand-blue-500 font-medium">Something went wrong!</h2>

            <div className="flex gap-4">
                <Buttons.PrimaryButton
                    onClick={() => reset()}
                    label="Try again!"
                    className="text-white bg-magenta-500 p-2 border"
                >
                    Try again
                </Buttons.PrimaryButton>
                <Link href="/">
                    <Buttons.OutlinedButton label="Return Home" active />
                </Link>
            </div>
        </div>
    );
}
