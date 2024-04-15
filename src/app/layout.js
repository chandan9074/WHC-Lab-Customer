import { Providers } from "@/context/Providers";
import "./globals.css";
import { montserrat, poppins } from "@/utils/fonts";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: "WHC-Lab",
    description: "WELCOME TO THE WHC LAB",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins} ${montserrat} font-poppins font-normal text-sm`}>
                <Providers>
                    <ToastContainer autoClose={3000} />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
