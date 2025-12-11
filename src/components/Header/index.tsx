"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
// import ThemeToggler from "./ThemeToggler";

const Header = () => {
  // Navbar toggle
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Sticky Navbar
  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    if (window.scrollY >= 80) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
  });

  // submenu handler
  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index) => {
    if (openIndex === index) {
      setOpenIndex(-1);
    } else {
      setOpenIndex(index);
    }
  };

  const usePathName = usePathname();

  return (
    <>
      <header
        className={`header top-0 left-0 z-40 flex w-full items-center text-sm ${
          sticky
            ? "dark:bg-gray-dark dark:shadow-sticky-dark shadow-sticky fixed z-9999 bg-black/80 backdrop-blur-xs transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-90 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? "py-3 lg:py-2" : "py-6"
                } `}
              >
                <Image
                  src="/images/logo/logo.svg"
                  alt="logo"
                  width={200}
                  height={200}
                  className="w-full"
                />
              </Link>
            </div>
            <div className="flex w-full items-center justify-between px-4">
              <div>
                <button
                  onClick={navbarToggleHandler}
                  id="navbarToggler"
                  aria-label="Mobile Menu"
                  className="ring-primary absolute top-1/2 right-4 block translate-y-[-50%] rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                >
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[7px] rotate-45" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "opacity-0" : " "
                    }`}
                  />
                  <span
                    className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                      navbarOpen ? "top-[-8px] -rotate-45" : " "
                    }`}
                  />
                </button>
                <nav
                  id="navbarCollapse"
                  className={`navbar border-body-color/50 dark:border-body-color/20 dark:bg-dark absolute right-0 z-30 w-[250px] rounded border-[.5px] bg-white px-6 py-4 duration-300 lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                    navbarOpen
                      ? "visibility top-full opacity-100"
                      : "invisible top-[120%] opacity-0"
                  }`}
                >
                  <ul className="block lg:flex lg:space-x-6">
                    <li className="group relative">
                      <p
                        onClick={() => handleSubmenu(0)}
                        className="group-hover:text-secondary flex cursor-pointer items-center justify-between py-2 text-sm text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4"
                      >
                        Who We Are
                        <span className="pl-3">
                          <svg width="25" height="24" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu bg-dark relative top-full left-0 rounded-sm transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                          openIndex === 0 ? "block" : "hidden"
                        }`}
                      >
                        <Link
                          href="/about"
                          className="hover:text-secondary block rounded-sm py-2.5 text-sm text-white"
                        >
                          About DYA Filipinas
                        </Link>
                        <Link
                          href="/history"
                          className="hover:text-secondary block rounded-sm py-2.5 text-sm text-white"
                        >
                          Origin, History, Milestone
                        </Link>
                        <Link
                          href="/origin"
                          className="hover:text-secondary block rounded-sm py-2.5 text-sm text-white"
                        >
                          DYA Spain Origin
                        </Link>
                      </div>
                    </li>
                    <li className="group relative">
                      <p
                        onClick={() => handleSubmenu(1)}
                        className="group-hover:text-secondary flex cursor-pointer items-center justify-between py-2 text-sm text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4"
                      >
                        Services & Trainings
                        <span className="pl-3">
                          <svg width="25" height="24" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu bg-dark relative top-full left-0 rounded-sm transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                          openIndex === 1 ? "block" : "hidden"
                        }`}
                      >
                        <Link
                          href="/services"
                          className="hover:text-secondary block rounded-sm py-2.5 text-sm text-white"
                        >
                          Services
                        </Link>
                        <Link
                          href="/trainings"
                          className="hover:text-secondary block rounded-sm py-2.5 text-sm text-white"
                        >
                          DYA Trainings
                        </Link>
                        <Link
                          href="/txiki-dya"
                          className="hover:text-secondary block rounded-sm py-2.5 text-sm text-white"
                        >
                          Txiki DYA
                        </Link>
                      </div>
                    </li>

                    <li className="group relative">
                      <p
                        onClick={() => handleSubmenu(2)}
                        className="group-hover:text-secondary flex cursor-pointer items-center justify-between py-2 text-sm text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4"
                      >
                        DYA Delegations
                        <span className="pl-3">
                          <svg width="25" height="24" viewBox="0 0 25 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </p>
                      <div
                        className={`submenu bg-dark relative top-full left-0 rounded-sm transition-[top] duration-300 group-hover:opacity-100 lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                          openIndex === 2 ? "block" : "hidden"
                        }`}
                      >
                        <Link
                          href="/delegations/philippines"
                          className="hover:text-secondary block rounded-sm py-2.5 text-sm text-white"
                        >
                          Philippines
                        </Link>
                        <Link
                          href="/delegations/international"
                          className="hover:text-secondary block rounded-sm py-2.5 text-sm text-white"
                        >
                          International
                        </Link>
                      </div>
                    </li>
                    <li>
                      <Link
                        href="/emergency-nos"
                        className="hover:text-secondary block py-2 text-sm text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-4"
                      >
                        Emergency NOs.
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="flex items-center justify-end space-x-3 pr-16 lg:pr-0">
                <Link
                  href="/volunteer"
                  className="bg-secondary text-dark hidden rounded px-4 py-2 text-sm font-medium hover:opacity-70 md:block"
                >
                  Became a DYA Volunteer
                </Link>
                <Link
                  href="/support"
                  className="ease-in-up shadow-btn hover:shadow-btn-hover bg-primary hover:bg-primary/90 text-dark hidden rounded px-4 py-2 text-sm font-medium transition duration-300 md:block"
                >
                  Give us a support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
