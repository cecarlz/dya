import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-18 lg:py-15">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[570px]">
              <div className="mb-12">
                <h2 className="mb-4 text-4xl leading-tight font-bold text-black sm:text-5xl md:text-6xl dark:text-white">
                  <span className="text-primary">MI</span>
                  <span className="text-secondary">SSI</span>
                  <span className="text-primary">ON</span>
                </h2>
                <div className="mb-6 flex items-center">
                  <div className="bg-primary h-1 w-16 rounded"></div>
                  <div className="bg-secondary ml-2 h-1 w-8 rounded"></div>
                  <div className="bg-primary ml-2 h-1 w-4 rounded"></div>
                </div>

                <h4 className="text-secondary mb-3 text-2xl font-bold">
                  "STOP AND HELP"
                </h4>

                <p className="text-body-color mb-4 text-base leading-relaxed">
                  To apply the principles of the Good Samaritan seeking to save
                  lives in cases of emergency thru free rescue and quality
                  pre-hospital care, provide a high standard of Emergency
                  Medical Services Education and Training and advocate our
                  commitment to service.
                </p>
              </div>

              <div className="mb-9">
                <h2 className="mb-4 text-4xl leading-tight font-bold text-black sm:text-5xl md:text-6xl dark:text-white">
                  <span className="text-primary">VIS</span>
                  <span className="text-secondary">ION</span>
                </h2>
                <div className="mb-6 flex items-center">
                  <div className="bg-primary h-1 w-16 rounded"></div>
                  <div className="bg-secondary ml-2 h-1 w-8 rounded"></div>
                  <div className="bg-primary ml-2 h-1 w-4 rounded"></div>
                </div>

                <p className="text-body-color mb-4 text-base leading-relaxed">
                  A dynamic and progressive organization, DYA Filipinas
                  envisions to provide the highest quality of Emergency Medical
                  Services (EMS) in a resilient and disaster-prepared society,
                  empowered by our education and training programs, rescue,
                  humanitarian and other related services while upholding the
                  pure spirit of Volunteerism.
                </p>
              </div>

              <div className="bg-secondary/10 rounded-lg p-6">
                <h4 className="text-secondary mb-3 text-2xl font-semibold">
                  Pure Spirit of Volunteerism
                </h4>
                <p className="text-body-color text-sm leading-relaxed">
                  The unique trait of DYA that sets it apart from other similar
                  institutions - maintaining the spirit of pure volunteerism in
                  all our endeavors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
