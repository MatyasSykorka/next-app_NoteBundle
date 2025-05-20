import Link from "next/link";


import TITLETXT from "@/components/title/title";
import LABELBOOK from "@/components/usersBook/label";
import BTTNBOOK from "@/components/usersBook/bttnBook";


export const metadata = {
        title: 'Note bundle - User "username"',
        description: 'Note app by Maty',
};


interface labelBook {
        children: string; 
};

const P: React.FC<labelBook> = ({
        children
}) => (
        <p
                className="
                        place-self-center
                        flex
                        text-3xl
                        text-amber-500
                        mb-4
                        mt-3
                "
        >
                {children}
        </p>
);

export default function user() {
        return (
                <>
                        <TITLETXT>
                                "Logged username"
                        </TITLETXT>
                        <main
                                className="
                                        bg-amber-800
                                        w-1/4
                                        min-h-[45rem]
                                        place-self-center
                                        rounded-md
                                        p-12
                                        shadow-black/70
                                        shadow-xl
                                "
                        >
                                <h1
                                        className="
                                                place-self-center
                                                text-4xl
                                                text-center
                                                font-bold
                                                mb-10
                                        "
                                >
                                        "Logged username + ID"
                                </h1>
                                <LABELBOOK>
                                        Name:
                                </LABELBOOK>
                                <P>
                                        "Users name"
                                </P>
                                <LABELBOOK>
                                        Surname:
                                </LABELBOOK>
                                <P>
                                        "Users surname"
                                </P>
                                <LABELBOOK>
                                        Number of notes:
                                </LABELBOOK>
                                <P>
                                        "Number of users notes"
                                </P>
                                <menu
                                        id="settings"
                                        className="
                                                border-2
                                                border-amber-900
                                                w-100
                                                place-self-center
                                                mt-10
                                                rounded-md
                                                mt-20
                                                mb-8
                                                text-2xl
                                                p-4
                                        "
                                >
                                        <Link 
                                                href="/user/change-fullname"
                                                className="
                                                        place-self-center
                                                        content-center
                                                        justify-center
                                                        bg-yellow-700
                                                        rounded-md
                                                        block
                                                        text-center
                                                        h-12
                                                        w-68
                                                        text-2xl
                                                        mb-6
                                                "
                                        >
                                                Change full name
                                        </Link>
                                        <BTTNBOOK />
                                </menu>
                        </main>
                </>
        );
};