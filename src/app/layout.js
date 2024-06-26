import { Open_Sans } from "next/font/google"
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

const os = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={os.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
