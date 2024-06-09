import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextBreadcrumb from "@/components/common/Breadcrumb";
import Image from "next/image";
import React from "react";
import Icons from "../../public/assets/Icons";

const Primary = ({ children, breadcrumb = true }) => {
    return (
        <div>
            <Navbar.Primary />
            {breadcrumb && <NextBreadcrumb />}
            {children}
            <a
                href="https://wa.me/8801833039074" // Replace with your WhatsApp link
                // href="https://api.whatsapp.com/send?phone=01686678009"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-50 rounded-full overflow-hidden shadow-md p-1 md:p-2.5 bg-white"
            >
                <Image
                    alt="WhatsApp"
                    src={Icons.whatsappFloatingIcon}
                    width={1000} // Adjust size as needed
                    height={1000} // Adjust size as needed
                    className="md:w-14 md:h-14 w-10 h-10"
                />
            </a>
            <Footer.Primary />
        </div>
    );
};

export default Primary;
