import React from "react";

const NoDataFound = ({ message = "No Data Found" }) => {
    return (
        <div className="w-full py-12 bg-[#EFF9F9] text-green-600 text-lg font-medium flex justify-center">
            {message}
        </div>
    );
};

export default NoDataFound;
