import Link from "next/link";

export default function Footer() {
        return (
                <footer
                        className="
                                h-24
                                w-full
                                bg-blue-900
                                fixed
                                inset-x-0
                                bottom-0
                                pl-8
                                pr-8
                                flex
                                justify-between
                        "
                >
                        <ul
                                className="
                                        self-center
                                        font-bold
                                        text-gray-50
                                        hover:underline
                                        hover:underline-offset-4
                                "
                        >
                                <p>
                                        Website created by 
                                        <Link 
                                                href="https://github.com/MatyasSykorka"
                                        >
                                                Maty
                                        </Link>
                                         :)
                                </p>
                        </ul>
                        <ul
                                className="
                                        font-bold
                                        self-center
                                        text-yellow-300
                                        bg-transparent
                                        hover:underline
                                        hover:underline-offset-4
                                "
                        >
                                <Link 
                                        href="/about"
                                >
                                         About 
                                </Link>
                        </ul>
                </footer>
        );
};