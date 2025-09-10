import type { Metadata } from "next";
import "./globals.css";
import { abyssinica } from "@/app/ui/fonts";
import WhatsAppRedirection from "@/components/whatsAppRedirection/whatsAppRedirection";

export const metadata: Metadata = {
  // SEO Básico
  title: {
    default: "Agapanthus Las Marias Cabañas - Alquiler de Cabañas en la Naturaleza",
    template: "%s | Agapanthus Las Marias Cabañas"
  },
  description: "Alquiler de cabañas en Agapanthus Las Marias. Escapada perfecta en la naturaleza con todas las comodidades. Pileta, asador, wifi. Reservá tu estadía ideal.",
  
  // Keywords
  keywords: [
    "cabañas", 
    "alquiler cabañas", 
    "agapanthus", 
    "las marias", 
    "turismo rural", 
    "cabañas con pileta", 
    "fin de semana", 
    "vacaciones", 
    "naturaleza",
    "descanso",
    "tandil",
    "departamentos",
    "cabañas en tandil",
    "petfriendly",
    "alquiler cabañas tandil",
    "agapanthus las marias",
    "agapanthus las marias tandil",
    "cabañas agapanthus las marias"
  ],

  // Autor y generador
  authors: [{ name: "Agapanthus Las Marias" }],
  creator: "Agapanthus Las Marias Cabañas",
  publisher: "Agapanthus Las Marias Cabañas",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.agapanthuslasmarias.com/logos/rounded_logo.png",
    siteName: "Agapanthus Las Marias Cabañas",
    title: "Agapanthus Las Marias Cabañas - Alquiler de Cabañas",
    description: "Escapada perfecta en cabañas rodeadas de naturaleza. Pileta, asador, todas las comodidades para tu descanso ideal.",
    images: [
      {
        url: "https://www.agapanthuslasmarias.com/logos/rounded_logo.png", 
        width: 1200,
        height: 630,
        alt: "Agapanthus Las Marias Cabañas - Vista exterior",
      },
    ],
  },

  // Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Agapanthus Las Marias Cabañas",
    description: "Alquiler de cabañas en la naturaleza con todas las comodidades",
    images: ["https://www.agapanthuslasmarias.com/logos/rounded_logo.png"], 
  },

  verification: {
    google: "JUBrzZjUnxp33GKqON2CSbQ0x5VfGndTht_Jr6ht_Jc", 
  },

  icons: {
    icon: [
      {
        url: "/logos/rounded_logo.png",
        sizes: "32x32",
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
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/logos/rounded_logo.png",
      },
    ],
  },

  alternates: {
    canonical: "https://www.agapanthuslasmarias.com", 
  },

  other: {
    "theme-color": "#ffffff", 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es"> 
      <head>
        {/* Schema.org JSON-LD para datos estructurados */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LodgingBusiness",
              name: "Agapanthus Las Marias Cabañas",
              image: "https://tudominio.com/logos/rounded_logo.png", 
              description: "Alquiler de cabañas en la naturaleza con todas las comodidades",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Hudson 2680", 
                addressLocality: "Tandil", 
                addressRegion: "Buenos Aires", 
                postalCode: "B7000", 
                addressCountry: "AR"
              },
              telephone: "+54 02494543729", 
              url: "https://www.agapanthuslasmarias.com/", 
              priceRange: "$$",
              amenityFeature: [
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Pileta"
                },
                {
                  "@type": "LocationFeatureSpecification", 
                  name: "Asador"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "WiFi"
                },
                {
                  "@type": "LocationFeatureSpecification",
                  name: "Estacionamiento"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${abyssinica.className}`}>
        {children}
        <WhatsAppRedirection />
      </body>
    </html>
  );
}