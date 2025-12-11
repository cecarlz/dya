const SectionTitle = ({
  title,
  paragraph,
  width = "570px",
  center,
  mb = "100px",
  titleColor = "text-black dark:text-white",
}: {
  title: string;
  paragraph: string;
  width?: string;
  center?: boolean;
  mb?: string;
  titleColor?: string;
}) => {
  return (
    <>
      <div
        className={`w-full ${center ? "mx-auto text-center" : ""}`}
        style={{ maxWidth: width, marginBottom: mb }}
      >
        <h2
          className={`mb-4 text-3xl leading-tight! font-bold ${titleColor} sm:text-4xl md:text-[45px]`}
        >
          {title}
        </h2>
        <p className="text-body-color text-base leading-relaxed! md:text-lg">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SectionTitle;
