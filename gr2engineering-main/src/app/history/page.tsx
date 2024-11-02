import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const HistoryPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="About Us"
        pageName="History"
        description=""
        img="/images/breadcrumb_images/History.jpg" 
      />
      <section className="pb-[120px] mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Since our inception, GR2 Engineering has been driven by a relentless commitment to excellence, innovation, and client satisfaction. Our journey began with a vision to revolutionize the energy and infrastructure sectors, and over the years, we have evolved into a trusted partner and industry leader.
                  </p>
                </div>
                <h2 className="mb-8 text-xl text-blue-900 font-bold leading-tight dark:text-white sm:text-3xl sm:leading-tight">
                  HOW GR2 ENGINEERING STARTED
                </h2>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    As the industry evolves and projects become more complex in scope and technical features, we saw an opportunity to bring together a team of experts — each with unique experience — and develop a firm that is able to provide agile, effective and customer focused project services from project development to construction management by utilizing unique but proven, technologically robust but practical solutions and techniques for successful project outcome.
                  </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    We bring together the 30+ years of global experience of each team member and deliver customized solutions for our clients worldwide. Our innovative digital execution platform seamlessly connects clients with thousands of high-qualified, experienced resources all around the world for engineering, procurement, construction management and project management.
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

export default HistoryPage;
