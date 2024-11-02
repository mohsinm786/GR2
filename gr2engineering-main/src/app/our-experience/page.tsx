import AboutSectionOne from "@/components/AboutOurExperience/AboutSectionOne";
import Whitepapers from "@/components/AboutOurExperience/Whitepapers";
import Breadcrumb from "@/components/Common/Breadcrumb";
import FeaturesCopy from "@/components/FeaturesCopy";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        subpageName="About Us"
        pageName="OUR EXPERIENCE"
        description=""
      />
      <AboutSectionOne />
      <Whitepapers />
      {/* <FeaturesCopy /> */}
    </>
  );
};

export default AboutPage;
