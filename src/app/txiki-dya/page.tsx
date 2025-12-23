import Image from "next/image";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const TxikiDyaPage = () => {
  const List = ({ text }: { text: string }) => (
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
              TXIKI DYA
            </h1>

            {/* Breadcrumb */}
            <nav className="mt-8 flex justify-center">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-body-color hover:text-primary transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-body-color">/</span>
                </li>
                <li>
                  <span className="text-primary font-medium">TXIKI DYA</span>
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

      <section id="txiki-dya" className="pt-12 md:pt-20 lg:pt-12">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-8 dark:border-white/[.15]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                {/* Custom Typography Style Title */}
                <div className="mb-12">
                  <div className="mb-6">
                    <h2 className="mb-4 text-4xl leading-tight font-bold text-black sm:text-5xl md:text-6xl dark:text-white">
                      <span className="text-primary">FIRST AID</span>{" "}
                      <span className="text-secondary">FOR</span>{" "}
                      <span className="text-primary">KIDS</span>
                    </h2>
                    <div className="mb-6 flex items-center">
                      <div className="bg-primary h-1 w-16 rounded"></div>
                      <div className="bg-secondary ml-2 h-1 w-8 rounded"></div>
                      <div className="bg-primary ml-2 h-1 w-4 rounded"></div>
                    </div>
                  </div>
                  <p className="text-body-color mb-6 text-lg leading-relaxed">
                    <Link
                      href="/txiki-dya"
                      className="text-primary hover:text-secondary font-semibold underline transition-colors"
                    >
                      TXIKI DYA Training
                    </Link>{" "}
                    is a one-day program specially designed for children aged
                    5-12 years old, aimed at equipping them with vital
                    life-saving skills and fostering a sense of responsibility
                    in emergency situations. With a dynamic curriculum
                    encompassing essential topics, this training goes beyond
                    just playtime; it empowers our young participants to be
                    real-life heroes!
                  </p>
                </div>

                <div
                  className="mb-12 max-w-[700px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mb-8">
                    <h3 className="text-primary mb-3 text-xl font-semibold dark:text-white">
                      Safety First
                    </h3>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      At TXIKI DYA Training, safety is our top priority. Our
                      instructors are certified professionals with extensive
                      experience in emergency care and child education. We
                      create a fun and supportive environment, where children
                      can actively participate and learn life-saving skills
                      without feeling overwhelmed.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-primary mb-3 text-xl font-semibold dark:text-white">
                      Activities Include
                    </h3>
                    <div className="space-y-3">
                      <List text="Lecture on Basic First Aid (Bandaging, Splinting, Lifting and Carries)" />
                      <List text="Ambulance orientation and ride-along experience" />
                      <List text="Teaching the kids what to do during emergencies" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-4/5 max-w-[570px] lg:mr-3">
                  <Image
                    src="/images/txiki-dya/txiki-dya.jpg"
                    alt="TXIKI DYA - First Aid Training for Kids"
                    fill
                    className="drop-shadow-three mx-auto max-w-full rounded-lg object-cover lg:mr-0 dark:drop-shadow-none"
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

export default TxikiDyaPage;
