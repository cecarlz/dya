import Image from "next/image";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const Delegations = () => {
  const List = ({ text }) => (
    <p className="text-body-color mb-5 flex items-center text-lg font-medium">
      <span className="bg-primary/10 text-primary mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      {/* Page Header Section */}
      <section className="from-dark/100 to-primary/10 relative mt-25 bg-gradient-to-r py-6 md:py-6 lg:py-6">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-primary mb-2 text-4xl font-bold text-black md:text-5xl lg:text-5xl">
              About DYA Filipinas
            </h1>

            {/* Breadcrumb */}
            <nav className="mt-8 flex justify-center">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <a
                    href="/"
                    className="text-body-color hover:text-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <span className="text-body-color">/</span>
                </li>
                <li>
                  <span className="text-primary font-medium">About</span>
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

      <section id="about" className="pt-12 md:pt-20 lg:pt-12">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-8 dark:border-white/[.15]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                {/* Custom Typography Style Title */}
                <div className="mb-12">
                  <div className="mb-6">
                    <h2 className="mb-4 text-4xl leading-tight font-bold text-black sm:text-5xl md:text-6xl dark:text-white">
                      <span className="text-primary">WHO</span>{" "}
                      <span className="text-secondary">WE</span>{" "}
                      <span className="text-primary">ARE</span>
                    </h2>
                    <div className="mb-6 flex items-center">
                      <div className="bg-primary h-1 w-16 rounded"></div>
                      <div className="bg-secondary ml-2 h-1 w-8 rounded"></div>
                      <div className="bg-primary ml-2 h-1 w-4 rounded"></div>
                    </div>
                  </div>
                  <p className="text-body-color mb-6 text-lg leading-relaxed">
                    <span className="text-primary font-semibold">
                      Détente Y Ayuda (STOP AND HELP)
                    </span>{" "}
                    or <span className="text-secondary font-semibold">DYA</span>{" "}
                    is an international organization originated from Spain.
                  </p>
                </div>

                <div
                  className="mb-12 max-w-[700px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mb-8">
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      DYA is a non-stock, nonprofit, humanitarian organization
                      that helps during emergencies including but not limited to
                      Emergency Medical Services, Disaster Relief and Rescue
                      Operations.
                    </p>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      DYA crossed the borders in 1996 and started operation in
                      Barangay Handumanan, Bacolod City.
                    </p>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      DYA started working primarily manned by trained volunteers
                      to serve the indigent communities of Barangays Handumanan,
                      Cabug, Felisa, Mansilingan, Pahanocoy, Sum-ag, and Punta
                      Taytay through its round-the-clock free emergency medical
                      services.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-primary mb-3 text-xl font-semibold dark:text-white">
                      Our Impact
                    </h3>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      DYA has produced leaders and trainers that are able to
                      share their knowledge and resources in the field of EMS.
                      Many of these trainers are now practitioners in the EMS
                      field in the Philippines and abroad.
                    </p>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      Our volunteers were trained as Emergency Medical
                      Responders, Emergency Medical Technicians, and are
                      National Competency (NC) II holders certified by TESDA.
                    </p>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      DYA has extended its arm to different groups and
                      institutions in Bacolod City and Cities / Municipalities
                      in the Province of Negros Occidental through education,
                      training, and other related services still maintaining the
                      spirit of pure volunteerism, the unique trait of DYA, and
                      one which sets it apart from other similar institutions.
                    </p>

                    <p className="text-body-color text-base leading-relaxed">
                      In 2022, DYA established the DYA Cebu delegation with
                      volunteers from the University of San Jose - Recoletos
                      (USJ-R).
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-4/5 max-w-[570px] lg:mr-3">
                  <Image
                    src="/images/about/about-image.jpg"
                    alt="about-image"
                    fill
                    className="drop-shadow-three mx-auto max-w-full lg:mr-0 dark:hidden dark:drop-shadow-none"
                  />
                  <Image
                    src="/images/about/about-image-dark.svg"
                    alt="about-image"
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

export default Delegations;
