import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import NextBreadcrumb from "@/components/common/Breadcrumb";
import React from "react";

const Secondary = ({ children, breadcrumb = true }) => {
    return (
        <div>
            <Navbar.Secondary />
            {breadcrumb && <NextBreadcrumb />}
            {children}
            <Footer.Primary />
        </div>
    );
};

export default Secondary;
