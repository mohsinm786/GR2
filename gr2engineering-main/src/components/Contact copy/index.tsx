"use client";

import { useState } from "react";

const Contact = () => {
  const [file, setFile] = useState(null);

  return (
    <section id="contact" className="overflow-hidden py-10">
      <div className="container">
        <div className="w-10/12 mx-auto">
          <div className="flex justify-center">
            <div className="w-full px-4">
              <div
                className="mb-12 rounded-sm bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                data-wow-delay=".15s"
              >
                <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                  Contact Form
                </h2>
                <p className="mb-12 text-base font-medium text-body-color">
                  Please fill out the form below and we will get back to you as soon as possible.
                </p>
                <form>
                  <div className="flex flex-wrap">
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="client-name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Client Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="client-name"
                          placeholder="Enter client name"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="field-location"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Field/Site Location <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="field-location"
                          placeholder="Enter field/site location"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="contact-name"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Customer Contact Name
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          placeholder="Enter contact name"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="contact-email"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Customer Contact Email
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          placeholder="Enter contact email"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="contact-phone"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Customer Contact Phone
                        </label>
                        <input
                          type="tel"
                          id="contact-phone"
                          placeholder="Enter contact phone"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4 md:w-1/2">
                      <div className="mb-8">
                        <label
                          htmlFor="gas-field"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Gas Field or Source
                        </label>
                        <input
                          type="text"
                          id="gas-field"
                          placeholder="Enter gas field or source"
                          className="border-stroke w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="comments"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Comments <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="comments"
                          rows={5}
                          placeholder="Enter your comments"
                          className="border-stroke w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                          required
                        ></textarea>
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <div className="mb-8">
                        <label
                          htmlFor="file-upload"
                          className="mb-3 block text-sm font-medium text-dark dark:text-white"
                        >
                          Choose File
                        </label>
                        <input
                          type="file"
                          id="file-upload"
                          onChange={(e) => setFile(e.target.files[0])}
                          className="w-full rounded-sm border border-gray-300 bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                        />
                      </div>
                    </div>
                    <div className="w-full px-4">
                      <button className="rounded-sm bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
