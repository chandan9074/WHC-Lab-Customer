import Buttons from "@/components/Buttons";
import Link from "next/link";
import React from "react";

function TopSection({ fromPage = false }) {
    return (
        <div className="space-y-4 lg:space-y-6">
            <div className="flex justify-between">
                <h1 className="text-brand-blue-800 text-2xl lg:text-5xl font-semibold">
                    Latest Collaboration
                </h1>
                {fromPage && (
                    <>
                        <Link
                            href={"/collaboration"}
                            className="sm:block hidden"
                        >
                            <Buttons.OutlinedButton label="Show All Collaboration" />
                        </Link>
                        <Link
                            href={"/collaboration"}
                            className="sm:hidden block"
                        >
                            <Buttons.OutlinedButton label="Show All" />
                        </Link>
                    </>
                )}
            </div>
            <p className="text-brand-blue-800 text-base font-normal">
                WHC Lab sets the standard in yeast production, employing
                advanced genetic/QPCR and plating methods. Each batch undergoes
                meticulous testing, ensuring nothing leaves our facility without
                meeting the highest QC standards.
            </p>
        </div>
    );
}

export default TopSection;
