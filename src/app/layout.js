import "./globals.css";
import { montserrat, poppins } from "@/utils/fonts";
import { Providers } from "@/contexts/Providers";

export const metadata = {
    title: "WHC-Lab",
    description: "WELCOME TO THE WHC LAB",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${poppins} ${montserrat} font-poppins font-normal text-sm`}
            >
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
