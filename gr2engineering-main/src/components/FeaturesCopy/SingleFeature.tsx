import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;

  return (
    <div className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 text-center mx-auto">
      {/* Center the content */}
      <div className="wow fadeInUp" data-wow-delay=".15s">
        {/* Icon */}
        <div className="mb-6 sm:mb-8 lg:mb-10 flex h-[80px] sm:h-[100px] lg:h-[120px] w-[80px] sm:w-[100px] lg:w-[120px] items-center justify-center mx-auto transition-transform duration-300 hover:scale-110">
          {/* Enlarged icon size with hover effect */}
          <div className="relative h-full w-full flex items-center justify-center">
            {icon}
          </div>
        </div>
        {/* Title */}
        <h3 className="mb-3 text-lg sm:mb-4 sm:text-xl font-bold text-black dark:text-white md:text-xl lg:text-2xl">
          {title}
        </h3>
        {/* Paragraph */}
        <p className="text-sm sm:text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>

  );
};

export default SingleFeature;
