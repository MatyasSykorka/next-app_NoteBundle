// import React from "react";
import Link from "next/link";

// Type variables
interface NavItemProps {
        href: string;
        children: string;
};

// Define button design in navigation bar
const NAVITEM: React.FC<NavItemProps> = ({
        href, 
        children
}) => (
        <Link href={href}
                className="
                        content-center
                        text-center
                        bg-gray-400
                        h-12
                        w-24
                        rounded-xl
                        duration-200
                        hover:shadow-xs
                        hover:bg-gray-200
                        ml-2
                        mr-2
                        hover:font-bold
                "
        >
                {children}
        </Link>
);

// creating navigation bar
export default function HNavBar() {
        return (
                <nav
                        className="
                                h-14
                                content-center
                                bg-red-600
                                rounded-2xl
                                justify-center
                                items-center
                                flex
                                mb-6
                                shadow-md
                                shadow-gray-500
                        "
                >
                        {/* Using defined button */}
                        <NAVITEM
                                href="/home"
                        >
                                Home
                        </NAVITEM>
                        <NAVITEM
                                href="/my-notes"
                        >
                                My notes
                        </NAVITEM>
                        {
                        /* 
                                create Logout button 
                        */
                        }
                </nav>
        );
};