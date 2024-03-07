import Navbar from "@/components/Navbar";
import React from "react";

const Primary = ({ children }) => {
    return (
        <div>
            <Navbar.Primary />
            {children}
        </div>
    );
};

export default Primary;
