"use client"
import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Capabilities from "@/components/Capabilities/capabilities";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Dropdown from "@/components/Dropdown/dropdown";
import ProjectSoftware from "@/components/ProjectSoftware/projectSoftware";
import ResourcesDesciplines from "@/components/Resources&Desciplines/Resources&Desciplines";
;
import { useState } from "react";



const EngineeringPage:React.FC  = () => {

 
  // State for selected type in the parent component
  const [selectedType, setSelectedType] = useState<string>("Capabilities");

  const types = ["Capabilities", "Project resources and disciplines", "PROJECTS SOFTWARE"];

  // Callback function to update the selected type from the child (Dropdown)
  const handleTypeChange = (newType: string) => {
    setSelectedType(newType);
  };


  return (
    <>
      <Breadcrumb
        subpageName="What We Do"
        pageName="Engineering"
        description=""
        img="/images/breadcrumb_images/Engineering.jpg"
      />
      <section className="pb-[120px] mt-10">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4 lg:w-10/12">
              <div>
              <p className=" mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              Customers-focused engineering, design and consultancy services throughout the entire lifecycle
              </p>
                <div>
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    Engineering for greenfield plants or modification and modernization projects for brownfield plants: We deliver the optimized solution for our customers in terms of efficiency and sustainability for process plants, oil and gas plants, chemical and petrochemical plants, energy transition, power, plant-related construction and infrastructure, as well as for the pharmaceutical and bio-pharmaceutical industries - from feasibility studies to planning, consulting and implementation.                    </p>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                    With decades of experience around the globe, we are in a position to offer our customers a full range of engineering, design and consultancy services. These include concept, basic, detail and process engineering as well as project management, construction site management and consultancy activities.
                    </p>
                </div>
              </div>

              <div className="mt-10">
              <Dropdown types={types} selectedType={selectedType} onTypeChange={handleTypeChange} />
              </div>
              <h2 className="mb-8 mt-10 uppercase text-xl text-blue-900 font-bold leading-tight  dark:text-white sm:text-3xl sm:leading-tight">
                {selectedType}
              </h2>
              

              {selectedType === "Capabilities" && <Capabilities /> }
              {selectedType === "Project resources and disciplines" && <ResourcesDesciplines /> }
              {selectedType === "PROJECTS SOFTWARE" && <ProjectSoftware /> }
             
            </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default EngineeringPage;
