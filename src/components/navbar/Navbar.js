import React, { useState } from "react";
import { Transition } from "@headlessui/react";

import { Link } from "react-router-dom";
import "./navbar.css";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" bg-white relative  top-0 w-full mx-auto px-4 sm:px-6 lg:px-8  ">
      <div className="w-full  mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="flex items-center justify-between min-h-66	">
          <img className="w-60" src="./images/FINALLOGOblack.png" alt="logo" />

          <div className="flex justify-between">
            <div className="hidden   lg:block">
              <div className="flex items-baseline space-x-4 ">
                <Link to="/">
                  <span   className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg    md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline">
                    ACTUALITÉ
                  </span>
                </Link>
                <Link to="/fonds">
                  <span
                    className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                     
                  >
                    NOS FONDS
                  </span>
                </Link>
                <Link to="/Respsocial">
                  <span   className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline">
                    RESPONSABILITÉ SOCIALE
                  </span>
                </Link>
                <Link to="/Realisation">
                  <span   className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline">
                    NOS RÉALISATIONS
                  </span>
                </Link>

                <a
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                  href="#CONTACT"
                >
                  CONTACT
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-900 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {() => (
          <div className="lg:hidden z-1">
            <div  className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
              <Link to="/">
                <span    className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg    md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline">
                  ACTUALITÉ
                </span>
              </Link>
              <Link to="/fonds">
                <span
                  className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                   
                >
                  NOS FONDS
                </span>
              </Link>
              <Link to="/Respsocial">
                <span   className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline">
                  RESPONSABILITÉ SOCIALE
                </span>
              </Link>
              <Link to="/Realisation">
                <span   className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline">
                  NOS RÉALISATIONS
                </span>
              </Link>

              <a
                className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg  md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:shadow-outline"
                href="#CONTACT"
              >
                CONTACT
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
