import React from "react";

function Footer() {
  return (
    <footer className="px-4 py-6 sm:py-8 bg-gray-800 text-gray-400">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:justify-between">
          <div className="flex flex-row items-center space-x-3 sm:space-x-4">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-violet-400">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSJ7KdAMnY_yYhg8FL1oFSzqgMyBrrm0SP-w&s"
                alt="Logo"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                loading="lazy"
              />
            </div>
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
              By Mechi Mavericks
            </h2>
          </div>

          <ul className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6">
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/mechimavericks/"
                target="_blank"
                className="text-sm sm:text-base hover:text-gray-200 transition-colors duration-200"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://discord.gg/tSeEdunV8c"
                target="_blank"
                className="text-sm sm:text-base hover:text-gray-200 transition-colors duration-200"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                rel="noopener noreferrer"
                href="https://www.facebook.com/mechimavericks"
                target="_blank"
                className="text-sm sm:text-base hover:text-gray-200 transition-colors duration-200"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-6 text-center text-xs sm:text-sm text-gray-500">
          <p>© {new Date().getFullYear()} CodeWar 1.0. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
