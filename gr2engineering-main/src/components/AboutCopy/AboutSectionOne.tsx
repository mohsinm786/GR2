import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionOne = () => {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {/* You can update or remove the check icon here if needed */}
      </span>
      {text}
    </p>
  );

  return (
    <section id="about" className="mt-10">
      <div className="container">
        <div className="w-10/12 mx-auto border-b border-body-color/[.15] dark:border-white/[.15]">
          <div className="-mx-4 flex flex-wrap items-center">
            <p className="mb-12 text-base !leading-relaxed text-body-color md:text-lg ">At GR2 Engineering, we believe that true success is measured not only by financial performance but also by our commitment to social and environmental responsibility. Guided by our core values of integrity, sustainability, and community, we are dedicated to making a positive impact on the world around us.</p>
            <div className="w-full px-4 lg:w-1/2">
              {/* <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  At GR2 Engineering, we believe that true success is measured not only by financial performance but also by our commitment to social and environmental responsibility. Guided by our core values of integrity, sustainability, and community, we are dedicated to making a positive impact on the world around us.
                  </p>
              </div> */}
              <div>
                <SectionTitle
                  title="OUR COMMITMENT"
                  paragraph={`GR2 Engineering is committed to ensuring that our projects and clients are guided by the most recent environmental, social, and governance standards so that we all play a role in ensuring a safe and sustainable future for all.\n\nWe strive to improve energy management and environmental sustainability through a holistic approach utilizing our collective wisdom and painstakingly developed technology in order to contribute to the sustainable development of a society as an integrated engineering company.`}
                  // mb="44px"
                />
              </div>
            </div>

            {/* Remove or update this section based on your needs */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-square max-w-[300px] lg:max-w-[300px] lg:mr-0">
                <Image
                  src="/images/about/Group-333.png"  // Update the image path to a relevant CSR image
                  alt="csr-image"
                  fill
                  className="mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/about/Group-333.png"
                  alt="about-image"
                  fill
                  className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                />
                {/* Optionally include a dark mode image if needed */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
