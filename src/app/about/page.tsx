import Link from "next/link";
import TITLETXT from "../../components/Title/title";

export default function About() {
        return (
                <>
                        <TITLETXT>
                                About Memoirs.app
                        </TITLETXT>
                        <div
                                className="
                                        h-[28rem]
                                        w-1/3
                                        bg-yellow-200
                                        place-self-center
                                        place-items-center
                                        p-2
                                        font-mono
                                        text-xl
                                        border-4
                                        border-yellow-700
                                        rounded-md
                                        shadow-xl
                                        shadow-gray-600
                                "
                        >
                                <p>
                                        <strong>
                                                Simple note app.
                                        </strong>
                                        &nbsp;Based on Next.js and PostgreSQL.
                                </p>
                                <br />
                                <p>
                                        If you want to see web source code, <br />
                                        klick on name in footer.
                                </p>
                                <br /><br /><br /><br /><br />
                                <Link 
                                        href="/"
                                        className="
                                                duration-450
                                                hover:font-bold
                                                hover:text-2xl
                                                
                                        "
                                >
                                        Click to retun to the home page.
                                </Link>
                        </div>
                </>
        );
}