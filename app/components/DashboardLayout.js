// components/Layout.js
import React from "react";
import Sidebar from "./sidebar";

const DashboardLayout = ({ children }) => {
    return (
        <div className="flex min-h-screen">
            <Sidebar />

            <div className="flex-1 flex flex-col">
                <main className="flex-1 p-4">{children}</main>
            </div>
        </div>
    );
};

export default DashboardLayout;
