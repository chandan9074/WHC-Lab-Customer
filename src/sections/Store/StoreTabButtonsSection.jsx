import Buttons from "@/components/Buttons";
import { StoreTabButtonsData } from "@/libs/storeTabButtons";
import React from "react";

const StoreTabButtonsSection = ({
    selectedTab,
    setSelectedTab,
    categoryData,
    handleTabButtonClick,
}) => {
    return (
        <div className="w-full flex gap-4 md:gap-6 py-4 md:py-6 overflow-scroll tab-scroll">
            {categoryData.map((item) => (
                <>
                    {item.name !== "Uncategorized" && (
                        <Buttons.OutlinedButton
                            key={item._id}
                            label={item.name}
                            borderColor="border-brand-blue-500"
                            textColor={
                                selectedTab.name === item.name
                                    ? "text-white"
                                    : "text-brand-blue-500"
                            }
                            bgColor={
                                selectedTab.name === item.name
                                    ? "bg-brand-blue-500"
                                    : "bg-white"
                            }
                            onClick={() => setSelectedTab(item)}
                        />
                    )}
                </>
            ))}
        </div>
    );
};

export default StoreTabButtonsSection;
