import React from 'react';

const Address = () => {
  return (
    <div className="p-8 bg-white">
      <h3 className="text-xl font-semibold text-gray-800">OUR CONTACT INFORMATION</h3>
      <div className="mt-4 text-gray-600">
        <p>
          <strong>Address:</strong><br />
          2900 Wilcrest Drive #455, Houston Texas 77042  
        </p>
        <p className="mt-4">
          <strong>Email:</strong><br />
          <a href="mailto:contact@example.com" className="text-blue-600 hover:underline">info@gr2engineering.com</a>
        </p>
        <p className="mt-4">
          <strong>Phone:</strong><br />
          <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 (281) 766-0610</a>
        </p>
        <div className="mt-4">
          <strong>Connect with Us:</strong>
          <div className="mt-2 flex space-x-4">
            <a href="https://facebook.com" className="text-gray-600 hover:text-blue-600">
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2.004C6.485 2.004 2 6.508 2 12.004c0 4.883 3.702 8.931 8.5 9.816v-6.931H8.906v-2.885h1.594V9.844c0-1.58.882-2.453 2.286-2.453.664 0 1.371.06 1.965.093v2.28H12.8c-1.186 0-1.55.578-1.55 1.438v1.89h2.571l-.333 2.885h-2.238v6.93C18.296 20.935 22 16.888 22 12.004 22 6.508 17.515 2.004 12 2.004z" />
              </svg>
            </a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-blue-400">
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.46 6.004c-.774.344-1.607.575-2.478.681a4.296 4.296 0 0 0 1.887-2.366c-.842.497-1.778.86-2.77 1.048a4.277 4.277 0 0 0-7.29 3.9c0 .335.038.662.112.975a12.168 12.168 0 0 1-8.82-4.471 4.274 4.274 0 0 0 1.32 5.706A4.23 4.23 0 0 1 .64 11.88v.05a4.278 4.278 0 0 0 3.427 4.194 4.288 4.288 0 0 1-1.16.153c-.284 0-.564-.027-.839-.078a4.283 4.283 0 0 0 3.99 2.97A8.598 8.598 0 0 1 0 20.663a12.09 12.09 0 0 0 6.568 1.923c7.88 0 12.183-6.5 12.183-12.14 0-.185-.005-.37-.014-.554a8.653 8.653 0 0 0 2.119-2.203z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/company/gr2-engineering/" className="text-gray-600 hover:text-blue-700">
              <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.98 3.5C4.98 2.12 6.11.986 7.45.986s2.48 1.13 2.48 2.51c0 1.38-1.13 2.52-2.48 2.52-1.34 0-2.48-1.14-2.48-2.52zm.68 4.48v14.04H2.07V8.02h3.59zm6.65.02c-1.63 0-2.83.68-3.53 1.79-.1.18-.16.38-.16.59V22H7.82V8.02h3.33v1.69c.67-1.02 1.85-1.69 3.16-1.69 2.09 0 3.64 1.27 3.64 3.73v11.98h-3.33v-10.3c0-1.2-.86-2.05-2.03-2.05-.9 0-1.58.6-1.83 1.41-.1.26-.12.63-.12.99v10.16h-3.33v-11.8c-.01-1.36-.01-2.44-2.11-2.44z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Address;
