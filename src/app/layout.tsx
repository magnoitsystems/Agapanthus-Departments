import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {abyssinica} from "@/app/ui/fonts";
import WhatsAppRedirection from "@/components/whatsAppRedirection/whatsAppRedirection";

export const metadata: Metadata = {
  title: "Agapanthus",
  description: "Created by Magno",
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
