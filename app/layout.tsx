import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";

export const metadata: Metadata = {
    title: "Nest Away",
    description: "Your Travel Buddy",
};

const font = Nunito({
    subsets: ["latin"],
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={font.className}>
                <ClientOnly>
                    <Modal />
                    <Navbar />
                </ClientOnly>
                {children}
            </body>
        </html>
    );
}
