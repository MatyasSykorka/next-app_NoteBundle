import TITLETXT from "../../../components/title/title";


export const metadata = {
        title: 'Note bundle - Home',
        description: 'Note app by Maty',
};


export default function Home() {
        return (
                <>
                        <TITLETXT>
                                Welcome "Username"!
                        </TITLETXT>
                        <article
                                className="
                                        border-2
                                        h-[50rem]
                                        w-1/2
                                        justify-center
                                        place-self-center
                                        rounded-3xl
                                        p-6
                                        text-center
                                        bg-yellow-100
                                "
                        >
                                <p
                                        className="
                                                font-bold
                                                text-2xl
                                        "
                                >
                                        Last edited notes
                                </p>
                                <div
                                        className="
                                                border-1
                                        "
                                >
                                        <p>
                                                board
                                        </p>
                                </div>
                        </article>
                </>
        );
};