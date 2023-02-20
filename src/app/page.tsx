import Image from "next/image";
import { Amiri } from "@next/font/google";
import styles from "./page.module.css";

const amiri = Amiri({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.headerContainer}>
        <div className={amiri.className}>
          <h1 className={styles.header}>NYC NP Therapy</h1>
        </div>

        <a
          href="https://app2.luminello.com/joseruizaprn"
          target="_blank"
          className={styles.button}
        >
          Book a consultation
        </a>
      </div>

      {/* <Image
        className={styles.logo}
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}
    </main>
  );
}
