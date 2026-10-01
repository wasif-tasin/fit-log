import type { Metadata } from "next";
import { Geist, Geist_Mono, Oswald, Inter } from "next/font/google";
import "./globals.css";
import FitLogsProvider from "@/context/FitLogsContext";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";
import Navbar from "../components/shared/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FitLog",
  description: "Workout Library",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} ${oswald.variable} ${inter.variable} h-full antialiased`}
    >
      <body className=" min-h-screen flex flex-col container mx-auto px-2">
        <FitLogsProvider>
          <Navbar></Navbar>

          <main className="flex-1">{children}</main>

          <Footer></Footer>

          <Toaster
            position="top-right"
            toastOptions={{
              style: {
                background: "#15171d",
                color: "white",
                border: "1px solid #343943",
              },
              classNames: {
                success: "[&_[data-icon]]:text-green-500",
                error: "[&_[data-icon]]:text-red-500",
              },
            }}
          />
        </FitLogsProvider>
      </body>
    </html>
  );
}
