import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Muhammad Suleman",
  description: "Muhammad Suleman, a young individual who solve the unsolved with the help of coding",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}</body>
    </html>
  );
}
