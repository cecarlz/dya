import Image from "next/image";
import Link from "next/link";

const LearnMore = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[600px] text-center lg:mb-20">
              <h2 className="text-primary mb-4 text-3xl font-bold sm:text-4xl md:text-[45px] dark:text-white">
                LEARN MORE
              </h2>
              <p className="text-body-color dark:text-body-color-dark text-base">
                See how you can get involved and make an impact with DYA
                Filipinas.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            title="DYA Trainings"
            image="/images/learn-more/dya-trainings.jpg"
            alt="DYA Trainings"
            description="Professional emergency medical training programs"
          />
          <Card
            title="TXIKI DYA"
            image="/images/learn-more/txiki-dya.jpg"
            alt="TXIKI DYA"
            description="First aid training for kids aged 6-12 years old"
          />
          <Card
            title="Become a Volunteer"
            image="/images/learn-more/volunteer.jpg"
            alt="Become a Volunteer"
            description="Join our team of dedicated volunteers"
          />
          <Card
            title="Give us a Support"
            image="/images/learn-more/support.jpg"
            alt="Give us a Support"
            description="Support our mission to save lives"
          />
        </div>
      </div>
    </section>
  );
};

export default LearnMore;

const getLink = (title: string) => {
  switch (title) {
    case "DYA Trainings":
      return "/trainings";
    case "TXIKI DYA":
      return "/txiki-dya";
    case "Become a Volunteer":
      return "/volunteer";
    case "Give us a Support":
      return "/support";
    default:
      return "/";
  }
};

const Card = ({
  title,
  image,
  alt,
  description,
}: {
  title: string;
  image: string;
  alt: string;
  description: string;
}) => (
  <div className="group border-primary/20 dark:bg-gray-dark flex flex-col overflow-hidden rounded-lg border shadow-md transition-all duration-300 hover:shadow-xl">
    <div className="relative h-48 w-full overflow-hidden">
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="flex flex-col bg-black p-6">
      <h3 className="text-primary mb-3 text-center text-xl font-semibold">
        {title}
      </h3>
      <p className="mb-4 text-center text-sm text-white">{description}</p>
      <Link
        href={getLink(title)}
        className="bg-primary mt-auto block rounded px-5 py-2 text-center text-sm font-semibold text-black transition"
      >
        Learn More
      </Link>
    </div>
  </div>
);
