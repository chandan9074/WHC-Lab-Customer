"use client";
import { useCallback, useEffect, useState } from "react";
import VerificationInput from "react-verification-input";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Images from "../../../public/assets/Images";
import TimerDisplay from "./TimerDisplay";
import { setCookie } from "cookies-next";

const VerificationForm = ({ title, handleUpdate, verifyShortForm }) => {
    const timer = 180;
    const [verificationCode, setVerificationCode] = useState("");
    const [hiddenMail, setHiddenMail] = useState("");
    const [timeRemaining, setTimeRemaining] = useState(timer);

    const currentPath = usePathname();

    const resetTimer = useCallback(() => {
        setCookie("timeRemaining", timer);
        setTimeRemaining(timer);
    }, [setTimeRemaining]);

    function hideEmail(email) {
        // Split the email address into local part and domain part
        var parts = email.split("@");
        var localPart = parts[0];
        var domainPart = parts[1];

        // Get the first two characters of the local part
        var firstTwoChars = localPart.substring(0, 2);

        // Replace the remaining characters in the local part with "*"
        var hiddenLocalPart = firstTwoChars + "*".repeat(3);

        // Join the local part and domain part with "@" to form the hidden email
        var hiddenEmail = hiddenLocalPart + "@" + domainPart;

        setHiddenMail(hiddenEmail);
    }

    useEffect(() => {
        hideEmail(verifyShortForm);
    }, []);

    // const linkHref =
    //     currentPath === FORGOT_PASSWORD_VERIFY_PATH
    //         ? FORGOT_PASSWORD_CONFIRMATION_PATH
    //         : "/";

    const handleFinish = () => {
        handleUpdate && handleUpdate(verificationCode);
    };

    return (
        <div className="w-full flex justify-center">
            <div className="w-[328px] sm:w-[600px] flex flex-col justify-center gap-6 md:gap-12 rounded-lg border border-black border-opacity-10 md:p-12 p-6 bg-white">
                <h1 className="flex w-full justify-center font-semibold text-lg md:text-[28px] text-brand-blue-800 md:leading-[34px] py-5 border-b border-black border-opacity-[10%]">
                    Verification Code
                </h1>

                <div className="w-full flex justify-center">
                    <Image
                        width={1000}
                        height={1000}
                        alt="verifyOTP"
                        src={Images.verify_otp_image}
                    />
                </div>

                <div className="space-y-6 md:space-y-9">
                    <div className="space-y-3">
                        <h1 className="text-brand-blue-800 text-base md:text-xl font-semibold leading-[21px] md:leading-[30px]">
                            Verify your {title}
                        </h1>
                        <p className="text-neutral-400 text-sm font-normal leading-[21px]">
                            We just sent a verification code to{" "}
                            <span className="text-brand-blue-800">
                                {hiddenMail}
                            </span>
                        </p>
                    </div>

                    <div className="w-full flex flex-col gap-y-4 py-9">
                        <div className="w-full flex justify-between">
                            <p className="text-neutral-300 text-sm font-medium">
                                Verification Code
                            </p>
                            <button
                                onClick={resetTimer}
                                className="text-neutral-700 text-sm font-semibold cursor-pointer"
                            >
                                Re-send Code
                            </button>
                        </div>

                        <VerificationInput
                            validChars="0-9"
                            classNames={{
                                container:
                                    "w-full flex justify-between gap-x-2 md:gap-x-6",
                                character:
                                    "w-[43px] h-[41px] sm:w-[60px] sm:h-[60px] text-[15px] md:text-base text-[#3A3A3A] flex items-center justify-center leading-[18.23px] md:leading-[19.53px] bg-white rounded-[10px] border border-neutral-50 ",
                                characterSelected: "outline-brand-blue-500",
                            }}
                            onChange={(code) => setVerificationCode(code)}
                        />

                        <div className="w-full flex justify-between items-center">
                            {/* <Link href={"change-phone-number"}> */}
                            <p className="text-neutral-700 text-sm font-bold leading-[18.23px] cursor-pointer">
                                Change {title}
                            </p>
                            {/* </Link> */}
                            <TimerDisplay
                                timeRemaining={timeRemaining}
                                setTimeRemaining={setTimeRemaining}
                            />
                        </div>
                    </div>

                    <button
                        onClick={handleFinish}
                        disabled={verificationCode.length < 6}
                        className={`w-full flex justify-center items-center text-white h-[52px]  ${
                            verificationCode.length < 6
                                ? "bg-neutral-50"
                                : "bg-brand-blue-500"
                        } rounded-full text-base font-semibold duration-300`}
                    >
                        Verify {title}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VerificationForm;
