import {
  BsFacebook,
  BsTwitterX,
  BsYoutube,
  BsInstagram,
  BsMailbox,
  BsFillPhoneFill,
} from "react-icons/bs";
import Map from "./map";
import brandLogo from "../../../../assets/images/perfect-design-logo.jpeg";

export default function Footer() {
  return (
    <>
      <Map />
      <footer className="bg-gray-900" id="contact-us">
        <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div>
              <div className="flex justify-center text-teal-300 sm:justify-start">
                <img src={brandLogo} alt="brand-logo" />
              </div>

              <p className="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-400 sm:mx-0 sm:max-w-xs sm:text-left">
                You perfect design
              </p>

              <ul className="mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <BsFacebook />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <BsTwitterX />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <BsYoutube />
                  </a>
                </li>

                <li>
                  <a
                    href="/"
                    rel="noopener noreferrer"
                    target="_blank"
                    className="text-teal-500 transition hover:text-teal-500/75"
                  >
                    <BsInstagram />
                  </a>
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">About Us</p>

                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        className="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Company History
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Meet the Team
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Employee Handbook
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Careers
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Helpful Links</p>

                <nav className="mt-8">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <a
                        className="text-white transition hover:text-white/75"
                        href="/"
                      >
                        FAQs
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-white transition hover:text-white/75"
                        href="/"
                      >
                        Support
                      </a>
                    </li>

                    <li>
                      <a
                        className="group flex justify-center gap-1.5 sm:justify-start"
                        href="/"
                      >
                        <span className="text-white transition group-hover:text-white/75">
                          Live Chat
                        </span>

                        <span className="relative -mr-2 flex h-2 w-2">
                          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400 opacity-75"></span>
                          <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-500"></span>
                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>

              <div className="text-center sm:text-left">
                <p className="text-lg font-medium text-white">Contact Us</p>

                <ul className="mt-8 space-y-4 text-sm">
                  <li>
                    <a
                      className="group flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      <BsMailbox className="text-teal-500 text-xl" />
                      <span className="text-white transition group-hover:text-white/75">
                        john@doe.com
                      </span>
                    </a>
                  </li>

                  <li>
                    <a
                      className="group flex items-center justify-center gap-1.5 sm:justify-start"
                      href="/"
                    >
                      <BsFillPhoneFill className="text-teal-500 text-xl" />
                      <span className="text-white transition group-hover:text-white/75">
                        0123456789
                      </span>
                    </a>
                  </li>

                  <li className="flex items-start justify-center gap-1.5 sm:justify-start">
                    <address className="-mt-0.5 not-italic text-white">
                      Lulu Building- Shop No: 25, Near Al Souk Al Kabeer Dubai.
                      U.A.E
                    </address>
                    <span></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-6">
            <div className="text-center sm:flex sm:justify-between sm:text-left">
              <p className="text-sm text-gray-400">
                <span className="block sm:inline">All rights reserved.</span>

                <a
                  className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                  href="/"
                >
                  Terms & Conditions
                </a>

                <span>&middot;</span>

                <a
                  className="inline-block text-teal-500 underline transition hover:text-teal-500/75"
                  href="/"
                >
                  Privacy Policy
                </a>
              </p>

              <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
                Copyright &copy; Perfect Designs
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
