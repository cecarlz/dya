import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Services Offered | DYA FILIPINAS",
  description: "See the services offered by DYA FILIPINAS.",
};

const ServicesPage = () => {
  return (
    <>
      <section className="from-dark/100 to-primary/10 relative mt-25 bg-gradient-to-r py-6 md:py-6 lg:py-6">
        <div className="container">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-primary mb-2 text-4xl font-bold text-black md:text-5xl lg:text-5xl">
              Services
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
                  <span className="text-primary font-medium">Services</span>
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

      <section id="services" className="pt-12 md:pt-20 lg:pt-12">
        <div className="container">
          <div className="border-body-color/[.15] border-b pb-8 dark:border-white/[.15]">
            {/* Services Offered */}
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
              SERVICES OFFERED
            </h2>
            <div className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* Emergency Medical Services */}
              <div className="border-primary/20 bg-primary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/emergency-medical.jpg"
                    alt="Emergency Medical Services"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    Emergency Medical Services
                  </h3>
                  <p className="text-sm text-white">
                    Rapid response emergency medical care with trained
                    professionals available 24/7.
                  </p>
                </div>
              </div>

              {/* Patient Transport */}
              <div className="border-primary/20 bg-primary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/patient-transport.jpg"
                    alt="Patient Transport"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    Patient Transport / Conduction
                  </h3>
                  <p className="text-sm text-white">
                    Safe and comfortable patient transportation services with
                    medical supervision.
                  </p>
                </div>
              </div>

              {/* Critical Care Transport */}
              <div className="border-primary/20 bg-primary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/critical-care.jpg"
                    alt="Critical Care Transport"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    Critical Care Transport
                  </h3>
                  <p className="text-sm text-white">
                    Specialized transport for critically ill patients requiring
                    advanced life support.
                  </p>
                </div>
              </div>

              {/* Stand by Medic */}
              <div className="border-primary/20 bg-primary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/standby-medic.jpg"
                    alt="Stand by Medic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    Stand by Medic & Ambulance
                  </h3>
                  <p className="text-sm text-white">
                    On-site medical personnel and ambulance services for events
                    and activities.
                  </p>
                </div>
              </div>

              {/* Interfacility Transport */}
              <div className="border-primary/20 bg-primary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/interfacility.jpg"
                    alt="Interfacility Transport"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    Interfacility Transport
                  </h3>
                  <p className="text-sm text-white">
                    Safe patient transfers between medical facilities with full
                    medical support.
                  </p>
                </div>
              </div>
            </div>

            {/* Other Services */}
            <h2 className="text-primary mb-8 text-3xl font-bold dark:text-white">
              OTHER SERVICES
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {/* TXIKI DYA */}
              <div className="border-secondary/20 bg-secondary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/txiki-dya.jpg"
                    alt="TXIKI DYA First Aid"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    TXIKI DYA First Aid for KIDS
                  </h3>
                  <p className="text-sm text-white">
                    Fun and engaging first aid training for children aged 6-12
                    years old.
                  </p>
                </div>
              </div>

              {/* DYA YOUTH */}
              <div className="border-secondary/20 bg-secondary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/dya-youth.jpg"
                    alt="DYA YOUTH Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    DYA YOUTH Training
                  </h3>
                  <p className="text-sm text-white">
                    Comprehensive first aid and emergency training for teens
                    aged 12-17 years old.
                  </p>
                </div>
              </div>

              {/* EMR Course */}
              <div className="border-secondary/20 bg-secondary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/emr-course.jpg"
                    alt="Emergency Medical Responder"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    Emergency Medical Responder Course
                  </h3>
                  <p className="text-sm text-white">
                    Professional certification course for emergency medical
                    response and care.
                  </p>
                </div>
              </div>

              {/* First Aid Training */}
              <div className="border-secondary/20 bg-secondary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/first-aid-training.jpg"
                    alt="First Aid Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    First Aid & BLS Training
                  </h3>
                  <p className="text-sm text-white">
                    DOLE-recognized first aid and basic life support training
                    for professionals.
                  </p>
                </div>
              </div>

              {/* Emergency Medical Dispatch */}
              <div className="border-secondary/20 bg-secondary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/medical-dispatch.jpg"
                    alt="Emergency Medical Dispatch"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    Emergency Medical Dispatch
                  </h3>
                  <p className="text-sm text-white">
                    Professional training for emergency call handling and
                    dispatch operations.
                  </p>
                </div>
              </div>

              {/* Emergency Vehicle Operations */}
              <div className="border-secondary/20 bg-secondary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/vehicle-operations.jpg"
                    alt="Emergency Vehicle Operations"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold">
                    Emergency Vehicle Operations Course
                  </h3>
                  <p className="text-sm text-white">
                    Safe driving techniques and protocols for emergency vehicle
                    operators.
                  </p>
                </div>
              </div>

              {/* Bleeding Control Training */}
              <div className="border-secondary/20 bg-secondary/5 flex flex-col overflow-hidden rounded-lg border shadow-md transition-shadow hover:shadow-lg">
                <div className="relative aspect-[4/4] w-full overflow-hidden bg-gray-200">
                  <Image
                    src="/images/services/bleeding-control.jpg"
                    alt="Bleeding Control Training"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-col p-6">
                  <h3 className="text-primary mb-2 text-lg font-bold dark:text-white">
                    STOP THE BLEED Training
                  </h3>
                  <p className="text-sm text-white">
                    American College of Surgeons certified bleeding control
                    training recognized by U.S. DoD.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
