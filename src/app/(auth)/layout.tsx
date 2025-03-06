import '../globals.css';

import Footer from "../../components/footer/footer";


export const metadata = {
        title: 'Memoirs.app - auth',
        description: 'Note app by Maty',
};

export default function AuthLayout({
        children,
}: {
        children: React.ReactNode
}) {
        return (
                <>
                        {children}
                        <Footer />
                </>
        );
};
