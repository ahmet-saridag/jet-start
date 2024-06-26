import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/layouts/common-layout";
import { GeneralStoreProvider } from "@/providers/GeneralStoreProvider";
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
        <GeneralStoreProvider>
          <CommonLayout>{children}</CommonLayout>
        </GeneralStoreProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
