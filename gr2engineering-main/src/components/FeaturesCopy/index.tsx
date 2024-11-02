import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-10 md:py-10 lg:py-10">
        <div className="container">
          <div className="w-10/12 mx-auto">
            <div className="flex flex-wrap justify-center gap-20">
              {featuresData.map((feature) => (
                <SingleFeature key={feature.id} feature={feature} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
