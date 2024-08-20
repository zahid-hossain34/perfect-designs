// NavItem.js
const NavItem = ({ link, title, activeLink, setActiveLink, setIsMobileNavOpen }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setActiveLink(link);
    setIsMobileNavOpen(false);
    const section = document.querySelector(link);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <li className="relative w-fit">
      <a
        href={link}
        className={`transition-colors duration-200 after:absolute after:bottom-[-5px] after:left-0 after:h-[5px] after:bg-orange-logo after:transition-[width] after:duration-200 after:content-[''] sm:after:h-[3px] ${
          activeLink === link
            ? "text-black after:w-full"
            : "text-gray-400 after:w-0 hover:text-black hover:after:w-full"
        }`}
        onClick={handleClick}
      >
        {title.toUpperCase()}
      </a>
    </li>
  );
};

export default NavItem;
