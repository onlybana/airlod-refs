import type React from "react";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airlod - Solutions innovantes pour la santé et la restauration",
  description:
    "Airlod propose des solutions innovantes pour la santé et la restauration",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
