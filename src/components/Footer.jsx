import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left: Name & Role */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Shaikh Junaid</h2>
            <p className="text-gray-400">BCA 3rd Year Student | MERN Stack Learner</p>
          </div>

          {/* Middle: Contact Info */}
          <div className="text-center mb-4 md:mb-0">
            <p>
              Email:{" "}
              <a
                href="mailto:junaidsk4901@gmail.com"
                className="hover:text-gray-300"
              >
                junaidsk4901@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a href="tel:9588400344" className="hover:text-gray-300">
                9588400344
              </a>
            </p>
          </div>

          {/* Right: GitHub Link */}
          <div className="text-center md:text-right">
            <a
              href="https://github.com/Shaikhjunaid49"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              GitHub: Shaikhjunaid49
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} Shaikh Junaid. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
