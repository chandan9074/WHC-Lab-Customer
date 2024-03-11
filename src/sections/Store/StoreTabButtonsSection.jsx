import Buttons from "@/components/Buttons";
import { StoreTabButtonsData } from "@/libs/storeTabButtons";
import React from "react";

const StoreTabButtonsSection = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className="w-full flex gap-4 md:gap-6 py-4 md:py-6 overflow-scroll tab-scroll">
            {StoreTabButtonsData.map((item) => (
                <Buttons.OutlinedButton
                    key={item._id}
                    label={item.label}
                    borderColor="border-brand-blue-500"
                    textColor={
                        selectedTab.label === item.label
                            ? "text-white"
                            : "text-brand-blue-500"
                    }
                    bgColor={
                        selectedTab.label === item.label
                            ? "bg-brand-blue-500"
                            : "bg-white"
                    }
                    onClick={() => setSelectedTab(item)}
                />
            ))}
        </div>
    );
};

export default StoreTabButtonsSection;
