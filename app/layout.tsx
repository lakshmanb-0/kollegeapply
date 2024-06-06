import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KollegeApply",
  description: "Kollege is your all-in-one campus companion, designed to streamline every aspect of student life. From managing your academic schedule to tracking assignments, connecting with classmates, and staying updated on campus events, Kollege has you covered. Stay organized, collaborate effortlessly, and make the most out of your college experience with Kollege.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='bg-[#FBFAFF]'>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
