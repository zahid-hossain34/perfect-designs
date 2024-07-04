import { NavLink } from "react-router-dom";

const NavItem = ({ link, title, activeLink, setActiveLink }) => {
  return (
    <li className="relative">
      <NavLink
        className={`transition-colors durtion-200 after:absolute after:left-0 after:bottom-[-5px] after:content-[''] after:h-[3px] after:bg-orange-logo after:transition-[width] after:duration-200 ${
          activeLink === link
            ? "after:w-full text-black"
            : "after:w-0 hover:after:w-full text-gray-400 hover:text-black"
        }`}
        to={link}
        onClick={() => setActiveLink(link)}
      >
        {title.toUpperCase()}
      </NavLink>
    </li>
  );
};

export default NavItem;
