import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Origin | DYA FILIPINAS",
  description: "Learn about the origin of DYA FILIPINAS.",
};

const OriginPage = () => {
  return (
    <>
      <section className="from-dark/100 to-primary/10 relative mt-25 bg-gradient-to-r py-6 md:py-6 lg:py-6">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-primary mb-2 text-4xl font-bold text-black md:text-5xl lg:text-5xl">
              Origin of Detente y Ayuda (DYA)
            </h1>
            {/* Breadcrumb */}
            <nav className="mt-8 flex justify-center">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Image
                    src="/images/origin/cecarlz_1.jpg"
                    alt="DYA Founder in front of ambulance"
                    fill
                    className="drop-shadow-three mx-auto max-w-full lg:mr-0 dark:hidden dark:drop-shadow-none"
                  />
                  <Image
                    src="/images/origin/cecarlz_2.jpg"
                    alt="DYA team and vehicles"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full lg:mr-0 dark:block dark:drop-shadow-none"
                  />
                </li>
              </ol>
            </nav>
          </div>
        </div>
        {/* Background Decorations */}
        <div className="absolute top-0 left-0 -z-10">
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <circle
              cx="100"
              cy="100"
              r="80"
              fill="currentColor"
              className="text-primary/30"
            />
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 -z-10">
          <svg
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-20"
          >
            <circle
              cx="75"
              cy="75"
              r="60"
              fill="currentColor"
              className="text-secondary/30"
            />
          </svg>
        </div>
      </section>
      <section id="origin" className="pt-12 md:pt-20 lg:pt-12">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-8 dark:border-white/[.15]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                {/* Custom Typography Style Title */}
                <div className="mb-12">
                  <div className="mb-6">
                    <h2 className="mb-4 text-4xl leading-tight font-bold text-black sm:text-5xl md:text-6xl dark:text-white">
                      <span className="text-primary">WHAT</span>{" "}
                      <span className="text-secondary">IS</span>{" "}
                      <span className="text-primary">DYA</span>
                    </h2>
                    <div className="mb-6 flex items-center">
                      <div className="bg-primary h-1 w-16 rounded"></div>
                      <div className="bg-secondary ml-2 h-1 w-8 rounded"></div>
                      <div className="bg-primary ml-2 h-1 w-4 rounded"></div>
                    </div>
                  </div>

                  <p className="text-body-color mb-6 leading-relaxed">
                    The DYA (Stop and Help) is a non-profit socio-health
                    association that has been responding since 1966 "Right now
                    we are going!" to all calls for help.
                  </p>
                  <p className="text-body-color mb-6 leading-relaxed">
                    <strong>Founded in 1966 by Juan Antonio Usparicha</strong>,
                    in its beginnings the DYA was created for two fundamental
                    reasons:
                  </p>
                  <ol className="text-body-color mb-6 list-inside list-decimal leading-relaxed">
                    <li>
                      The absence of any service of ambulances that will be
                      responsible for attending or transferring in a regulated,
                      methodical, safe and effective way to the victims of an
                      accident.
                    </li>
                    <li>
                      The disinterest (and no knowledge) of drivers for helping
                      in cases of accident or breakdown.
                    </li>
                  </ol>
                  <p className="text-body-color mb-6 leading-relaxed">
                    That is why the well-known yellow ambulances of the DYA, and
                    the rest of the emergency and social vehicles of the
                    Association, travel for decades hundreds of kilometers a day
                    to arrive in a few minutes, where their presence is
                    necessary.
                  </p>
                  <p className="text-body-color mb-6 leading-relaxed">
                    A service that, although initially carried out only at the
                    weekends, gradually grew in the number of ambulances until
                    in 1986 the DYA already offered it daily and uninterrupted,
                    24 hours a day, 365 days a year.
                  </p>
                  <p className="text-body-color mb-6 leading-relaxed">
                    And it was also in 1986 when, seeking to improve their
                    response capacity, delegations began to be created
                    throughout the province of Bizkaia, starting with Galdakao
                    and continuing with Santurtzi, Getxo, Muskiz, Iurreta,
                    Durango, Sodupe and Barakaldo.
                  </p>
                  <p className="text-body-color mb-6 leading-relaxed">
                    Over the years, the DYA has adapted its services to the
                    needs and demands of society.
                  </p>
                  <p className="text-body-color mb-6 leading-relaxed">
                    Thus, what was originally born as a service of care and
                    transfer of patients of all origins (accidentates and sick),
                    is currently an association dedicated to the integral
                    management of emergencies, which exceeds 250,000 annual
                    transfers and attentions, through services that cover the
                    most diverse fields: Medical Emergencies, Social Assistance,
                    Civil Protection, Adapted Special Transport, Preventive
                    Services, Training and Health Training and in emergencies,
                    Centers for Special Creation of Employment, Assistance
                  </p>
                  <p className="text-body-color mb-6 leading-relaxed">
                    An important social and humanitarian work that, in addition
                    to having been directly responsible for saving tens of
                    thousands of lives, has been recognized with the awarding of
                    numerous national and international awards among which
                    especially the “Award for the Best Health Institution of the
                    Year” that received in 2002 from the Ministry of Health, the
                    “European Award for the Best Road Safety Campaign” that was
                    given in 2008 by the French Minister of the Interior and the
                    national council medal of honor granted in 2010
                  </p>
                  <p className="text-body-color mb-6 leading-relaxed">
                    <a
                      href="https://dya.eus/que-es-la-dya/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary underline"
                    >
                      Read full reference
                    </a>
                  </p>
                </div>
                <div
                  className="mb-12 max-w-[700px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mb-8">
                    {/* Additional details or images can go here if needed */}
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-[4/3] max-w-[570px] lg:mr-3">
                  <Image
                    src="/images/origin/1.jpg"
                    alt="DYA Founder in front of ambulance"
                    fill
                    className="drop-shadow-three mx-auto max-w-full lg:mr-0 dark:hidden dark:drop-shadow-none"
                  />
                  <Image
                    src="/images/origin/1.jpg"
                    alt="DYA team and vehicles"
                    fill
                    className="drop-shadow-three mx-auto hidden max-w-full lg:mr-0 dark:block dark:drop-shadow-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OriginPage;
