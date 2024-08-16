// Navbar.js
import { useState } from "react";

import BrandLogo from "../../../assets/images/perfect-design-logo.jpeg";
import { GrMenu } from "react-icons/gr";

// import Wrapper from "../wrapper";
import Desktopnav from "./desktop-nav";
import MobileNav from "./mobile-nav";

const Navbar = ({ isMobileNavOpen, setIsMobileNavOpen }) => {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <div className="mx-auto px-[10%] absolute top-0 left-0 z-10 flex items-center justify-between py-[.8%] text-sm sm:text-base md:text-lg bg-transparent">
      <div className="w-[50%]">
        <img
          src={BrandLogo}
          alt="PD-Logo---Vector"
          className="w-[180px] lg:w-[220px] xl:w-[200px]"
        />
      </div>

      {!isMobileNavOpen && (
        <Desktopnav activeLink={activeLink} setActiveLink={setActiveLink} />
      )}

      <MobileNav
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setIsMobileNavOpen={setIsMobileNavOpen}
        isMobileNavOpen={isMobileNavOpen}
      />

      <div
        className="rounded border border-gray-300 p-1 text-lg transition-colors duration-300 hover:bg-gray-100 focus:bg-gray-200 active:bg-gray-200 lg:hidden"
        onClick={() => setIsMobileNavOpen(true)}
      >
        <GrMenu />
      </div>
    </div>
  );
};

export default Navbar;
