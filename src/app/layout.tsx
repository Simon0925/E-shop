import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import BurgerMenu from "./UI/BurgerMenu/BurgerMenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Movement",
  description: "Добро пожаловать на E-Movement – ваш надежный гид в мире электротранспорта! Мы предлагаем широкий выбор современных и мощных электросамокатов и электровелосипедов для комфортных поездок по городу и за его пределами.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} 
        w-dvw h-screen bg-no-repeat bg-fixed bg-cover bg-center
        
        `}
            style={{ backgroundImage: "url('Header/baner.jpg')" }}
      >
        <Header burgerMenu={<BurgerMenu />}/>
        {children}
      </body>
    </html>
  );
}
