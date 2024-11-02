import AboutSectionOne from "@/components/AboutCopy/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FeaturesCopy from "@/components/FeaturesCopy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Social Responsibility - GR2 Engineering",
  // description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="About Us"
        pageName="CORPORATE SOCIAL RESPONSIBILITY"
        description=""
        img="/images/breadcrumb_images/CSR.jpg"
      />
      <AboutSectionOne />
      {/* <AboutSectionTwo /> */}
      <FeaturesCopy />
    </>
  );  
};

export default AboutPage;
