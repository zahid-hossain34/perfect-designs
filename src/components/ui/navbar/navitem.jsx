// NavItem.js
const NavItem = ({ link, title, activeLink, setActiveLink }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setActiveLink(link);

    // Logging the link value
    console.log("Navigating to:", link);
    const section = document.querySelector(link);

    // Logging the result of the querySelector
    console.log("Section found:", section);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      console.error(`No section found for selector: ${link}`);
    }
  };

  return (
    <li className="relative">
      <a
        href={link}
        className={`transition-colors duration-200 after:absolute after:bottom-[-5px] after:left-0 after:h-[3px] after:bg-orange-logo after:transition-[width] after:duration-200 after:content-[''] ${
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
