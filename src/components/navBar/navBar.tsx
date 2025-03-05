// import React from "react";
import classNames from "classnames";
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
                        h-14
                        w-28
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
                                h-18
                                w-[60%]
                                content-center
                                bg-red-600
                                rounded-2xl
                                justify-center
                                items-center
                                flex
                                mb-6
                                shadow-md
                                shadow-gray-500
                                place-self-center
                        "
                >
                        {/* Using defined button */}
                        <NAVITEM
                                href="/"
                        >
                                Memoirs.app
                        </NAVITEM>
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
                        <NAVITEM
                                href="/"
                        >
                                Log out
                        </NAVITEM>
                </nav>
        );
};