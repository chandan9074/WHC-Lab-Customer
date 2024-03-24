import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

const Primary = ({ children }) => {
    return (
        <div>
            <Navbar.Primary />
            {children}
            <Footer.Primary />
        </div>
    );
};

export default Primary;
