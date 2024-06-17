import { Inter } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/card.scss";
import "@/styles/globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio of Pham Anh Tuan - Web Developer",
  description:
    "This is the portfolio of Pham Anh Tuan. I am a full stack developer. I love to learn new things and I am always open to collaborating with others.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
          <Navbar />
          {children}
        </main>
        <Footer />
        <ToastContainer />
      </body>
    </html>
  );
}
