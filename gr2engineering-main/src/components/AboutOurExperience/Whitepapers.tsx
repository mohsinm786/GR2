import React from "react";

const Whitepapers = () => {
  return (
    <section className="py-16">
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="px-4">
            <h3 className="mb-6 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
              WHITEPAPERS
            </h3>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Whitepaper Card 1 */}
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Whitepaper Title 1
                </h4>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  GR2 Engineering Modular Solutions for XenergiLTD, Enabling Sustainable Energy Generation from Flare Gas in Nigeria
                </p>
              </div>

              {/* Whitepaper Card 2 */}
              <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Whitepaper Title 2
                </h4>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  An Integrated Approach to Advanced Seismic Modelling for Storage Tanks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Whitepapers;
