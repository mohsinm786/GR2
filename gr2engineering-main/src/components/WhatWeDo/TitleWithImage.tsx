// Mark the file as a Client Component
"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const TitleWithImage = ({
  title = "PROJECT LIFECYCLE SUPPORT",
  imageSrc = "/images/addedImg/project-lifecycle-support.png",
  imageAlt = "Project lifecycle support", // Default value for alt text
  mb = "100px",
}: {
  title?: string;
  imageSrc?: string;
  imageAlt?: string; // Optional alt text
  mb?: string;
}) => {
  // State for controlling modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to open and close the modal
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  // Close modal by clicking outside the image
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <section className="">
      <div className="container">
        <div className="w-10/12 mx-auto">

          <div className="flex flex-wrap items-center -mx-4">
            {/* Title Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div className="max-w-[470px] mb-12" style={{ marginBottom: mb }}>
                <h2 className="mb-4 text-3xl font-bold !leading-tight text-blue-900 dark:text-white sm:text-4xl md:text-[30px]">
                  {title}
                </h2>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="relative mx-auto mb-4 aspect-[25/24] max-w-[500px] lg:m-0 cursor-pointer"
                onClick={toggleModal} // Open modal on click
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="drop-shadow-three dark:drop-shadow-none object-contain"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Modal for Image */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={handleOutsideClick} // Close modal on outside click
            aria-label="Image modal"
          >
            <div className="relative w-full max-w-4xl">
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white text-2xl"
                onClick={toggleModal}
                aria-label="Close modal"
              >
                &times;
              </button>

              {/* Modal Image */}
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={800}
                height={600}
                className="rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TitleWithImage;
