"use client"
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const BottomBar = () => {
    const pathname = usePathname();

    const navItemsUpper = [
        {
            icon: "/sidebar-icons/home-non-active.svg",
            activeIcon: "/sidebar-icons/home-active.svg",
            href: "/home-page",
            label: "Home",
        },
        {
            icon: "/sidebar-icons/order-history-non-active.svg",
            activeIcon: "/sidebar-icons/order-history-active.svg",
            href: "/order-history",
            label: "Order History",
        },
        {
            icon: "/sidebar-icons/leaderboard-non-active.svg",
            activeIcon: "/sidebar-icons/leaderboard-active.svg",
            href: "/leaderboard",
            label: "LeaderBoard",
        },
        {
            icon: "/sidebar-icons/blog-non-active.svg",
            activeIcon: "/sidebar-icons/blog-active.svg",
            href: "/blog",
            label: "Blog",
          },
        {
            icon: "/sidebar-icons/profile-non-active.svg",
            activeIcon: "/sidebar-icons/profile-active.svg",
            href: "/profile",
            label: "Profile",
        },
    ];
    return (
        <div className="absolute bottom-0 w-full left-0 md:hidden block">
            <nav className="flex- w-full bg-[#093033]">
                <ul className="flex items-center gap-1 py-3">
                    {navItemsUpper.map((item) => (
                        <li key={item.label} className="w-full">
                            <Link href={item.href} className="flex justify-center">
                                <Image
                                    src={pathname === item.href ? item.activeIcon : item.icon}
                                    alt={item.label}
                                    width={40}
                                    height={40}
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    )
}

export default BottomBar