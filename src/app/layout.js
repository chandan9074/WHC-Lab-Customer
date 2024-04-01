import "./globals.css";
import { montserrat, poppins } from "@/utils/fonts";

export const metadata = {
    title: "WHC-Lab",
    description: "WELCOME TO THE WHC LAB",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${poppins} ${montserrat} font-poppins font-normal text-sm`}>{children}</body>
        </html>
    );
}
