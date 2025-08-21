import type { Metadata } from "next";
import "./globals.css";
import {abyssinica} from "@/app/ui/fonts";
import WhatsAppRedirection from "@/components/whatsAppRedirection/whatsAppRedirection";

export const metadata: Metadata = {
  title: "Agapanthus Cabañas",
  description: "Created by Magno",
  icons: {
    icon: [
      {
        url: "/logos/rounded_logo.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/logos/rounded_logo.png", 
        sizes: "16x16",
        type: "image/png",
      },
    ],
    shortcut: "/logos/rounded_logo.png",
    apple: [
      {
        url: "/logos/rounded_logo.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${abyssinica.className}`}>
        {children}
        <WhatsAppRedirection/>
      </body>
    </html>
  );
}