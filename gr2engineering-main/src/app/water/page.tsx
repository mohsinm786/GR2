import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const WaterPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="What We Do"
        pageName="Water"
        description=""
        img="/images/breadcrumb_images/Water.jpg"
      />
      <section className="pb-[120px] mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    As global concerns over water scarcity and quality continue to rise, our team is dedicated to providing comprehensive solutions to address these challenges head-on. With expertise in water treatment, distribution, and management, we offer a full spectrum of services tailored to meet the diverse needs of our clients. From designing state-of-the-art treatment facilities to implementing smart water management systems, GR2 Engineering is committed to engineering solutions that ensure access to clean, safe water for generations to come.
                  </p>
                </div>
                <h2 className="uppercase mb-8 text-3xl text-blue-900 font-bold leading-tight dark:text-white sm:text-4xl sm:leading-tight">
                  Water Treatment Solutions
                </h2>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Aquamatch ‘s global experience in water desalination and treatment systems with GR2’s broad EPC experience enables GR2-Aquamatch to offer on-schedule and in-budget water treatment at industry standards, with world-class solutions for onshore and offshore facilities.
                  </p>
                </div>
                <div className="flex flex-wrap lg:justify-between lg:w-10/12 mx-auto">
                  {/* First Column */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="uppercase font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      Industry & Applications
                    </h3>
                    <ul className="mb-10 list-inside list-disc text-body-color">
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Social Programs
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Oil and Gas
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Power
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Residential Projects
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Food & Beverage
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Municipalities
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Heavy Industries
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Textile
                      </li>
                    </ul>
                    <img
                      src="/images/addedImg/water1.png"
                      alt="Industry & Applications"
                      className="mb-10 h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  {/* Second Column */}
                  <div className="w-full lg:w-1/2">
                    <h3 className="uppercase font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                      Onshore and Offshore Solutions

                    </h3>
                    <ul className="mb-10 list-inside list-disc text-body-color">
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                        Filtration/Softening Systems
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Ultrafiltration System
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Reverse Osmosis
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Nanofiltration Systems
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Membrane Bio-Reactor Systems
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Electro-deionization Systems
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Ozonization Systems
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Mineral Dosing Systems
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Wastewater Treatment and Recycling Systems
                      </li>
                      <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg hover:scale-110 hover:text-blue-400 hover:underline">
                        Desalination
                      </li>
                    </ul>
                    <img
                      src="/images/addedImg/water2.png"
                      alt="Onshore and Offshore Solutions"
                      className="mb-10 h-auto rounded-lg shadow-lg"
                    />
                  </div>
                </div>
                {/* <Link
                  href="/signup"
                  className="mb-10 ease-in-up shadow-btn hover:shadow-btn-hover hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90 md:block md:px-9 lg:px-6 xl:px-9"
                >
                  Download the PDF
                </Link> */}
                <div className="w-full flex justify-center">
                  <Link
                    href="/signup"
                    className="mb-10 inline-block shadow-btn hover:shadow-btn-hover rounded-sm bg-primary px-8 py-3 text-base font-medium text-white transition duration-300 hover:bg-opacity-90"
                  >
                    Download the PDF
                  </Link>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    GR2-Aquamatch is a global <b className="text-blue-500">industrial and residential water solution company</b> established in 1989.
                  </p>
                </div>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Company opened its Houston office with GR2 Engineering in 2019 as a leading provider of water treatment, desalination, produced water and wastewater reuse systems.
                  </p>
                </div>
                <div>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    GR2-Aquamatch is active in 34 countries and four continents with 18 offices in Europe, Asia and the USA.
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

export default WaterPage;
