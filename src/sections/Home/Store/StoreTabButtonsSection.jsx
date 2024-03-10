import Buttons from "@/components/Buttons";
import { StoreTabButtonsData } from "@/libs/storeTabButtons";
import React from "react";

const StoreTabButtonsSection = ({ selectedTab, setSelectedTab }) => {
    return (
        <div className="flex gap-4 md:gap-6 py-4 md:py-6 flex-wrap">
            {StoreTabButtonsData.map((item) => (
                <Buttons.OutlinedButton
                    key={item._id}
                    label={item.label}
                    borderColor="border-brand-blue-800"
                    textColor={
                        selectedTab === item.label
                            ? "text-white"
                            : "text-brand-blue-800"
                    }
                    bgColor={
                        selectedTab === item.label
                            ? "bg-brand-blue-800"
                            : "bg-white"
                    }
                    onClick={() => setSelectedTab(item.label)}
                />
            ))}
        </div>
    );
};

export default StoreTabButtonsSection;
