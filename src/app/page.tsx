import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="container p-12">
        <header className="mb-12">
          <h1 className="mb-2 font-serif text-6xl font-bold text-teal-800 lg:text-8xl">
            NYC NP Therapy
          </h1>
          <p className="font-sans text-lg font-semibold text-orange-900">
            Offering Compassionate Mental Health Care in the Heart of NYC
          </p>
        </header>
        <a
          className="block w-fit rounded-full border-2 border-orange-800 px-4 py-2 font-sans font-bold shadow hover:border-teal-800 hover:bg-teal-800 hover:text-orange-200"
          href="https://app2.luminello.com/joseruizaprn"
        >
          Get Started
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
