import './globals.css';

import Footer from '../components/footer/footer';


export const metadata = {
        title: 'Memoirs.app',
        description: 'Note app by Maty',
};

export default function RootLayout({
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
