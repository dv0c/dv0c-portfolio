import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Anastasios Meintanis | Portfolio",
  description:
    "Hello I'm Anastasios Meintanis, here i showcase my work and my skills. I'm currently working at Data Base and I'm active to new jobs and projects.",
  icons: {
    icon: "/me.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"min-h-screen bg-[#FFFBF5] " + inter.className}>
        <div className="max-w-[100rem] px-10 mx-auto">
          <Header />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
