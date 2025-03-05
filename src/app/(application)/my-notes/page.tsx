import TITLETXT from "../../../components/title/title";

interface SettingItem {
        children: React.ReactNode;
};

const SETTITEM: React.FC<SettingItem> = ({
        children
}) => (
        <div
                className="
                        border-1
                        border-black
                        rounded-lg
                        text-xl
                        text-gray-50
                        duration-250
                        hover:font-bold
                        bg-gray-600
                        w-42
                        h-12
                        content-center
                        mt-3
                        mb-3
                "
        >
                {children}
        </div>
);


export default function Notes() {
        return (
                <>
                        <TITLETXT>
                                Your notes
                        </TITLETXT>
                        <main
                                className="
                                        flex
                                        content-center
                                        place-self-center
                                "
                        >
                                <div
                                        className="
                                                border-2
                                                border-black
                                                rounded-2xl
                                                w-[100rem]
                                                h-[60rem]
                                                place-self-center
                                                bg-amber-200
                                                text-center
                                                content-center
                                                shadow-lg
                                                shadow-amber-900
                                                pl-10
                                                pr-10
                                                mr-4
                                        "
                                >
                                        <div
                                                className="
                                                        border-1
                                                        h-[55rem]
                                                "
                                        >
                                                table
                                        </div>
                                </div>
                                <div
                                        className="
                                                ml-4
                                                border-2
                                                rounded-2xl
                                                p-4
                                                h-[24rem]
                                                w-1/4
                                                bg-gray-300
                                                text-center
                                        "
                                >
                                        <p
                                                className="
                                                        text-2xl
                                                "
                                        >
                                                Settings for Notes
                                        </p>
                                        <div
                                                className="
                                                        flex
                                                "
                                        >
                                                <SETTITEM>
                                                        New note
                                                </SETTITEM>
                                        </div>
                                </div>
                        </main>
                </>
        );
};