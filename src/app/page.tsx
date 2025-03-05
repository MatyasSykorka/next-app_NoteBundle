import TITLETXT from "../components/title/title";
import SECITEM from "../components/selection/selection";

export default function Root() {
        return (
                <>
                        <TITLETXT>
                                Memoirs.app
                        </TITLETXT>
                        <section
                                className="
                                        border-1
                                        border-black
                                        bg-yellow-200
                                        w-1/3
                                        place-self-center
                                        rounded-2xl
                                        h-100
                                        p-8
                                        flex
                                        text-center
                                        content-center
                                        justify-center
                                        shadow-gray-600
                                        shadow-lg
                                "
                        >
                                <SECITEM href="/login">
                                        Login
                                </SECITEM>
                                <SECITEM href="/register">
                                        Register
                                </SECITEM>
                        </section>
                </>
        );
};