"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="from-dark/10 to-primary/10 relative z-10 bg-gradient-to-b pt-16 md:pt-20 lg:pt-24">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-between">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 lg:mb-16">
                {/* Philippines and Spain Contact - Side by Side */}
                <div className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {/* Philippines Contact */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-2xl">🇵🇭</span>
                      <h3 className="text-lg font-bold text-white">
                        PHILIPPINES
                      </h3>
                    </div>
                    <p className="text-xs leading-relaxed text-white">
                      Security Exchange Commission Registration
                      <br />
                      #CN 202069129
                      <br />
                      dyafilipinas@yahoo.com
                    </p>
                  </div>

                  {/* Spain Contact */}
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <span className="text-2xl">🇪🇸</span>
                      <h3 className="text-lg font-bold text-white">SPAIN</h3>
                    </div>
                    <p className="text-xs leading-relaxed text-white">
                      DYA ID G48064760
                      <br />
                      Alameda San Mames No. 33, Bajo
                      <br />
                      48010 Bilbao (Bizkaia)
                      <br />
                      <a
                        href="http://dya.eus"
                        className="text-white hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        dya.eus
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-2 sm:w-1/2 md:w-1/2 lg:order-last lg:w-2/12 xl:order-last xl:w-2/12">
              <h2 className="mb-3 text-xl font-bold text-white">Quicklinks</h2>
              <ul>
                <li className="text-xs">
                  <Link
                    href="/blog"
                    className="hover:text-primary mb-2 inline-block text-white duration-300"
                  >
                    About DYA Filipinas
                  </Link>
                </li>
                <li className="text-xs">
                  <Link
                    href="/"
                    className="hover:text-primary mb-2 inline-block text-white duration-300"
                  >
                    DYA Trainings
                  </Link>
                </li>
                <li className="text-xs">
                  <Link
                    href="/about"
                    className="hover:text-primary mb-2 inline-block text-white duration-300"
                  >
                    Became a DYA Volunteer
                  </Link>
                </li>
                <li className="text-xs">
                  <Link
                    href="/about"
                    className="hover:text-primary mb-4 inline-block text-white duration-300"
                  >
                    Give us a support
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full px-2 sm:w-1/2 md:w-1/2 lg:order-last lg:w-2/12 xl:order-last xl:w-2/12">
              <h2 className="mb-3 text-xl font-bold text-white">Follow Us</h2>
              <div className="flex items-center text-white">
                <a
                  href="https://facebook.com"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary mr-6 text-white duration-300"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.1 10.4939V7.42705C12.1 6.23984 13.085 5.27741 14.3 5.27741H16.5V2.05296L13.5135 1.84452C10.9664 1.66676 8.8 3.63781 8.8 6.13287V10.4939H5.5V13.7183H8.8V20.1667H12.1V13.7183H15.4L16.5 10.4939H12.1Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary text-white duration-300"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>
          <div className="py-8">
            <p className="text-center text-base text-xs text-white">
              © 2025 St. Ezekiel Moreno Convent, 4th Road, Burgos Street, Brgy.
              Villamonte, Bacolod CIty, Philippines 6100 | +63 34 454 - 2834
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
