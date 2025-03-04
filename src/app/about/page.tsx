export default function About() {
        return (
                <>
                        <h1
                                className="
                                        text-center
                                        font-bold
                                        text-5xl
                                        mb-10
                                "
                        >
                                <u>
                                        About this app
                                </u>
                        </h1>
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
                                        <br/>
                                        This app is based on Next.js, PostgreSQL and (maybe Python).
                                </p>
                                <br />
                                <p>
                                        If you want to see web source code, klick on name in footer.
                                </p>
                        </div>
                </>
        );
}