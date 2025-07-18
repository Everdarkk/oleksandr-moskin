import type { Metadata } from "next"
import "./globals.css"
import Navigation from "../../lib/components/Navigation";
import Transition from "../../lib/components/ui/Transition";



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
        
      </body>
    </html>
  );
}
