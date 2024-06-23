import Layouts from "@/layouts";
import TopSection from "@/sections/Home/Collaboration/TopSection";
import React from "react";
import CollaborationList from "./collborationList";

async function CollaborationListPage() {
    return (
        <Layouts.Primary breadcrumb={false}>
            <div className="container mx-auto space-y-[14.5px] px-4 md:px-0 pb-10 md:pb-20 mt-10">
                <TopSection />
                <CollaborationList />
            </div>
        </Layouts.Primary>
    );
}

export default CollaborationListPage;
