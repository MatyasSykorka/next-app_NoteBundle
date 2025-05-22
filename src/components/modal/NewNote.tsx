import Form from "next/form";

interface noteWindowProps {
        isVisible: boolean;
        onClose: () => void;
}

const NewNote: React.FC<noteWindowProps> = ( { isVisible, onClose } ) => {
        if ( !isVisible ) { return null };
        
        return (
                <div
                        className="
                                fixed
                                inset-0
                                flex
                                bg-black/50
                                z-50
                                backdrop-blur-sm
                                items-center
                                justify-center
                        "
                >
                        <Form
                                action=""
                                className="
                                        flex
                                        flex-col
                                        gap-3
                                        bg-amber-700
                                        p-7
                                        rounded-2xl
                                        border-2
                                        border-black
                                "
                        >
                                <p 
                                        onClick={ () => onClose() }
                                        className="
                                                bg-red-700
                                                rounded-full
                                                justify-center
                                                flex
                                                items-center
                                                w-6
                                                h-6
                                                hover:bg-red-600
                                                hover:font-bold
                                                duration-200
                                                place-self-end
                                                border-2
                                                border-red-600
                                                hover:border-red-400
                                                text-lg
                                        "
                                >
                                        X
                                </p>
                                <h1
                                        className="
                                                text-2xl
                                                text-center
                                                font-bold
                                                text-white
                                                text-4xl
                                        "
                                >
                                        New note:
                                </h1>
                                <label
                                        className="
                                                font-bold
                                                text-xl
                                        "
                                >
                                        Title:
                                </label>
                                <input 
                                        type="text" 
                                        placeholder="Doctor"
                                        className="
                                                bg-gray-100
                                                text-black
                                                w-50
                                                h-8
                                                p-1
                                                rounded-sm
                                        "
                                />
                                <div>
                                        <input 
                                                type="checkbox" 
                                                name="priorityBox" 
                                                id="priorityBox" 
                                                className="
                                                        size-4
                                                "
                                        />
                                        &nbsp;
                                        <label 
                                                className="
                                                        font-bold
                                                        text-xl
                                                "
                                        >
                                                High priority:
                                        </label>
                                </div>
                                <textarea 
                                        placeholder="Go to the doctor at 2pm"
                                        className="
                                                text-black
                                                text-lg
                                                bg-gray-100
                                                max-h-[55rem]
                                                min-h-[20rem]
                                                max-w-[120rem]
                                                min-w-[45rem]
                                                resize
                                                p-3
                                                rounded-sm
                                        "
                                ></textarea>
                                <button
                                        type="submit"
                                        className="
                                                bg-gray-400
                                                h-10
                                                w-40
                                                rounded-xl
                                                hover:font-bold
                                                duration-200
                                                place-self-center
                                        "
                                >
                                        Make a new note
                                </button>
                        </Form>
                </div>
        );
};

export default NewNote;