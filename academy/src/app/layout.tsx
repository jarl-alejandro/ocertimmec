import type { Metadata } from "next";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-awesome/css/all.min.css';
import './css/style.css';
import "./globals.css";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Occertimm | Operadora de certificación por competencia",
  description: "Operadora de certificación por competencia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
      <Header />

      <main className="main-container">
        {children}
      </main>

      <Footer />
      </body>
    </html>
  );
}
