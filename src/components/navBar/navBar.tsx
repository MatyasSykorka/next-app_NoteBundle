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
        <ul
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
               "
        >
                <Link href={href}
                        className="
                                hover:font-bold
                        "
                >
                        {children}
                </Link>
        </ul>
);

// creating navigation bar
export default function NavBar() {
        return (
                <nav
                        className="
                                h-14
                                content-center
                                bg-red-600
                                rounded-xl
                                justify-center
                                items-center
                                flex
                                mb-6
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