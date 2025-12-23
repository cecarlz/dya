import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section
        id="home"
        className="bg-gray-dark relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        style={{
          backgroundImage: "url('/images/hero/bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[600px] text-left">
                <h1 className="text-primary text-4xl leading-tight font-bold sm:text-5xl sm:leading-tight md:text-6xl md:leading-tight">
                  DETENTE Y AYUDA
                </h1>
                <h2 className="mb-10 text-white sm:text-3xl">STOP & HELP</h2>
                <h2 className="text-primary mb-6 text-lg font-semibold sm:text-3xl md:text-3xl">
                  EMERGENCY MEDICAL RESPONDER (EMR) TRAINING
                </h2>
                <p className="text-body-color-dark mb-10 text-base leading-relaxed sm:text-lg md:text-xl">
                  Gain life-saving skills grounded in compassion, service, and
                  the pure spirit of volunteerism.
                </p>
                <div className="flex flex-col items-start space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/contact"
                    className="bg-primary hover:bg-primary/90 rounded-md px-5 py-4 text-base font-semibold text-black shadow-lg duration-300 ease-in-out hover:shadow-xl"
                  >
                    Join the Journey, Stop and Help!
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
