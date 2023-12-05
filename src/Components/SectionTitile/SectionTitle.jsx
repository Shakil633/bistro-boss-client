const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto w-6/12 text-center mb-20 mt-20">
      <p className="text-yellow-600 py-3 text-xl">{subHeading}</p>
      <h3 className=" text-4xl uppercase border-y-2 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
