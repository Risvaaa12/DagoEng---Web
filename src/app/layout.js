import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HydroHealth",
  description: "Smart Green Garden",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth' style={{scrollBehavior:'smooth'}}>
      <body className={inter.className}>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
