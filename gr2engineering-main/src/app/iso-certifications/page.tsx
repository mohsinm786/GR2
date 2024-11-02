import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ISO Certificate - GR2 Engineering",
};

const IsoCertificate = () => {
  return (
    <>
      <Breadcrumb
        pageName="ISO Certifications"
        subpageName="About Us"
        // description="Below you can find our ISO certification documents."
      />

      <section className="py-10">
        <div className="container w-8/12 mx-auto px-4">
          {/* GR2 Inc ISO Certificate */}
          <div className="mb-10 w-full max-w-2xl mx-auto"> {/* Adjusted max-width */}
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6">
              GR2 Inc ISO Certificate
            </h2>
            <div className="w-full border-4 border-sky-500 shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src="/certificates/gr2-inc.jpg"
                alt="GR2 Inc ISO Certificate"
                className="w-full h-auto object-contain max-w-md transition-transform duration-300 box-border" // Added max-width
              />
            </div>
          </div>

          {/* GR2 India ISO Certificate */}
          <div className="pt-12 w-full max-w-2xl mx-auto"> {/* Adjusted max-width */}
            <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-6">
              GR2 India ISO Certificate
            </h2>
            <div className="w-full border-4 border-sky-500 shadow-lg flex items-center justify-center overflow-hidden">
              <img
                src="/certificates/gr2-india.jpg"
                alt="GR2 India ISO Certificate"
                className="w-full h-auto object-contain max-w-md transition-transform duration-300 box-border" // Added max-width
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IsoCertificate;
