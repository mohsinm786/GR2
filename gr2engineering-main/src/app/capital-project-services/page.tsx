import AboutSectionOne from "@/components/WhatWeDo/AboutSectionOne";
import AboutSectionTwo from "@/components/WhatWeDo/AboutSectionTwo";
import TestimonialsCPS from "@/components/TestimonialsCPS";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FeaturesCopy from "@/components/FeaturesCopy";
import TitleWithImage from "@/components/WhatWeDo/TitleWithImage";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Capital Project Services - GR2 Engineering",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="What We Do"
        pageName="CAPITAL PROJECT SERVICES"
        description=""
      />
      {/* <AboutSectionOne /> */}


      <TestimonialsCPS />
      <TitleWithImage />
      <AboutSectionTwo />
      {/* <FeaturesCopy /> */}

    </>
  );
};

export default AboutPage;
