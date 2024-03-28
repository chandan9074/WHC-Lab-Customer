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
            <div className="flex items-center gap-6 overflow-x-auto tab-scroll">
                {navButtons.map((item) => (
                    <Buttons.OutlinedButton
                        onClick={() => setActiveTab(item.label)}
                        key={item._id}
                        label={item.label}
                        className={
                            activeTab === item.label
                                ? "text-black hover:text-white bg-white duration-300"
                                : "text-white bg-transparent duration-300"
                        }
                        borderColor="border-white"
                    />
                ))}
            </div>
            <div className="hidden lg:block">
                <Buttons.IconWithLabel
                    label="Explore Our All Strains"
                    rightIcon={Icons.arrow_up_right_blue}
                    hoverIcon={Icons.arrow_up_right_white}
                    bgColor="bg-white"
                    textColor="text-brand-blue-800"
                />
            </div>
        </div>
    );
};

export default NavHeader;
