import Form from "next/form";

import TITLETXT from "@/components/title/title";
import FORMITEM from "@/components/formStuff/formLabel&Input";
import FORMBTTN from "@/components/formStuff/formBttn";
import LINKBTTN from "@/components/formStuff/linkBttn";


export const metadata = {
        title: 'Note bundle - Register',
        description: 'Note app by Maty',
};

export default function Register() {
        return (
                <>
                        <TITLETXT>
                                Register
                        </TITLETXT>
                        <main
                                className="
                                        justify-center
                                        flex
                                "
                        >
                                <Form
                                        action=""
                                        className="
                                                border-1
                                                bg-amber-200
                                                min-h-[60rem]
                                                w-1/3
                                                place-self-center
                                                block
                                                p-7
                                                rounded-sm
                                                shadow-gray-600
                                                shadow-lg
                                        "
                                >
                                        <FORMITEM 
                                                htmlFor="name" 
                                                type="text" 
                                                name="name" 
                                        >
                                                Name
                                        </FORMITEM>
                                        <FORMITEM
                                                htmlFor="surname"
                                                type="text"
                                                name="surname"
                                        >
                                                Surname
                                        </FORMITEM>
                                        <FORMITEM 
                                                htmlFor="username"
                                                type="text" 
                                                name="surname"
                                        >
                                                Username
                                        </FORMITEM>
                                        <FORMITEM
                                                htmlFor="passwd"
                                                type="password" 
                                                name="passwd"
                                        >
                                                Password
                                        </FORMITEM>
                                        <FORMITEM 
                                                htmlFor="passwdII"
                                                type="password"
                                                name="passwdII"
                                        >
                                                Retype password
                                        </FORMITEM>
                                        <FORMBTTN 
                                                value="Complete registration"
                                        />
                                        <LINKBTTN
                                                href="/"
                                        >
                                                Back to main page
                                        </LINKBTTN>
                                </Form>
                        </main>
                </>
        );
};