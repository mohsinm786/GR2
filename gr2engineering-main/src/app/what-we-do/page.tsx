import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What We Do - GR2 Engineering",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="home"
        pageName="WHAT WE DO"
        description=""
      />
      
      <section className="pb-[120px]">
        <div className="container">
        <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    ENGINEERING
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Customers-focused engineering, design and consultancy services throughout the entire lifecycle 
                    </p>
                </div>
                <div>
                    <Link href="/engineering">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2">
                        Learn More
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>  
        <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    MODULAR
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    With a focus on quality, scalability, and cost-effectiveness, our modular solutions are designed to meet the unique needs of your project while delivering superior performance and value. 
                    </p>
                </div>
                <div>
                    <Link href="/modular">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2">
                        Learn More
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>  
          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    CAPITAL PROJECT SERVICES
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    From initial concept development to final commissioning and beyond, we offer a wide range of services tailored to meet your specific needs and objectives. 
                    </p>
                </div>
                <div>
                    <Link href="/capital-project-services">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2">
                        Learn More
                        </button>
                    </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="-mx-4 flex flex-wrap justify-center pt-10">
            <div className="w-full px-4 lg:w-10/12">
              <div>
                <h2 className="mb-8 text-3xl font-bold leading-tight text-LightBlue dark:text-white sm:text-4xl sm:leading-tight">
                    WATER
                </h2>
                <div>
                    <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    From designing state-of-the-art treatment facilities to implementing smart water management systems, GR2 Engineering is committed to engineering solutions that ensure access to clean, safe water for generations to come.
                    </p>
                </div>
                <div>
                    <Link href="/water">
                        <button className="border-2 hover:bg-SkyBlue hover:text-white border-SkyBlue px-4 py-2">
                        Learn More
                        </button>
                    </Link>
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
