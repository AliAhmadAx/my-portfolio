import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import {
  FaFileAlt,
  FaGithub,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ALi's Portfolio",
  description: "Senior Front-end developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-img min-h-screen flex flex-col bg-dark ">
          <header className="px-10 py-4 border-b w-full flex items-center justify-between">
            <div className="text-2xl font-bold flex space-x-5">
              <Link href={"https://github.com/AliAhmadAx"} target="_blank">
                <FaGithub className="cursor-pointer hover:text-white/80" />
              </Link>

              <Link
                href={"https://www.linkedin.com/in/ali-ahmad-9409021a6/"}
                target="_blank"
              >
                <FaLinkedin className="cursor-pointer hover:text-white/80" />
              </Link>

              <Link href={"https://wa.me/923402236319"} target="_blank">
                <FaWhatsappSquare className="cursor-pointer hover:text-white/80" />
              </Link>
            </div>

            <div className="text-2xl font-bold flex space-x-5">
              <Link href={"mailto:ali.ali.ahmad22@gmail.com"} target="_blank">
                <IoIosMail className="cursor-pointer hover:text-white/80" />
              </Link>
              <FaFileAlt className="cursor-pointer hover:text-white/80" />
            </div>
          </header>
          <main className="flex-1 p-6">{children}</main>
          <footer className="p-4 border-t border-borderGray text-sm">
            &copy; {new Date().getFullYear()} Ali Ahmad. All Rights Reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
