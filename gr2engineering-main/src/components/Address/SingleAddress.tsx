import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleAddress = ({ testimonial }: { testimonial: Testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  return (
    <div className="w-full">
      <div className="rounded-sm bg-white p-1 shadow-two duration-300 hover:shadow-one dark:bg-dark dark:shadow-three dark:hover:shadow-gray-dark lg:px-5 xl:px-8">
        <p className="font-avenirNext border-opacity-10 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          {content}
        </p>
        <p className="font-avenirNext border-opacity-10 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          info@gr2engineering.com
        </p>
        <p className="font-avenirNext border-opacity-10 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          +1 (281) 766-0610
        </p>
      </div>
    </div>
  );
};

export default SingleAddress;
