import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavbarWrapper from "@/components/NavbarWrapper";

export const metadata: Metadata = {
  title: "ZestryNear ",
  description:
    "ZestryNear is a decentralized application that allows users to create and manage their own decentralized autonomous organizations (DAOs) on the Near blockchain.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressContentEditableWarning>
      <body className="">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <NavbarWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
