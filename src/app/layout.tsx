import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anastasios Meintanis | Portfolio",
  description: "Hello I'm Anastasios Meintanis, here i showcase my work and my skills. I'm currently working at Data Base and I'm active to new jobs and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"max-w-[100rem] px-10 min-h-screen bg-[#FFFBF5] mx-auto " + inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
