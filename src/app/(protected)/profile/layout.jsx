// import ProfileBar from "@/components/Profile/ProfileBar";
// import { profileData } from "@/libs/data";
// import Layouts from "@/layouts";
// import TitleBar from "@/sections/Profile/TitleBar";
// import { getCookie } from "cookies-next";
// import { Suspense } from "react";
// import Loader from "@/components/common/Loader";
// import Images from "../../../../public/assets/Images";

import ProfileBar from "@/components/Profile/ProfileBar";
import Loader from "@/components/common/Loader";
import Layouts from "@/layouts";
import { profileData } from "@/libs/data";
import { accountData } from "@/libs/myAccountData";
import TitleBar from "@/sections/Profile/TitleBar";
import UserService from "@/services/UserService/UserService";
import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { Suspense } from "react";

export default async function ProfileLayout({
    children, // will be a page or nested layout
}) {
    const userInfo = getCookie("userInfo", { cookies });
    const user = userInfo && JSON.parse(userInfo);

    const userData = await UserService.getUserInfo(1);
    console.log(userData);

    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <div
                    className={`gap- container mx-auto px-3 sm:px-0 py-6 border-b`}
                >
                    <TitleBar profileData={profileData} />
                </div>
                <section
                    className={`flex flex-col md:flex-row gap-6 container mx-auto px-6 sm:px-0 py-8`}
                >
                    {/* Include shared UI here e.g. a header or sidebar */}
                    <div className="">
                        <ProfileBar
                            data={profileData}
                            // image={
                            //     user?.profilePicture
                            //         ? user?.profilePicture
                            //         : Images?.profile_avatar
                            // }
                            // name={user?.firstName + " " + user?.lastName}
                            image={
                                accountData?.profilePicture
                                    ? accountData?.profilePicture
                                    : Images?.profile_avatar
                            }
                            name={
                                userData?.body?.body?.user.firstName +
                                " " +
                                userData?.body?.body?.user.lastName
                            }
                        />
                    </div>
                    <div className="flex-1 bg-white rounded-2xl border-[1.5px] border-[#EBEDF0]">
                        {children}
                    </div>
                </section>
            </Layouts.Primary>
        </Suspense>
    );
}
