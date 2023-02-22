import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-28">
      <section className="container mx-auto border-b-2 border-b-orange-900 px-12 pt-20 pb-52">
        <header className="mb-8">
          <h1 className="mb-2 max-w-xs font-serif text-4xl font-bold text-teal-900 transition-opacity md:max-w-md md:text-6xl lg:max-w-2xl lg:text-8xl">
            NYC NP In Psychiatry PC
          </h1>
          <p className="font-sans text-lg font-semibold text-orange-900 underline underline-offset-1">
            Offering Compassionate Mental Health Care in the Heart of NYC
          </p>
        </header>
        <div className="flex flex-col gap-3 md:flex-row">
          <a
            className="block w-fit rounded-full border-2 border-orange-800 px-4 py-2 font-sans font-bold text-teal-900 shadow hover:border-teal-800 hover:bg-teal-800 hover:text-orange-200"
            href="tel:+12129511795"
          >
            212.951.1795
          </a>
          <a
            className="block w-fit rounded-full border-2 border-orange-800 px-4 py-2 font-sans font-bold text-teal-900 shadow hover:border-teal-800 hover:bg-teal-800 hover:text-orange-200"
            href="mailto:caringets@gmail.com"
          >
            caringets@gmail.com
          </a>
        </div>
      </section>
      <section className="container mx-auto border-b-2 border-b-orange-900 px-12 pb-32 pt-28">
        <h2 className="mb-8 text-4xl font-bold underline underline-offset-8">
          Services Offered
        </h2>
        <ul className="list-inside list-disc text-lg font-semibold">
          <li>Prescribing medications</li>
          <li>Providing comprehensive psychiatric evaluations</li>
          <li>Diagnosing mental disorders</li>
          <li>Providing therapy</li>
          <li>Management of mental health care</li>
          <li>Medication management</li>
          <li>Certified Buprenorphine Provider</li>
          <li>NYS Provider of Medical Use of Marijuana</li>
        </ul>
      </section>
      <section className="container mx-auto border-b-2 border-b-orange-900 px-12 pb-32 pt-28">
        <h2 className="mb-8 text-4xl font-bold underline underline-offset-8">
          Pricing
        </h2>
        <p className="max-w-3xl text-lg font-semibold">
          Our goal is to provide mental health services that are both accessible
          and affordable to all. We have developed a sliding scale so that
          everyone is able to gain access to the therapy they want without
          compromising their wallet. Additionally, we are continually adding new
          insurance companies in an effort to provide further financial
          assistance. For pricing, psychiatric comprehensive evaluations are
          $500, while regular sessions cost $375 per person - be it individual,
          couples or children/adolescents.
        </p>
      </section>
      <section className="container mx-auto px-12 pb-32 pt-28">
        <h2 className="mb-8 text-4xl font-bold underline underline-offset-8">
          Accepted Insurance
        </h2>
        <ul className="list-inside list-disc text-lg font-semibold">
          <li>1199</li>
          <li>Aetna</li>
          <li>Anthem</li>
          <li>Beacon</li>
          <li>Blue Cross Blue Shield</li>
          <li>Cigna</li>
          <li>Fidelis</li>
          <li>GHI Emblem</li>
          <li>Magnum Care</li>
          <li>Medicaid</li>
          <li>Metroplus</li>
          <li>Oscar Health</li>
          <li>Oxford</li>
          <li>United Healthcare</li>
          <li>VNS</li>
        </ul>
      </section>

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
