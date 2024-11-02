import Image from "next/image"; // Import the Next.js Image component
import Address from "./Address";
import MapComponent from "./MapComponent";
import CardComponent from "../AddressCard/intex";

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16">
      {/* Full-width Banner */}
      <div className="relative w-full h-[400px] bg-gray-200 flex items-center justify-start pl-10">
        {/* Use Next.js Image component for better performance */}
        <Image
          src="/images/addedImg/contact-us-banner.jpg"
          alt="Contact Us Banner"
          layout="fill" // This ensures the image covers the container completely
          objectFit="cover" // This makes sure the image covers the entire area without distortion
          priority // This helps in preloading the image, avoiding flicker
          className="absolute inset-0 w-full h-full"
        />
        <div className="relative z-10 text-left">
          <h1 className="text-4xl font-bold text-white sm:text-5xl lg:text-5xl">
            CONTACT US
          </h1>
        </div>
        {/* Optional Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      {/* Existing Contact Form Section */}
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="-mx-4 flex flex-wrap pt-10">
            {/* Left: Contact Form */}
            <div className="w-full px-4">
              <div
                className="mb-12 rounded-lg bg-blue-50 px-8 py-11 shadow-lg dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-blue-900 dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  You can easily reach us by filling out this form — we will get in touch with you shortly.
                </p>
                <form>
                  <div className="-mx-4 flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="border-stroke w-full rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="message"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={5}
                          placeholder="Enter your Message"
                          className="border-stroke w-full resize-none rounded-lg border bg-white px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-gray-700 dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="rounded-lg bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-SkyBlue dark:shadow-submit-dark">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="w-full">
              {/* Use a grid layout for 3 cards in one row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <CardComponent id={1} />
                <CardComponent id={2} />
                <CardComponent id={3} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
