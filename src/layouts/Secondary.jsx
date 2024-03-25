import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Secondary = ({ children }) => {
    return (
        <div>
            <Navbar.Secondary />
            {children}
            <Footer.Primary />
        </div>
    );
};

export default Secondary;
