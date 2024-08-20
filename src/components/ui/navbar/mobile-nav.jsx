import { IoCloseOutline } from "react-icons/io5";
import NavItem from "./navitem";

const MobileNav = ({
  activeLink,
  setActiveLink,
  setIsMobileNavOpen,
  isMobileNavOpen,
}) => {
  return (
    <ul
      className={`fixed top-0 z-20 lg:z-0 flex h-screen w-full flex-col gap-[1em] bg-white px-12 pt-16 font-roboto text-3xl font-medium transition-[right] duration-300 sm:w-[384px] sm:p-16 sm:text-4xl ${isMobileNavOpen ? "right-0" : "right-[-100%]"}`}
    >
      <div
        className="ml-[-.5rem] cursor-pointer text-5xl text-gray-400 transition-colors duration-300 hover:text-black"
        onClick={() => setIsMobileNavOpen(false)}
      >
        <IoCloseOutline />
      </div>

      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setIsMobileNavOpen={setIsMobileNavOpen}
        link="#home"
        title="Home"
      />
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setIsMobileNavOpen={setIsMobileNavOpen}
        link="#about-us"
        title="About Us"
      />
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setIsMobileNavOpen={setIsMobileNavOpen}
        link="#services"
        title="Services"
      />
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setIsMobileNavOpen={setIsMobileNavOpen}
        link="#clients"
        title="Clients"
      />
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        setIsMobileNavOpen={setIsMobileNavOpen}
        link="#contact-us"
        title="Contact Us"
      />
    </ul>
  );
};

export default MobileNav;
