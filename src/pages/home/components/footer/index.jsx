import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Map from "./map";

const Footer = () => {
  return (
    <footer id="contact-us" className="mx-auto w-[90%] max-w-[1800px]">
      <Map />

      <div className="flex flex-col justify-between gap-3 border-y border-gray-300 py-6 md:flex-row md:py-10">
        <div>
          <div className="mb-3 sm:mb-5">
            <h1 className="mb-[.25em] font-roboto text-2xl sm:mb-[.125em] sm:text-3xl md:text-4xl">
              EMAIL US
            </h1>
            <address className="text-base not-italic leading-5 sm:text-lg">
              <div className="flex w-fit items-center justify-between rounded-full border border-gray-300">
                <h2 className="text-nowrap px-[1em] py-[.25em]">
                  info@perfect-designs.com
                </h2>
                <a
                  href="mailto:info@perfect-designs.com"
                  className="duration-300px-[1em] rounded-full bg-orange-logo px-[1em] py-[.25em] text-white transition-colors hover:bg-orange-logo/75"
                >
                  Send
                </a>
              </div>
            </address>
          </div>
          <div>
            <h1 className="mb-[.25em] font-roboto text-2xl sm:mb-[.125em] sm:text-3xl md:text-4xl">
              SHOP
            </h1>
            <address className="max-w-[250px] text-base not-italic leading-5 sm:text-lg">
              Lulu Building- Shop No: 25, Near Al Souk Al Kabeer Dubai. U.A.E
            </address>
          </div>
        </div>

        <div>
          <div className="mb-3 sm:mb-5">
            <h1 className="mb-[.25em] font-roboto text-2xl sm:mb-[.125em] sm:text-3xl md:text-4xl">
              FAX
            </h1>
            <p className="text-base leading-5 sm:text-lg">+971 58 627 4616 </p>
          </div>

          <div>
            <h1 className="mb-[.25em] font-roboto text-2xl sm:mb-[.125em] sm:text-3xl md:text-4xl">
              MOBILE
            </h1>
            <p className="text-base leading-5 sm:text-lg">+971 58 627 4616 </p>
          </div>
        </div>

        <div>
          <div className="mb-3 sm:mb-5">
            <h1 className="mb-[.25em] font-roboto text-2xl sm:mb-[.125em] sm:text-3xl md:text-4xl">
              FOLLOW US
            </h1>
            <p className="flex gap-1 text-sm leading-5 sm:gap-2 sm:text-base md:gap-3 md:text-lg">
              <div className="cursor-pointer rounded-full border border-gray-300 p-[.5em] transition-colors duration-300 hover:border-transparent hover:bg-orange-logo hover:text-white">
                <FaFacebookF />
              </div>
              <div className="cursor-pointer rounded-full border border-gray-300 p-[.5em] transition-colors duration-300 hover:border-none hover:bg-orange-logo hover:text-white">
                <FaLinkedinIn />
              </div>
              <div className="cursor-pointer rounded-full border border-gray-300 p-[.5em] transition-colors duration-300 hover:border-none hover:bg-orange-logo hover:text-white">
                <FaInstagram />
              </div>
            </p>
          </div>

          <div>
            <h1 className="mb-[.25em] font-roboto text-2xl sm:mb-[.125em] sm:text-3xl md:text-4xl">
              HOURS
            </h1>
            <p className="text-base leading-5 sm:text-lg">
              Monday to Saturday 10 am to 9 pm.
            </p>
          </div>
        </div>
      </div>

      <h1 className="py-[.8em] text-center text-base text-gray-400 md:text-lg">
        Copyright &copy; Perfect Designs
      </h1>
    </footer>
  );
};

export default Footer;
