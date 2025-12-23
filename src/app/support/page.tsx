import Image from "next/image";
import Link from "next/link";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const SupportPage = () => {
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
              Give Us a Support
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
                  <span className="text-primary font-medium">Support</span>
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

      <section id="support" className="pt-12 md:pt-20 lg:pt-12">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-8 dark:border-white/[.15]">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                {/* Custom Typography Style Title */}
                <div className="mb-12">
                  <div className="mb-6">
                    <h2 className="mb-4 text-4xl leading-tight font-bold text-black sm:text-5xl md:text-6xl dark:text-white">
                      <span className="text-primary">SUPPORT</span>{" "}
                      <span className="text-secondary">OUR</span>{" "}
                      <span className="text-primary">MISSION</span>
                    </h2>
                    <div className="mb-6 flex items-center">
                      <div className="bg-primary h-1 w-16 rounded"></div>
                      <div className="bg-secondary ml-2 h-1 w-8 rounded"></div>
                      <div className="bg-primary ml-2 h-1 w-4 rounded"></div>
                    </div>
                  </div>
                  <p className="text-body-color mb-6 text-lg leading-relaxed">
                    Your support helps{" "}
                    <span className="text-primary font-semibold">
                      DYA Filipinas
                    </span>{" "}
                    continue providing free emergency medical services and
                    training to communities across the Philippines. Every
                    contribution makes a difference in saving lives.
                  </p>
                </div>

                <div
                  className="mb-12 max-w-[700px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mb-8">
                    <h3 className="text-primary mb-3 text-xl font-semibold dark:text-white">
                      How Your Support Helps
                    </h3>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      As a non-profit organization run primarily by volunteers,
                      DYA Filipinas relies on the generosity of donors and
                      supporters to maintain our operations. Your contributions
                      help us purchase medical equipment, maintain our
                      ambulances, conduct training programs, and respond to
                      emergencies 24/7.
                    </p>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      Every peso donated goes directly toward our mission of
                      providing free emergency medical services to indigent
                      communities and ensuring our volunteers have the resources
                      they need to save lives.
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-primary mb-3 text-xl font-semibold dark:text-white">
                      Ways to Support
                    </h3>
                    <div className="space-y-3">
                      <List text="Financial donations to fund operations and equipment" />
                      <List text="Medical supplies and equipment donations" />
                      <List text="Sponsor training programs for volunteers" />
                      <List text="Support our community outreach initiatives" />
                      <List text="Partner with us for corporate social responsibility" />
                      <List text="Help maintain our ambulances and facilities" />
                    </div>

                    {/* Donation Card */}
                    <div
                      className="bg-dark/50 mt-8 rounded-lg border p-6 shadow-md"
                      style={{ borderColor: "#b2170f", borderWidth: 1 }}
                    >
                      <h4 className="text-primary mb-2 text-lg font-bold">
                        You may donate through:
                      </h4>
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0">
                          <Image
                            src="/images/support/bpi.svg"
                            alt="BPI Logo"
                            width={100}
                            height={100}
                            style={{ objectFit: "contain" }}
                          />
                        </div>
                        <div>
                          <div
                            className="mb-1 text-xl font-bold"
                            style={{ color: "#b2170f" }}
                          >
                            BPI:
                          </div>
                          <div className="text-body-color dark:text-body-color-dark mb-1 text-white">
                            Account Name:{" "}
                            <span className="font-medium">DYA Filipinas</span>
                          </div>
                          <div className="text-body-color dark:text-body-color-dark text-white">
                            Account Number:{" "}
                            <span className="font-medium">
                              009253 - 0093 - 54
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-primary mb-3 text-xl font-semibold dark:text-white">
                      Make an Impact
                    </h3>
                    <p className="text-body-color mb-4 text-base leading-relaxed">
                      Your support enables us to continue our mission of serving
                      communities in need. Whether through monetary donations,
                      equipment, or partnerships, every form of support helps us
                      expand our reach and improve our services.
                    </p>
                    <p className="text-body-color text-base leading-relaxed">
                      Contact us to learn more about how you can support DYA
                      Filipinas and help us save more lives. Together, we can
                      make a lasting impact on emergency medical services in the
                      Philippines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full px-4 lg:w-1/2">
                <div className="relative mx-auto aspect-4/5 max-w-[570px] lg:mr-3">
                  <Image
                    src="/images/learn-more/support.jpg"
                    alt="Support DYA Filipinas"
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

export default SupportPage;
