import React from 'react';
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";
import { Testimonial } from "@/types/testimonial";

const testimonialData = [
  {
    id: 1,
    name: "Technical and Advisory Services",
    points: ["Conceptual Design", "Feasibility Study", "Project Development", "Site Selection", "Process Engineering", "Revamping and Upgrading", "Blast Resistant Design Study", "Debottlenecking", "Process Optimization", "Tech Evaluation and Dev", "Process development", "Computational Analysis", "Finite Element Analysis"],
  },
  {
    id: 2,
    name: "Engineering and Procurement",
    points: ["Master Planning", "Basic Engineering Design", "Process Design Package", "Front-End Engineering Design", "Detailed Engineering", "Cold eyes Reviews", "Compliance Review", "Optimization Review", "Value Engineering", "Process Unit Evaluation", "Expansion and Integration", "Procurement Management", "Capital Project Estimating"],
  },
  {
    id: 3,
    name: "Project Management",
    points: ["Project Readiness Assessment", "Project Planning", "AWP Definition", "Cost Estimation Review", "Constructability Review", "Recovery Plans", "Regulatory & Permits", "Procurement Services", "Owner Engineers", "Project Management Consultant", "Project Controls", "Construction Management", "Fabrication Management"],
  },
];


const Testimonials = () => {
  return (
    <section className=" relative z-10 pt-10">
      <div className="container">
        <div className="w-10/12 mx-auto">
          <p className='mb-10 text-base !leading-relaxed text-body-color md:text-lg'>At GR2 Engineering, our Capital Project Services division is dedicated to providing comprehensive solutions for all stages of your project lifecycle. From initial concept development to final commissioning and beyond, we offer a wide range of services tailored to meet your specific needs and objectives. With a focus on innovation, efficiency, and cost-effectiveness, our team of experts is committed to delivering superior results that maximize value and minimize risk. Whether you’re embarking on a new capital project or seeking support for an existing initiative, trust GR2 Engineering to be your partner every step of the way.</p>
          <div>
            <h2 className={`mb-4 text-xl text-blue-900 font-bold !leading-tight  dark:text-white sm:text-2xl md:text-[30px]`}>
              CAPABILITIES
            </h2>
            <h2 className={`mb-4 text-xl text-Green font-bold !leading-tight  dark:text-white sm:text-2xl md:text-[30px]`}>
              ENERGY AND INFRASTRUCTURE
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-y-10 lg:gap-x-6">
            {testimonialData.map((testimonial) => (
              <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
        {/* SVG backgrounds and other design elements remain the same */}
      </div>

    </section>
  );
};

export default Testimonials;
