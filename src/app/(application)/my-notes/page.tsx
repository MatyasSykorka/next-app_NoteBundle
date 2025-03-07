import TITLETXT from "../../../components/title/title";


export const metadata = {
        title: 'Note bundle - Notes',
        description: 'Note app by Maty',
};


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
                        w-80
                        h-20
                        content-center
                        m-3
                        text-center
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
                        <main>
                                <menu
                                        className="
                                                border-2
                                                rounded-2xl
                                                h-40
                                                bg-gray-300
                                                text-center
                                                shadow-gray-600
                                                shadow-lg
                                                max-w-150
                                                mb-4
                                                place-self-center
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
                                                        max-w-140
                                                        items-center
                                                        justify-center
                                                        place-self-center
                                                        flex
                                                "
                                        >
                                                <SETTITEM>
                                                        New note
                                                </SETTITEM>
                                                <SETTITEM>
                                                        Delete all finished notes
                                                </SETTITEM>
                                                <SETTITEM>
                                                        Delete all notes
                                                </SETTITEM>
                                        </div>
                                </menu>
                                <div
                                        id="table"
                                        className="
                                                border-2
                                                border-black
                                                rounded-2xl
                                                max-w-450
                                                min-h-[30rem]
                                                place-self-center
                                                bg-amber-200
                                                shadow-lg
                                                shadow-black/60
                                                p-10
                                                mb-80
                                                justify-center
                                                items-center
                                                content-center
                                                grid
                                                grid-cols-4
                                        "
                                >
                                        <div
                                                id="note"
                                                className="
                                                        border-1
                                                        min-h-[10rem]
                                                        min-w-[25rem]
                                                        max-w-[35rem]
                                                        rounded-lg
                                                        bg-amber-100
                                                        p-1
                                                        m-3
                                                "
                                        >
                                                <menu
                                                        className="
                                                                justify-between
                                                                flex
                                                                bg-white
                                                                rounded-md
                                                                pl-3
                                                                pr-1
                                                        "
                                                >
                                                        <p
                                                                className="
                                                                        font-bold
                                                                "
                                                        >
                                                                Note title
                                                        </p>
                                                        <p>
                                                                High priority &nbsp;
                                                                <input 
                                                                        type="checkbox" 
                                                                        name="priorityBox" 
                                                                        id="" 
                                                                />
                                                        </p>
                                                        <p>
                                                                Is finished &nbsp;
                                                                <input 
                                                                        type="checkbox" 
                                                                        name="Is finished" 
                                                                        id="" 
                                                                />
                                                        </p>
                                                        <input 
                                                                type="button" 
                                                                value="X" 
                                                                className="
                                                                        bg-red-400
                                                                        w-6
                                                                        h-6
                                                                        rounded-full
                                                                        hover:font-bold
                                                                        hover:bg-red-600
                                                                "
                                                        />
                                                </menu>
                                                <p
                                                        id="note-text"
                                                        className="
                                                                text-center
                                                                max-w-[29rem]
                                                                min-w-[20rem]
                                                                break-words
                                                                p-2
                                                        "
                                                >
                                                        Text in the note :)
                                                </p>
                                        </div>
                                </div>
                        </main>
                </>
        );
};