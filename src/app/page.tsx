import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="flex h-96 flex-col bg-sky-900 text-center md:h-screen">
        <div className="relative m-auto flex h-full w-full bg-hero bg-cover">
          <div className="m-auto flex w-11/12 flex-col bg-blue-700 opacity-90 lg:w-9/12 xl:w-6/12">
            <div className="m-2 border-4 border-yellow-300 py-12 md:py-24">
              <h1 className="mx-auto mb-4 max-w-xl font-sans text-2xl font-semibold uppercase tracking-wider text-gray-50 md:text-4xl">
                NYC NP IN PSYCHIATRY PC
              </h1>
              <p className="font-body mx-auto mb-8 text-center font-sans text-gray-50">
                Therapy for your emotional journey
              </p>
              <div className="flex justify-center gap-3 font-sans text-xs font-bold text-teal-900 hover:border-teal-800 md:flex-row md:text-base">
                <a
                  className="block w-fit rounded-full border-2 border-orange-800 bg-orange-100 px-4 py-2 shadow hover:bg-orange-100"
                  href="tel:+12129511795"
                >
                  212.951.1795
                </a>
                <a
                  className="block w-fit rounded-full border-2 border-orange-800 bg-orange-100 px-4 py-2 shadow hover:bg-orange-100"
                  href="mailto:caringets@gmail.com"
                >
                  caringets@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto border-b-2 border-b-orange-900 p-12 md:px-12 md:pb-32 md:pt-28">
        <h2
          id="services"
          className="mb-8 text-4xl font-bold underline underline-offset-8"
        >
          Services Offered
        </h2>
        <div className="flex justify-between">
          <ul className="list-inside list-disc text-lg font-semibold">
            <li>Prescribing medications</li>
            <li>Providing comprehensive psychiatric evaluations</li>
            <li>Diagnosing mental disorders</li>
            <li>Providing therapy</li>
            <li>Management of mental health care</li>
            <li>Medication management</li>
            <li>Certified Buprenorphine Provider</li>
            <li>NYS Provider of Medical Use of Marijuana</li>
          </ul>{" "}
          <figure className="m-4 hidden border-2 border-orange-900 md:inline-flex">
            <Image
              alt="Lucy from Peanuts at her desk"
              src="/images/lucy.png"
              width="300"
              height="200"
            />
          </figure>
        </div>
      </section>
      <section className="container mx-auto border-b-2 border-b-orange-900 p-12 md:px-12 md:pb-32 md:pt-28">
        <h2
          id="about"
          className="mb-8 text-4xl font-bold underline underline-offset-8"
        >
          About me
        </h2>
        <div className="max-w-4xl text-lg font-semibold [&>p]:mb-8">
          <p className="indent-8">
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
          <p className="indent-8">
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
          <p className="indent-8">
            My private practice spans over 20 years and my training consists of
            psychodynamic therapy, Cognitive Behavior Therapy (CBT),
            Motivational Interviewing (MI) and Emotional Focus Therapy (EFT). I
            work with adults, children, couples and families from a broad array
            of cultural and ethnic backgrounds and sexual orientations.
          </p>
          <p className="indent-8">
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
      </section>{" "}
      <section className="container mx-auto border-b-2 border-b-orange-900 p-12 md:px-12 md:pb-32 md:pt-28">
        <h2
          id="work"
          className="mb-8 text-4xl font-bold underline underline-offset-8"
        >
          Who I Work With
        </h2>
        <h3 className="mb-4 font-sans text-2xl font-bold">Individuals</h3>{" "}
        <p className="mb-8 max-w-3xl indent-8 text-lg font-semibold">
          I help my patients identify ways in which they can feel empowered to
          better manage their emotions and behaviors with respect to their
          mental health care. Utilizing my various therapeutic lenses to help my
          patients identify patterns and maladaptive behaviors that have caused
          them to be confused, in pain and the overwhelming feelings of loss,
          together we figure out these emotional landmines and set forth a plan
          to avoid setting them off. I also work with patients on issues around
          anger management/conflict resolution, anxiety, depression, intimacy
          and social skills building. Inherent in this process, is the
          enhancement and utilization of an emotional vocabulary from which this
          population can effectively express themselves.
        </p>
        <h3 className="mb-4 font-sans text-2xl font-bold">Couples</h3>{" "}
        <p className="mb-8 max-w-3xl indent-8 text-lg font-semibold">
          Similarly, I work with couples on building an emotional foundation
          from which to look at patterns that are affecting their relationship.
          The focus is building an emotional awareness of the couple&apos;s
          emotional past and identifying how their maladaptive behaviors (i.e.
          emotional distancing, lack of acceptance, awareness and understanding,
          infidelity-in some cases), are all ways in which the couple is
          currenting expressing themselves and thus shaping the couples
          experience. The goal of the therapy is to identify such patterns,
          transform these behaviors into emotional success stories by creating a
          language that the couple can utilize to better communicate their
          actual feelings of upset and concerns. In doing so, the couple obtains
          a better understanding of themselves, their partner, and the
          relationship.
        </p>
        <h3 className="mb-4 font-sans text-2xl font-bold">
          Children (AGES 6-17)
        </h3>{" "}
        <p className="mb-4 max-w-3xl indent-8 text-lg font-semibold">
          My work with children is anchored in making the child feel safe, seen
          and heard. Inherent in this process, is to create a
          &quot;no-judgement&quot; space. Thus, allowing the child to express
          themselves without limitations. A goal of the therapy is to create a
          fostering environment from which children can utilization of their
          emotional vocabulary feel empowered by the process of therapy.
        </p>
      </section>
      <section className="container mx-auto border-b-2 border-b-orange-900 p-12 md:px-12 md:pb-32 md:pt-28">
        <h2
          id="pricing"
          className="mb-8 text-4xl font-bold underline underline-offset-8"
        >
          Pricing
        </h2>
        <p className="max-w-3xl indent-8 text-lg font-semibold">
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
      <section className="container mx-auto p-12 md:px-12 md:pb-32 md:pt-28">
        <h2
          id="insurance"
          className="mb-8 text-4xl font-bold underline underline-offset-8"
        >
          Accepted Insurance
        </h2>
        <ul className="list-inside list-disc text-lg font-semibold">
          <li>1199</li>
          <li>Aetna</li>
          <li>Cigna</li>
          <li>Fidelis</li>
          <li>Health First</li>
          <li>Metroplus</li>
          <li>Oxford</li>
          <li>United Healthcare</li>
        </ul>
      </section>
    </main>
  );
}
