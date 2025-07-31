import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/Navigation"
import Transition from "@/components/ui/Transition"
import Footer from "@/components/Footer"


export const metadata: Metadata = {
  title: "Oleksandr Moskin",
  description: "Artist from Ukraine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Transition>
          <Navigation/>
        </Transition>

        {children}
        <Footer/>
      </body>
      
    </html>
  );
}
