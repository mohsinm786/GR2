import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  const List = ({ text }: { text: string }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
          <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
        </svg>
      </span>
      {text}
    </p>
  );
  return (
    <section className="pb-10">
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="flex flex-wrap items-center">
            {/* Left Side: Titles and Image */}
            <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
              <div className="mb-15">
                <SectionTitle
                  title="OUR TOOLS"
                  paragraph=""
                  mb="16px"
                  titleClassName="text-2xl font-bold text-black dark:text-white"
                />
                <h2 className={`mb-4 text-xl text-Green font-bold !leading-tight  dark:text-white sm:text-2xl md:text-[30px]`}>
                  INTEGRATED PROJECT MANAGEMENT SYSTEM
                </h2>
              </div>
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] text-center lg:text-left">
                <Image
                  src="/images/addedImg/integrated-project-management.png"
                  alt="about image"
                  fill
                  className="drop-shadow-three dark:hidden dark:drop-shadow-none object-contain"
                />
                {/* <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              /> */}
              </div>
            </div>

            {/* Right Side: Bullet Points with Margin */}
            <div className="w-full lg:w-1/2 px-4 lg:pl-12">
              <div className="max-w-[470px]">
                <div className="mb-9">
                  <List text="Intelligent intuitive project management software platform" />
                  <List text="Project Integration among client, PMC, contractors, subcontractors, and vendors" />
                  <List text="No changes required to contractor and vendor systems, tools, and procedures" />
                  <List text="AWP based" />
                  <List text="Cloud based" />
                  <List text="Scalable" />
                  <List text="Mobile App" />
                  <List text="Cost effective" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
