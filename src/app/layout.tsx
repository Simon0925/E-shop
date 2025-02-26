import type { Metadata } from "next";
import { Fira_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import BurgerMenu from "./UI/BurgerMenu/BurgerMenu";


const firaSans = Fira_Sans({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["400", "700"], 
})

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
        className={` ${firaSans} 
        w-dvw h-screen bg-no-repeat bg-fixed bg-cover bg-center
        
        `}
            style={{ backgroundImage: "url('baner.jpg')" }}
      >
        <Header burgerMenu={<BurgerMenu />}/>
        {children}
      </body>
    </html>
  );
}
