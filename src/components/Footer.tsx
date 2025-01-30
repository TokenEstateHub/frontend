import React from "react";

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-white py-16 px-4 sm:px-8 lg:px-16 shadow-lg">
      <div className="max-w-4xl mx-auto p-8 rounded-2xl bg-white text-center">
        {/* Newsletter Subscription */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-blue-900">Subscribe to our Newsletter</h2>
          <p className="text-gray-600 mt-2">Get the latest updates and insights.</p>
          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-72 px-4 py-2 rounded-md text-gray-800 focus:outline-none border border-gray-300"
            />
            <button className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-800 transition text-white">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer Navigation Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          <div>
            <h3 className="text-lg font-semibold text-blue-900">Company</h3>
            <ul className="mt-2 space-y-2">
              {["About", "Careers", "Blog"].map((item) => (
                <li key={item}>
                  <a href="" className="text-gray-600 hover:text-blue-900 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900">Resources</h3>
            <ul className="mt-2 space-y-2">
              {["Help Center", "Guides", "Webinars"].map((item) => (
                <li key={item}>
                  <a href="" className="text-gray-600 hover:text-blue-900 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-900">Legal</h3>
            <ul className="mt-2 space-y-2">
              {["Privacy Policy", "Terms of Use"].map((item) => (
                <li key={item}>
                  <a href="" className="text-gray-600 hover:text-blue-900 transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright & Legal Section */}
        <div className="mt-10 text-gray-600 text-sm">
          <p>&copy; {currentYear} YourCompany. All rights reserved.</p>
          <p>
            <a href="" className="hover:text-blue-900">Terms of Use</a> ·{" "}
            <a href="" className="hover:text-blue-900">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;