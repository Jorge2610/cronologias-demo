import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../components/header";
import Footer from "../components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cronologias Juridicas - IIJP",
  description: "Pagina web demostrativa para el IIJP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
        <link rel="icon" href="/logo.png" sizes="any" />
      </head>
      <body className={inter.className}>
        <div className="page-container">
          <div className="content-wrap">
            <Header />
            <main className="flex ">{children}</main>
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
