import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { Link, animateScroll as scroll } from "react-scroll";

const navigation = [
  { name: "Home", to: "/", current: false },
  { name: "Features", to: "features", current: false },
  { name: "How it works", to: "how it works", current: false },
  { name: "About", to: "about", current: false },
  { name: "FAQ", to: "faq-cta", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [darkMode, setDarkMode] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // <div className={darkMode ? "dark" : ""}>
    <header
      className={`sticky top-0 left-0  w-full p-2 mb-2
      transition-transform duration-300 ease-in-out transform 
      ${showNavbar ? "translate-y-0" : "translate-y-full"}bg-white mx-auto`}
    >
      <nav
        className="flex items-center justify-between border border-[#D1D7F0] px-5 py-2 lg:px-12"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/">
            <img src={Logo} className="flex-shrink-0 h-16 w-20" />
          </Link>
          <span className="sr-only">StyleMe App</span>
          <span
            className="text-[#14213d] font-['Outfit']
   text-[2.24rem] not-italic font-bold leading-normal"
          >
            StyleMe
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center 
            justify-center rounded-md p-2.5 text-[#D1D7F0]"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon
              className="h-6 w-6 bg-slate-500 rounded-sm"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex justify-between lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="text-sm font-semibold leading-6 text-[#414141] cursor-pointer
              hover:text-[#FCA311]"
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* <div className="flex items-center justify-center gap-3"> */}
        {/* <li>
            <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} />
          </li> */}
        {/* </div> */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-6">
          <ul className="flex items-center gap-4">
            <li>
              <BsFillMoonStarsFill
                className="cursor-pointer"
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
            <li>
              <Link
                to="/login"
                className="px-4 py-2
    rounded-3xl border border-[#14213d]
     text-[#fca311] text-sm not-italic font-bold leading-10"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/signup"
                className="px-4 py-2
    rounded-3xl border border-[#FCA31122] text-[#fca311] 
    text-sm not-italic font-bold leading-10 bg-[#14213d]"
              >
                Signup
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel
          className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 
          sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">StyleMe App</span>
              <img src={Logo} className="flex-shrink-0 h-16 w-20" />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7
                    text-gray-900 hover:bg-gray-400"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <ul>
                  {" "}
                  <li>
                    <Link
                      to="/login"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7
                  text-gray-900 hover:bg-gray-400"
                    >
                      Log in
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/signup"
                      className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7
                  text-gray-900 hover:bg-gray-400"
                    >
                      Sign up
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    // </div>
  );
};

export default NavBar;
