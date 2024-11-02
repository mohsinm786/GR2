import Team from "@/components/Team";
import Breadcrumb from "@/components/Common/Breadcrumb";

import teamData from "@/components/Team/teamData";
import teamDataIndia from "@/components/Team/teamDataIndia";
import teamDataColumbia from "@/components/Team/teamDataColumbia";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Leadership - GR2 Engineering",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const LeadershipPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="About Us"
        pageName="Leadership"
        description=""
        img="/images/breadcrumb_images/Leadership.jpg"
      />
      <section className="pb-[120px] mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    At GR2 Engineering, we believe that true success is measured not only by financial performance but also by our commitment to social and environmental responsibility. Guided by our core values of integrity, sustainability, and community, we are dedicated to making a positive impact on the world around us.
                  </p>
                </div>
                <h2 className="mb-8 text-xl text-center text-blue-900 font-bold leading-tight dark:text-white sm:text-2xl sm:leading-tight">
                  MANAGEMENT TEAM
                </h2>
                <div>
                  <p className="mb-5 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    GR2 Engineering is established by a team of executives bringing a cumulative 150 years of global experience in project execution, process technologies, engineering, and design developed working for major international companies: KBR, Jacobs, Fluor, CH2M Hill, Parsons, Black & Veatch, Chiyoda for major IOCs, NOCs and Independents, among them ExxonMobil, Qatar Petroleum, ADNOC, Petronas, CNPC (PetroChina), SINOPEC, Shell, Cheniere, Energy Transfer, Kinder Morgan. As well as technology companies such as Honeywell, Emerson, ABB, Yokogawa, and others.
                  </p>
                </div>
                <Team teamData={teamData} />
                <h2 className="mt-24 mb-8 text-center text-xl text-blue-900 font-bold leading-tight dark:text-white sm:text-2xl sm:leading-tight">
                  MANAGEMENT TEAM - INDIA
                </h2>
                <Team teamData={teamDataIndia} />
                <h2 className="mt-24 mb-8 text-center text-xl text-blue-900 font-bold leading-tight dark:text-white sm:text-2xl sm:leading-tight">
                  MANAGEMENT TEAM - COLUMBIA
                </h2>
                <Team teamData={teamDataColumbia} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadershipPage;
