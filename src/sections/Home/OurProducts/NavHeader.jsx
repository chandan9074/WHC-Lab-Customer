import Buttons from "@/components/Buttons";
import React from "react";
import Icons from "../../../../public/assets/Icons";

const NavHeader = ({ activeTab, setActiveTab }) => {
    const navButtons = [
        {
            _id: 1,
            label: "New Products",
        },
        {
            _id: 2,
            label: "Best Seller",
        },
        {
            _id: 1,
            label: "WHC Signature",
        },
    ];
    return (
        <div className="mt-9 flex items-center justify-between">
            <div className="flex items-center gap-6">
                {navButtons.map((item) => (
                    <Buttons.OutlinedButton
                        onClick={() => setActiveTab(item.label)}
                        key={item._id}
                        label={item.label}
                        className={
                            activeTab === item.label
                                ? "text-black bg-white duration-300"
                                : "text-white bg-transparent duration-300"
                        }
                        borderColor="border-white"
                    />
                ))}
            </div>
            <Buttons.IconWithLabel
                label="Explore Our All Strains"
                icon={Icons.arrow_up_right_blue}
                bgColor="bg-white"
                textColor="text-brand-blue-800"
            />
        </div>
    );
};

export default NavHeader;
