import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Metro de Santiago",
  description: "Somos el medio de transporte más confiable de la Región Metropolitana, transportamos diariamente a más de 2 millones de personas.",
  openGraph: {
    type: "website",
    locale: "es_CL",
    url: "https://www.metrodesantiago.cl/",
    title: "Metro de Santiago",
    description: "Somos el medio de transporte más confiable de la Región Metropolitana, transportamos diariamente a más de 2 millones de personas.",
    images: [
      {
        url: "https://www.metro.cl/minisitio/finanzas/img/slider/home-big1.jpg",
        width: 1200,
        height: 630,
        alt: "Metro de Santiago",
      },
    ],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={openSans.className}>{children}</body>
    </html>
  );
}
