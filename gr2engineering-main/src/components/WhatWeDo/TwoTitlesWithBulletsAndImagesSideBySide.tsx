"use client";

import React, { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const TwoTitlesWithBulletsAndImagesSideBySide = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="py-10">
      <div className="container">
        <div className="w-10/12 mx-auto border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            {/* Left column */}
            <div className="flex-1">
              <h2 className={`mb-4 text-xl text-Green font-bold !leading-tight  dark:text-white sm:text-2xl md:text-[30px]`}>
                LNG, OLEFINS, LIGHT NGL AND CO2
              </h2>

              {/* Bullet points */}
              <div className="max-w-[570px] mb-12">
                <List text="Open Art SMR" />
                <List text="Truck-able, skid built, modular design" />
                <List text="400KTA Ethylene and 120,000 gpd LNG capacity" />
                <List text="70% capacity turndown and lower 30% with VFD" />
                <List text="18 months delivery" />
                <List text="BAHE Cold-box 24 – 32 weeks" />
                <List text="6500hp Compressor 54 – 60 weeks" />
              </div>

              {/* Single Image */}
              <div className="flex justify-center">
                <div
                  className="relative h-64 w-full cursor-pointer transition-shadow duration-300"
                  onClick={() => openModal("/images/addedImg/Modular-5.png")}
                >
                  <Image
                    src="/images/addedImg/Modular-5.png"
                    alt="Modular Plant 1"
                    layout="intrinsic"
                    width={500}
                    height={300}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="flex-1">
              <h2 className={`mb-4 text-xl text-Green font-bold !leading-tight  dark:text-white sm:text-2xl md:text-[30px]`}>
                APPLICATIONS              
              </h2>

              {/* Bullet points */}
              <div className="max-w-[570px] mb-12">
                <List text="Multi-commodity liquefaction" />
                <List text="Olefins Export" />
                <List text="CO2 Liquefaction" />
                <List text="Flared Gas Recovery" />
                <List text="Stranded Gas" />
                <List text="LNG for Bunker Fuel" />
              </div>

              {/* Single Image */}
              <div className="flex justify-center">
                <div
                  className="relative h-64 w-full cursor-pointer transition-shadow duration-300"
                  onClick={() => openModal("/images/addedImg/Modular-6.png")}
                >
                  <Image
                    src="/images/addedImg/Modular-6.png"
                    alt="Modular Plant 2"
                    layout="intrinsic"
                    width={500}
                    height={300}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal for Image */}
      {isModalOpen && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={closeModal}
        >
          <div className="relative">
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <Image
              src={selectedImage}
              alt="Modal Image"
              layout="intrinsic"
              width={800}
              height={600}
              objectFit="cover"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default TwoTitlesWithBulletsAndImagesSideBySide;
