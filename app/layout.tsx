import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/navbar";
import Filter3Colors from "@/components/filters/Filter3Colors";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jesus H.",
  description: "Jesus Hernandez Nava, personal portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.className}  text-gray-950 relative pt-4
          dark:text-gray-50 dark:text-opacity-100 noise overflow-x-hidden `}
      >
        {/* <div
          className="bg-[#4361ee]/50 absolute top-[0rem] -z-10 right-[0rem] h-[10.25rem]
         w-[10.25rem] rounded-full blur-[2rem] dark:blur-[6rem]  sm:w-[12.75rem] sm:h-[12.75rem] dark:bg-[#4895ef]"
        />
        <div
          className="bg-[#ffbc42]/50 absolute top-[30rem] -z-10 left-[0rem] h-[12.25rem]
         w-[12.25rem] rounded-full blur-[3rem] dark:blur-[7rem]  sm:w-[16.75rem] sm:h-[16.75rem] dark:bg-[#ffbc42]"
        /> */}
        {/* <Filter3Colors /> */}

        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <NavBar />

            {children}
            <Footer />

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
