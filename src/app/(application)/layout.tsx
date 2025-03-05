import '../globals.css';
import HNavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";


export const metadata = {
        title: 'Note app',
        description: 'Note app by Maty',
};

export default function AppLayout({
        children,
}: {
        children: React.ReactNode
}) {
        return (
                <html lang="en">
                        <body>
                                <HNavBar />
                                {children}
                                <Footer />
                        </body>
                </html>
        );
};
