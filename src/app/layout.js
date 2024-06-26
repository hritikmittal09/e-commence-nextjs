import { Inter } from "next/font/google";
import { ChakraProvider } from '@chakra-ui/react'
import BlackNavbar from "./compunents/NavBar";
import "./globals.css";
import Footer from "./compunents/Footer";
import { ToastContainer } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
        <ChakraProvider>
          <BlackNavbar/>
        {children}
        
        <Footer/>
        </ChakraProvider>
        
      </body>
    </html>
  );
}
