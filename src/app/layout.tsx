import "./globals.css";
import { Amiri } from "@next/font/google";
const amiri = Amiri({
  subsets: ["latin"],
  variable: "--font-amiri",
  weight: "400",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className={`${amiri.variable} p-12 font-serif`}>{children}</body>
    </html>
  );
}
