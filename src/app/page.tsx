import Image from "next/image";

export default function Home() {
  return (
    <main>
      <header className="mb-12">
        <h1 className="mb-2 font-serif text-6xl">NYC NP Therapy</h1>
        <p className="font-sans text-lg">
          Offering Compassionate Mental Health Care in the Heart of NYC
        </p>
      </header>
      <a
        className="block w-fit rounded-3xl border-2 border-slate-700 p-4 font-sans"
        href="https://app2.luminello.com/joseruizaprn"
      >
        Book a consultation
      </a>

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
