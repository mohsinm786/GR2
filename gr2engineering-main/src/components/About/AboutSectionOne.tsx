import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  const points = ["Advisory solutions in industry 4.0 digital innovation and transformation", "Strong global construction, fabrication and Professional Engineer network", "Expertise in local, state and federal standards and regulations", "Proven project capability from conceptual stage to completed project delivery", "Multiple well-established client relationships in oil and gas", "Process technology expertise in midstream gas processing"]

  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container px-4 lg:px-6">
        <div className="w-10/12 mx-auto border-b border-body-color/[.15] pb-10 dark:border-white/[.15] md:pb-10 lg:pb-10">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-3/4">
              <SectionTitle
                title="Project and technology services"
                paragraph="GR2 Engineering provides smart, expedited solutions tailored around a wide variety of technical, geographic, legislative, and environmental challenges. We are a team of experts with global reach, wide experience and technical excellence to plan and execute complete life cycle projects irrespective of location, scale and complexity."
                mb="44px"
              />
              <ul className="mb-10 list-disc list-inside text-gray-700 dark:text-gray-300">
                {points?.map((point, index) => (
                  <li key={index} className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                    {point}
                  </li>
                ))}
              </ul>

              <div
                className="max-w-[570px] lg:mb-0"
                data-wow-delay=".15s"
              >
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-2/4 lg:w-full xl:w-2/4">
                    <List text="Operations support" />
                    <List text="Engineering" />
                    <List text="Project consulting" />
                  </div>

                  <div className="w-full px-3 sm:w-2/4 lg:w-full xl:w-2/4">
                    <List text="Construction management" />
                    <List text="Project Management Consulting" />
                    <List text="Advanced Digital Technology" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/4">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/about/Group-333.png"
                  alt="about-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                {/* <Image
                  src="/images/about/about-image-dark.svg"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
