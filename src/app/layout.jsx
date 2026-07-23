import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Example CRM",
  description: "FULL CRM Good",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <div className="flex flex-col min-h-full ">
          <div className="flex">
            {" "}
            <Navbar /> {children}
          </div>
        </div>
      </body>
    </html>
  );
}
