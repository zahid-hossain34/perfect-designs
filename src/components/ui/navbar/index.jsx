import { useState } from "react";

import BrandLogo from "../../../assets/images/perfect-design-logo.jpeg";
import { GrMenu } from "react-icons/gr";

import Wrapper from "../wrapper";
import NavItem from "./navitem";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#home");

  console.log("activeLink: ", activeLink);

  return (
    <Wrapper className="py-[.8%] text-sm sm:text-base md:text-lg flex items-center justify-between">
      <div className="w-[50%]">
        <img
          src={BrandLogo}
          alt="PD-Logo---Vector"
          className="w-[180px] lg:w-[220px] xl:w-[200px]"
        />
      </div>

      <ul className="hidden w-[50%] 2xl:w-[40%] lg:flex justify-between items-center text-sm xl:text-base font-medium font-oswald tracking-wider">
        <NavItem
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          key="#home"
          link="#home"
          title="Home"
        />
        <NavItem
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          key="#about-us"
          link="#about-us"
          title="About Us"
        />
        <NavItem
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          key="#services"
          link="#services"
          title="Services"
        />
        <NavItem
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          key="#clients"
          link="#clients"
          title="Clients"
        />
        <NavItem
          activeLink={activeLink}
          setActiveLink={setActiveLink}
          key="#contact-us"
          link="#contact-us"
          title="Contact Us"
        />
      </ul>

      <GrMenu className="lg:hidden text-2xl" />
    </Wrapper>
  );
};

export default Navbar;
