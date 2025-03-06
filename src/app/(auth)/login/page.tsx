import Form from "next/form";

import TITLETXT from "@/components/title/title";
import FORMITEM from "@/components/formStuff/formLabel&Input";
import FORMBTTN from "@/components/formStuff/formBttn";
import LINKBTTN from "@/components/formStuff/linkBttn";


export default function Login() {
        return (
                <main>
                        <TITLETXT>
                                Login to Note bundle
                        </TITLETXT>
                        <Form
                                action=""
                                className="
                                        w-1/3
                                        h-190
                                        p-8
                                        bg-amber-200
                                        border-1
                                        rounded-sm
                                        place-self-center
                                        shadow-gray-600
                                        shadow-lg
                                "
                        >
                                <FORMITEM
                                        htmlFor="username"
                                        type="text"
                                        name="username"
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
                                        htmlFor="id"
                                        name="id"
                                        type="id"
                                >
                                        ID
                                </FORMITEM>
                                <FORMBTTN 
                                        value="Login"
                                />
                                <LINKBTTN
                                        href="/forgot-password"
                                >
                                        Forgetten password? 
                                </LINKBTTN>
                                <LINKBTTN
                                        href="/"
                                >
                                        Back to main page
                                </LINKBTTN>
                        </Form>
                </main>
        );
};