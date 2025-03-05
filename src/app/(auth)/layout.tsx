import '../globals.css';
import NavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";


export const metadata = {
        title: 'Note app - Auth',
        description: 'Note app by Maty',
};

export default function AuthLayout({
        children,
}: {
        children: React.ReactNode
}) {
        return (
                <html lang="en">
                        <body>
                                {children}
                                <Footer />
                        </body>
                </html>
        );
};
