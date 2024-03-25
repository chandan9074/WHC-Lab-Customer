import Layouts from "@/layouts";
import SignUpForm from "../../../sections/SignUp/SignUpForm";

const page = () => {
    return (
        // <Suspense fallback={<Loader />}>
        <Layouts.Primary>
            <section className="container mx-auto py-6 px-4">
                <SignUpForm />
            </section>
        </Layouts.Primary>
        // </Suspense>
    );
};

export default page;
