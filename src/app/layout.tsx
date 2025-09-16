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
  modal
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Transition>
          <Navigation/>
        </Transition>

        <div className='content'>
          {children}
          {modal}
        </div>
        
        <Footer/>
        
      </body>
      
    </html>
  );
}
