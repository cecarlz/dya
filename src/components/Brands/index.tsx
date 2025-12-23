"use client";

import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

const Brands = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col items-center justify-center">
          <div className="mb-8 text-center">
            <h2 className="text-primary text-3xl font-bold sm:text-4xl md:text-[45px] dark:text-white">
              DYA DELEGATIONS
            </h2>
          </div>

          {/* Logo Slider Container */}
          <div className="relative w-full overflow-hidden py-8">
            {/* Gradient Overlays */}
            <div className="pointer-events-none absolute top-0 left-0 z-10 h-full w-32 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="pointer-events-none absolute top-0 right-0 z-10 h-full w-32 bg-gradient-to-l from-black/80 to-transparent"></div>

            {/* Sliding Track */}
            <div className="animate-slide flex">
              {/* First set of logos */}
              {brandsData.map((brand) => (
                <SingleBrand key={`first-${brand.id}`} brand={brand} />
              ))}
              {/* Duplicate set for seamless loop */}
              {brandsData.map((brand) => (
                <SingleBrand key={`second-${brand.id}`} brand={brand} />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 40s linear infinite;
        }

        .animate-slide:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Brands;

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div className="flex-shrink-0 px-2 sm:px-3">
      <a
        href={href}
        target="_blank"
        rel="nofollow noreferrer"
        className="relative block h-24 w-40 opacity-70 transition-all hover:scale-110 hover:opacity-100 sm:h-32 sm:w-52 dark:opacity-60 dark:hover:opacity-100"
        title={name}
      >
        <Image
          src={imageLight}
          alt={name}
          fill
          className="hidden object-contain dark:block"
        />
        <Image
          src={image}
          alt={name}
          fill
          className="block object-contain dark:hidden"
        />
      </a>
    </div>
  );
};
