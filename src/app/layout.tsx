import "./globals.css";
import { Amiri } from "@next/font/google";
const amiri = Amiri({
  subsets: ["latin"],
  variable: "--font-amiri",
  weight: ["400", "700"],
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
      <body
        className={`${amiri.variable} bg-orange-100 font-serif text-teal-900`}
      >
        <nav className="border-b-2 border-b-orange-800 p-4">
          <ul className="flex-center flex gap-4 font-sans font-semibold">
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#work">Work</a>
            </li>
            <li>
              <a href="#pricing">Pricing</a>
            </li>
            <li>
              <a href="#insurance">Insurance</a>
            </li>
          </ul>
        </nav>
        {children}
        <footer id="footer" className="h-80 bg-teal-900 pt-8">
          <div className="container mx-auto px-12 font-sans text-lg text-orange-100">
            <div className="ml-auto flex flex-auto flex-col">
              <span>177 Prince St.</span>
              <span>Suite 205</span>
              <span className="mb-4">New York, NY 10012</span>

              <a className="mb-8 hover:underline" href="tel:+12129511795">
                212.951.1795
              </a>
              <a className="hover:underline" href="mailto:caringets@gmail.com">
                caringets@gmail.com
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
