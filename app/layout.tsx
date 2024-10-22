import Footer from "@/components/layout/footer";
import NewHeader from "@/components/layout/new-header";
import type { Metadata } from "next";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./globals.css";
import defaultMetadata from "./seo";

export const metadata: Metadata = {
    ...defaultMetadata,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="max-w-full m-auto">
                <NewHeader />
                {children}
                <Footer />
            </body>
        </html>
    );
}
