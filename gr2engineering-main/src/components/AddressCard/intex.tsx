import React from "react";
import Image from "next/image"; // Import Next.js Image component
import addressData from "./addressData";

const CardComponent = ({ id }) => {
  const addressInfo = addressData.find((data) => data.id === id);

  if (!addressInfo) return null;

  return (
    <div className="card w-full max-w-sm mx-auto bg-white rounded-lg shadow-lg transition-all transform hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      {/* Image Section */}
      <div className="w-full h-48 relative"> {/* Relative positioning for Next.js Image */}
        <Image
          src={addressInfo.image} // Make sure `image` is a valid path in your data
          alt={addressInfo.city}
          layout="fill" // Ensures the image fills the container
          objectFit="cover" // Ensures the image covers the area without distortion
          className="rounded-t-lg" // Optional: styling for rounded corners at the top
          priority={id === 1} // Load the first image with higher priority if needed
        />
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Location Details */}
        <div className="mb-3">
          <h3 className="text-lg font-bold text-blue-900 hover:text-blue-700 transition-colors cursor-pointer">
            {addressInfo.city}, {addressInfo.country}
          </h3>
          <p className="text-sm text-gray-600 hover:text-SkyBlue transition-colors cursor-pointer">
            {addressInfo.address}
          </p>
        </div>

        {/* Email and Phone Number */}
        <div className="mb-4">
          {/* Email with mailto */}
          <p className="text-sm text-gray-600 mb-2 hover:text-SkyBlue transition-colors cursor-pointer">
            <a href={`mailto:${addressInfo.email}`} className="hover:underline">
              {addressInfo.email}
            </a>
          </p>

          {/* Phone Number */}
          <p className="text-sm text-gray-600 hover:text-SkyBlue transition-colors cursor-pointer">
            {addressInfo.phoneNo}
          </p>
        </div>

        {/* See on maps link */}
        <div className="mb-4">
          <a
            href={addressInfo.mapLink}
            className="text-blue-600 hover:text-blue-800 text-sm flex items-center"
          >
            See on maps →
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
