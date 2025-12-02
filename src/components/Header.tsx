import { useState } from "react";
import { NavLink } from "react-router-dom";
import "../index.css";
import logo from "/public/assets/shared/logo.svg";
import hamburger from "/public/assets/shared/icon-hamburger.svg";
import close from "/public/assets/shared/icon-close.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <div className="text-white flex justify-between lg:items-center p-6 lg:p-4  ">
        <div className="  flex items-center lg:space-x-20">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              className="object-cover md:pl-2 lg:pl-5 xl:pl-7 "
            />
          </NavLink>

          <div className="h-px opacity-40 bg-gray-400 lg:w-[20%] xl:w-[42%] absolute lg:left-[150px] xl:left-[190px] z-1 hidden lg:block "></div>
        </div>

        <nav className=" hidden md:flex justify-center items-center  bg-linear-to-r md:from-[#1d2533] md:to-[#060c17] lg:from-[#060c17]  lg:via-[#71788f] lg:to-[#040a18] md:py-9 px-17 lg:px-25 lg:pt-7 md:pb-1 lg:opacity-80 text-sm  uppercase border-gray-600 shadow-md ">
          <ul className="  flex space-x-10">
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `gap-2 flex bg-linear-to-r from-blue-400 to-blue-200 bg-clip-text md:pb-6 border-b-2 border-transparent transition-all duration-300 ${
                    isActive
                      ? "border-b-2 border-white"
                      : "border-b-2 border-transparent hover:border-gray-400/0 "
                  }`
                }
              >
                <span className=" font-bold text-white">00</span>
                <span className="font-light opacity-80 bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/destination"
                className={({ isActive }) =>
                  `gap-2 flex bg-linear-to-r from-blue-400 to-blue-200 bg-clip-text pb-6 border-b-2 border-transparent transition-all duration-300 ${
                    isActive
                      ? "border-b-2 border-white"
                      : "border-b-2 border-transparent hover:border-gray-400/0 "
                  }`
                }
              >
                {" "}
                <span className=" font-bold text-white">
                  01
                </span>{" "}
                <span className="bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text font-light opacity-80">
                  Destination
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/crew"
                className={({ isActive }) =>
                  `gap-2 flex bg-linear-to-r from-blue-400 to-blue-200 bg-clip-text pb-6 border-b-2 border-transparent transition-all duration-300 ${
                    isActive
                      ? "border-b-2 border-white"
                      : "border-b-2 border-transparent hover:border-gray-400/0 "
                  }`
                }
              >
                <span className=" font-bold text-white">02</span>
                <span className="font-light opacity-80 bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text">
                  Crew
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/technology"
                className={({ isActive }) =>
                  `gap-2 flex bg-linear-to-r from-blue-400 to-blue-200 bg-clip-text pb-6 border-b-2 border-transparent transition-all duration-300 ${
                    isActive
                      ? "border-b-2 border-white"
                      : "border-b-2 border-transparent hover:border-gray-400/0 "
                  }`
                }
              >
                {" "}
                <span className="font-bold text-white">03</span>
                <span className="font-light opacity-80 bg-linear-to-r from-blue-500 to-blue-200 bg-clip-text">
                  Technology
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
        {/* mobile menu */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="block md:hidden hover:text-white hover:translate-x-1.5"
        >
          <img
            src={hamburger}
            alt="hamburger-menu-button"
          />
        </button>
        {isMenuOpen && (
          <div className="flex md:hidden fixed h-full w-full left-20 star-overlay backdrop-blur-sm top-0 flex-col items-start justify-center z-2 animate-fadeIn">
            <button
              aria-label="close-button"
              className="absolute top-6 right-25 text-white hover:bg-white hover:translate-x-1.5 "
              onClick={() => setIsMenuOpen(false)}
            >
              <img src={close} alt="close" />
            </button>
            <nav className="  ">
              <ul className=" flex flex-col h-[500px] w-[200px] items-start pl-10 justify-start  pt-20 space-y-6 cursor-pointer uppercase">
                <li>
                  <NavLink
                    to="/"
                    className=" gap-3 flex hover:scale-105 transition-transform duration-300 "
                  >
                    <span>01</span>
                    <span>Home</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/destination"
                    className="flex gap-3 transition-transform duration-300 hover:scale-105"
                  >
                    <span>02</span>
                    <span>Destination</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/crew"
                    className="flex gap-3 transition-transform duration-300 hover:scale-105"
                  >
                    <span>03</span>
                    <span>crew</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/technology"
                    className="flex gap-3 transition-transform duration-300 hover:scale-105"
                  >
                    <span>04</span>
                    <span>Technology</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
