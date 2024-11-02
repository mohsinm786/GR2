"use client";

import React from "react";
import Image from "next/image"; // Import Image from Next.js
import SectionTitle from "../Common/SectionTitle";

const FullWidthSection = () => {
  // Bullet point list component
  const List = ({ text }) => (
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
    <section className="overflow-hidden py-16">
      {/* Full-width Banner */}
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start">
        <Image
          src="/images/addedImg/Career-page-banner.jpg" // Your banner image
          alt="Join Us Banner"
          layout="fill" // This ensures the image covers the container completely
          objectFit="cover" // This makes sure the image covers the entire area without distortion
          priority // This helps in preloading the image
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 text-left px-10">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            JOIN US
          </h1>
        </div>
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="container">
        <div className="w-10/12 mx-auto border-b border-body-color/[.15] pb-16 dark:border-white/[.15]">
          <div className="flex flex-col items-start pt-9">
            <h2 className={`text-xl text-Green font-bold !leading-tight  dark:text-white sm:text-2xl md:text-[30px]`}>
              OPEN ROLES
            </h2>

            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8">
              Join our global network of project experts across key sectors: oil and gas, energy, chemicals, water, renewables, and infrastructure. With offices in Abu Dhabi, Bogota, Calgary, Houston, Istanbul, Mumbai, and Rome, we bring localized expertise to projects on a global scale.
            </p>

            <p className="text-base font-medium leading-relaxed text-body-color md:text-lg max-w-full text-left mt-8 mb-8">
              If you’re a project professional who thrives on solving challenging engineering problems, embraces complexity, and is passionate about delivering excellence, we invite you to:
            </p>

            {/* Bullet Points */}
            <div className="mt-4">
              <List
                text={
                  <>
                    Connect with us on&nbsp;
                    <a
                      href="https://www.linkedin.com/company/gr2-engineering"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      LinkedIn
                    </a>
                  </>
                }
              />
              <List text="Browse job opportunities below and apply" />
              <List
                text={
                  <>
                    Share your ideas or contact us with any questions at&nbsp;
                    <a
                      href="mailto:info@gr2engineering.com"
                      className="text-primary hover:underline"
                    >
                      info@gr2engineering.com
                    </a>
                  </>
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthSection;
