import { Inter } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import Providers from "./providers";
import Header from "@/components/header";
const inter = Inter({ subsets: ["latin"] });

type RootChildren = {
  children: ReactNode
}

export default function RootLayout({ children }: RootChildren) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container mx-auto px-4 max-w-6xl">
          <Providers>
            <Header />
            <main>{children}</main>
          </Providers>
        </div>
      </body>
    </html>
  );
}
