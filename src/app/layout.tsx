import type { Metadata } from "next";
import { Inter } from 'next/font/google'; // 1. Importa a fonte
import "./globals.css";

// 2. Configura a fonte
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Portfólio de Isaías Mussi",
  description: "Portfólio de projetos, habilidades e formações.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      {/* 3. Aplica a fonte ao corpo do site */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
