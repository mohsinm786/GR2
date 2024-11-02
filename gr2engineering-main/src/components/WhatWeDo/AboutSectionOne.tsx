import React from "react";
import SectionTitle from "../Common/SectionTitle";

const FullWidthSection = () => {
  return (
    <section className="py-10 ">
      <div className="container">
        <div className="w-10/12 mx-auto border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
          <div className="flex flex-col items-start">
            <p className="mb-10 text-base !leading-relaxed text-body-color md:text-lg">Our modular approach revolutionizes project delivery by offering flexible, pre-engineered solutions that streamline construction processes and accelerate project timelines. With a focus on quality, scalability, and cost-effectiveness, our modular solutions are designed to meet the unique needs of your project while delivering superior performance and value. Whether you’re looking to optimize space utilization, reduce construction waste, or enhance project flexibility, GR2 Engineering’s modular solutions provide the answer you’ve been searching for</p>
            <h2 className={`mb-4 font-bold !leading-tight text-blue-900 dark:text-white text-[23px]`}>
              OUR SERVICES
            </h2>
            <h2 className={`mb-4 text-xl font-bold !leading-tight text-Green dark:text-white sm:text-2xl md:text-[30px]`}>
              GR2 ENGINEERING FLARE AND GAS MONETIZATION SOLUTIONS
            </h2>

            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
              GR2 Engineering’s pre-engineered modular process units are readily available, a proven combination of best-in-class technical and economical solutions for Flare Abatement And Gas Monetization in Nigeria. GR2 Engineering Modular Solutions are designed and fabricated in the U.S., well-known U.S. Technology, Equipment and Fabrication Suppliers, NUPRC, and our local O&M partners.
            </p>
            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
              GR2 Engineering Modular Solutions are flexible in capacity, highly reliable operations, and easy to maintain with off-the-shelf spare parts. Our dedicated and experienced O&M partners are available full-time for onshore and offshore installations, start-up, maintenance, and operations support.
            </p>
            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
              Please contact us at modular@gr2engineering.com to learn more about how we can support you with your Flare and Gas Monetization Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthSection;
