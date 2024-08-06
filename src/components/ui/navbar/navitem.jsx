import { NavLink } from "react-router-dom";

const NavItem = ({ link, title, activeLink, setActiveLink }) => {
  return (
    <li className="relative">
      <NavLink
        className={`durtion-200 transition-colors after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:bg-orange-logo after:transition-[width] after:duration-200 after:content-[''] ${
          activeLink === link
            ? "text-black after:w-full"
            : "text-gray-400 after:w-0 hover:text-black hover:after:w-full"
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
