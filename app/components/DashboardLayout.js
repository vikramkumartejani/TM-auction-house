// components/Layout.js
import React from "react";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <div className="md:block hidden min-h-screen bg-[#093033]">
                <Sidebar />
            </div>

            <div className="flex-1 flex flex-col bg-[#010A0B]">
                <main className="flex-1 px-4 py-8 md:p-10">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
