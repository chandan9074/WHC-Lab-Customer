import Layouts from "@/layouts";
import SignUpForm from "../../../sections/SignUp/SignUpForm";
import Loader from "@/components/common/Loader";
import { Suspense } from "react";

const page = () => {
    return (
        <Suspense fallback={<Loader />}>
            <Layouts.Primary>
                <section className="container mx-auto py-6 px-4">
                    <SignUpForm />
                </section>
            </Layouts.Primary>
        </Suspense>
    );
};

export default page;
