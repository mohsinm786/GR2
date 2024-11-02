import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import NetworkMap from "@/components/Address/NetworkMap";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact - GR2 Engineering",
  // description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default ContactPage;
