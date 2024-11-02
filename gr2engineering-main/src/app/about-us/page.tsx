import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import AboutSectionOne from "@/components/About/AboutSectionOne";

export const metadata: Metadata = {
  title: "About Us - GR2 Engineering",
};

const AboutPage = () => {
  return (
    <>
     
      <Breadcrumb
        subpageName="Home"
        pageName="ABOUT US"
        description=""
        img=""
      />
      
      <section className="pb-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Founded by a team of seasoned engineers, GR2 Engineering has established itself as a specialist in small and mid-sized capital projects across various sectors. Our focus areas include petrochemicals, oil and gas, energy, chemicals, water, renewables, and sustainable global infrastructure development initiatives. What sets us apart is our unwavering commitment to positive environmental and social impact. 
                    </p>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-SkyBlue dark:text-white sm:text-4xl sm:leading-tight">
                    HISTORY
                </h2>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    HOW GR2 ENGINEERING STARTED
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    As the industry evolves and projects become more complex in scope and technical features, we saw an opportunity to bring together a team of experts — each with unique experience.
                    </p>
                </div>
                <div>
                <button
                    className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2">
                    Learn More
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-SkyBlue dark:text-white sm:text-4xl sm:leading-tight">
                    OUR EXPERIENCE
                </h2>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    GR2 ENGINEERING TEAM FOOTPRINT
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    The team that makes up our organization has a cumulative 150 years of experience across the world, leading and managing large-scale projects with industry giants.
                    </p>
                </div>
                <div>
                <button
                    className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2">
                    Learn More
                </button>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                OUR APPROACH
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We recognize the urgency of today’s business landscape. GR2 Engineering thrives on delivering results swiftly. Whether it’s a tight deadline or a critical project, we excel at expediting delivery schedules. 
                    </p>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Our efficient project execution principles give us a competitive edge. While larger competitors rely on scale economies, we capture opportunities in smaller capital investments. Quality, agility, and precision drive our success. 
                    </p>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    GR2 focuses on projects demanding intricate process technology, precise procurement, and astute management. Our team’s expertise ensures seamless execution while adhering to budget constraints. 
                    </p>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    From project inception to construction management, we remain dedicated to our clients. As industry complexity grows, we adapt, providing effective solutions tailored to each project’s unique requirements in global standards. 
                    </p>
                    <h2 className="mb-8 text-3xl font-bold leading-tight text-SkyBlue dark:text-white sm:text-4xl sm:leading-tight">
                    CORPORATE SOCIAL RESPONSIBILITY
                </h2>
                    <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    OUR COMMITMENT
                    </h2>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    GR2 Engineering is committed to ensuring that our projects and clients are guided by the most recent environmental, social and governance standards so that we all play a role in ensuring a safe and sustainable future for all. 
                    </p>
                </div>
                <div>
                <button
                    className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2">
                    Learn More
                </button>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
     
    </>
  );
};

export default AboutPage;
