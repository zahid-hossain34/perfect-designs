import NavItem from "./navitem";

const Desktopnav = ({ activeLink, setActiveLink }) => {
  return (
    <ul className="hidden w-[50%] items-center justify-between font-roboto text-sm font-medium lg:flex xl:text-base 2xl:w-[40%]">
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        link="#home"
        title="Home"
      />
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        link="#about-us"
        title="About Us"
      />
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        link="#services"
        title="Services"
      />
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        link="#clients"
        title="Clients"
      />
      <NavItem
        activeLink={activeLink}
        setActiveLink={setActiveLink}
        link="#contact-us"
        title="Contact Us"
      />
    </ul>
  );
};

export default Desktopnav;
