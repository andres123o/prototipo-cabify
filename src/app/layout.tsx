import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cabify Mascotas · Propuesta de Andrés Olaya",
  description: "Propuesta independiente de Andrés Olaya. No es un sitio oficial de Cabify.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
