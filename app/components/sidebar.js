"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const navItemsUpper = [
    {
      icon: "/sidebar-icons/home-non-active.svg",
      activeIcon: "/sidebar-icons/home-active.svg",
      href: "/home",
      label: "Home",
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

  return (
    <div className="md:block hidden">
      <div className="min-h-screen flex py-8 min-w-[86px] w-[86px]"></div>
      <div className="fixed top-0 left-0 min-h-screen bg-[#093033] py-8 w-[86px] z-[999]">
        {/* Logo */}
        <Link href="/" className="mb-8 flex w-full items-center justify-center">
          <Image
            src="/icons/logo-icon.svg"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </Link>

        {/* Navigation */}
        <h2 className="mt-14 text-center text-white text-[14px] font-medium leading-[17.5px]">
          Menu
        </h2>
        <nav className="mt-3 flex-1 w-full">
          <ul className="flex flex-col items-center gap-1">
            {navItemsUpper.map((item) => (
              <li key={item.label} className="w-full">
                <Link href={item.href} className="flex justify-center p-3">
                  <Image
                    src={pathname === item.href ? item.activeIcon : item.icon}
                    alt={item.label}
                    width={50}
                    height={50}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Bottom Icons */}
        <div className="mt-[254px] flex flex-col items-center gap-4">
          <ul className="flex flex-col items-center gap-4">
            {navItemsLower.map((item) => (
              <li key={item.label} className="w-full">
                <Link href={item.href} className="flex justify-center">
                  <Image
                    src={pathname === item.href ? item.activeIcon : item.icon}
                    alt={item.label}
                    width={pathname === item.href ? 50 : 24}
                    height={pathname === item.href ? 50 : 24}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
