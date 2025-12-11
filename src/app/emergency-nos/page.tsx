import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Emergency Numbers | DYA FILIPINAS",
  description: "Important emergency contact numbers in the Philippines.",
};

export default function EmergencyNumbersPage() {
  return (
    <>
      <section className="from-dark/100 to-primary/10 relative mt-25 bg-gradient-to-r py-6 md:py-6 lg:py-6">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-primary mb-2 text-4xl font-bold text-black md:text-5xl lg:text-5xl">
              Emergency Numbers
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
                  <span className="text-primary font-medium">
                    Emergency Numbers
                  </span>
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

      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="lg:w-2/3 xl:w-1/2">
            {/* Contact Numbers */}
            <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="group border-primary/20 from-primary/5 to-primary/10 bg-dark rounded-lg border p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-3 flex items-center gap-4">
                  <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="text-primary text-xl font-bold">PLDT</span>
                </div>
                <span className="font-mono text-2xl text-white">
                  (034) 454 - 2834
                </span>
              </div>

              <div className="group border-primary/20 from-primary/5 to-primary/10 bg-dark rounded-lg border p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="mb-3 flex items-center gap-4">
                  <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <span className="text-primary text-xl font-bold">Smart</span>
                </div>
                <span className="font-mono text-2xl text-white dark:text-white">
                  +63 938 214 6229
                </span>
              </div>
            </div>

            {/* Address Card */}
            <div className="mb-8">
              <div className="border-primary/20 dark:bg-gray-dark bg-dark rounded-lg border p-8 shadow-lg">
                <div className="mb-4 flex items-start gap-4">
                  <div className="bg-primary/10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full">
                    <svg
                      className="text-primary h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-primary mb-2 text-xl font-bold">
                      DYA FILIPINAS AMBULANCE
                    </h3>
                    <p className="text-body-color dark:text-body-color-dark text-base">
                      4th Road, Burgos Street, St. Ezekiel Moreno Convent
                      <br />
                      Brgy. Villamonte, Bacolod City
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
