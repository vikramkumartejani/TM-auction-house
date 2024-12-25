"use client";
import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const DashboardNavbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const pathname = usePathname();

    const navItemsUpper = [
        {
            icon: "/sidebar-icons/home-non-active.svg",
            activeIcon: "/sidebar-icons/home-active.svg",
            href: "/home",
            label: "Home",
        },
        {
            icon: "/sidebar-icons/leaderboard-non-active.svg",
            activeIcon: "/sidebar-icons/leaderboard-active.svg",
            href: "/leaderboard",
            label: "Leaderboard",
        },
        {
            icon: "/sidebar-icons/order-history-non-active.svg",
            activeIcon: "/sidebar-icons/order-history-active.svg",
            href: "/order-history",
            label: "Order History",
        },
        {
            icon: "/sidebar-icons/blog-non-active.svg",
            activeIcon: "/sidebar-icons/blog-active.svg",
            href: "/blog",
            label: "Blog",
        },
    ];

    const navItemsLower = [
        {
            icon: "/sidebar-icons/how-it-work-non-active.svg",
            activeIcon: "/sidebar-icons/how-it-work-active.svg",
            href: "/how-its-work",
            label: "Help",
        },
    ];

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    };

    return (
        <div className="flex items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
                {/* Open sidebar */}
                <button onClick={() => setIsSidebarOpen(true)}>
                    <Image src="/assets/menu-mobile.svg" alt="menu-mobile" width={24} height={24} />
                </button>

                {/* Sidebar */}
                {isSidebarOpen && (
                    <>
                        {/* Backdrop */}
                        <div
                            className="fixed inset-0 bg-black bg-opacity-50 z-40"
                            onClick={closeSidebar}
                        ></div>

                        {/* Sidebar */}
                        <div
                            className={`fixed top-0 left-0 h-full w-64 bg-[#093033] shadow-lg transform transition-transform z-50 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                                }`}
                        >
                            <div className="flex flex-col h-full p-4">

                                {/* Upper navigation items */}
                                <div className="flex flex-col gap-2">
                                    {navItemsUpper.map((item, index) => (
                                        <Link
                                            href={item.href}
                                            key={index}
                                            className="flex items-center gap-3 pb-3"
                                        >
                                            <Image
                                                src={pathname === item.href ? item.activeIcon : item.icon}
                                                alt={item.label}
                                                width={pathname === item.href ? 35 : 35}
                                                height={pathname === item.href ? 35 : 35}
                                            />
                                            <span className='text-[#fff] text-[16px] font-centraRegular pt-1.5'>{item.label}</span>
                                        </Link>
                                    ))}
                                </div>

                                <div className="flex flex-col gap-4 pt-4">
                                    {navItemsLower.map((item, index) => (
                                        <a
                                        href={item.href}
                                        key={index}
                                            className="flex items-center gap-3 p-2"
                                        >
                                            <Image src={item.icon} alt={item.label} width={24} height={24} />
                                            <span className='text-[#fff] text-[16px] font-centraRegular pt-1.5'>{item.label}</span>
                                        </a>
                                    ))}
                                </div>
                                    <Link href='/notification' className="pl-2 my-8"><Image src='/sidebar-icons/diamond.svg' alt="profile-sidebar" width={24} height={24} /></Link>
                                <Link href='/notification' className="pl-2"><Image src='/sidebar-icons/bell.svg' alt="profile-sidebar" width={28} height={28} /></Link>
                                        <Link href='/notification' className="pl-2 mt-8"><Image src='/assets/whatsapp.svg' alt="profile-sidebar" width={50} height={50} /></Link>
                                <Link href='/profile' className="pl-2 mt-8"><Image src='/sidebar-icons/profile-sidebar.svg' alt="profile-sidebar" width={50} height={50} /></Link>
                            </div>
                        </div>
                    </>
                )}

                <Image src="/assets/logo-navbar.svg" alt="logo-navbar" width={50} height={50} />
            </div>

            <div className="flex items-center gap-3.5">
                <button>
                    <Image src="/assets/notification.svg" alt="notification-icon" width={50} height={50} />
                </button>
                <button>
                    <Image src="/assets/whatsapp.svg" alt="whatsapp-icon" width={34} height={34} />
                </button>
            </div>
        </div>
    );
};

export default DashboardNavbar;
