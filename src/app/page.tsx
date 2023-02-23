import Image from "next/image";

export default function Home() {
  return (
    <main className="pb-28">
      <section className="container mx-auto border-b-2 border-b-orange-900 px-12 pt-20 pb-52">
        <header className="mb-8">
          <h1 className="mb-2 max-w-xs font-serif text-4xl font-bold text-teal-900 transition-opacity md:max-w-md md:text-6xl lg:max-w-3xl lg:text-7xl">
            NYC NP In PSYCHIATRY PC
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
          About me
        </h2>
        <div className="max-w-4xl text-lg font-semibold [&>p]:mb-8">
          <p>
            My name is Jose Ruiz and I am a board certified psychiatric nurse
            practitioner (PMHNP-BC) with over 20 years of experience. I received
            my education at Columbia University and New York University. My
            approach to therapy is eclectic in nature and grounded in
            evidence-based clinical research. I use a variety of therapeutic
            lenses to view my patients&apos; emotional experiences to better
            understand their perspectives and help them identify ways to better
            manage their emotions and behaviors with respects to their mental
            health.
          </p>
          <p>
            My patients come to me with myriad mental health diagnoses and
            chronic medical conditions. These conditions, include, but are not
            limited to, anxiety, depression, anger management, conflict
            resolution, intimacy, social skills and professional performance.
          </p>
          <figure className="ml-4 sm:p-8 lg:float-right">
            <Image
              alt="A picture of our office"
              src="/images/office.jpg"
              width="450"
              height="317"
            />
            <figcaption className="text-center">
              Our office located at 177 Prince St.
            </figcaption>
          </figure>
          <p>
            My private practice spans over 20 years and my training consists of
            psychodynamic therapy, Cognitive Behavior Therapy (CBT),
            Motivational Interviewing (MI) and Emotional Focus Therapy (EFT). I
            work with adults, children, couples and families from a broad array
            of cultural and ethnic backgrounds and sexual orientations.
          </p>
          <p>
            My work, as I see it, is to facilitate an experience that will allow
            a patient to explore and gain access to parts of themselves not
            previously available. The therapeutic journey starts with a trusting
            environment that propels an in-depth exploration of one’s history,
            family dynamics, relational patterns and perceived self-image.
            Inherent in this process is the enhancement and utilization of an
            emotional vocabulary from which one can learn how to effectively
            express themselves. The therapeutic process is not an easy one, and
            is at times uncomfortable, but with time discomfort gives way to
            happiness and fulfillment.
          </p>
          <p>Hablamos Español</p>
        </div>
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
