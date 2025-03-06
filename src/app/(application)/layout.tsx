import '../globals.css';

import HNavBar from "../../components/navBar/navBar";
import Footer from "../../components/footer/footer";


export const metadata = {
        title: 'Memoirs.app',
        description: 'Note app by Maty',
};

export default function AppLayout({
        children,
}: {
        children: React.ReactNode
}) {
        return (
                <>
                        <HNavBar />
                        {children}
                        <Footer />
                </>
        );
};
