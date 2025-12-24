import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aurelius & Partners | Legal Excellence Since 1985",
  description: "World-class legal representation for corporations and individuals facing complex litigation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
