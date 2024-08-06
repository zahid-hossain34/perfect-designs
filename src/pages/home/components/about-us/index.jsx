import Wrapper from "../../../../components/ui/wrapper";

import { FaBinoculars } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <Wrapper
      id="about-us"
      className="flex min-h-screen items-center justify-center font-roboto"
    >
      <div>
        <p className="text-sm font-medium text-[#FF9553] md:text-base lg:text-xl">
          ABOUT US
        </p>

        <div className="grid grid-cols-3 gap-x-6 gap-y-5 sm:gap-y-8 lg:gap-y-20">
          <h1 className="lg:5xl col-span-full col-start-1 mt-[.25em] w-[70%] text-2xl leading-[1.1em] sm:col-span-2 sm:w-[60%] sm:text-3xl md:text-4xl xl:text-6xl">
            Creating Unique Uniform Solutions for Brand Identity
          </h1>
          <p className="col-span-full col-start-1 self-end text-sm text-gray-500 sm:col-span-1 sm:col-start-3 sm:text-base md:text-lg lg:text-xl">
            Perfect Designs began by providing basic uniform solutions to the
            service industry in the UAE. We&apos;ve grown into a dynamic
            company, crafting unique identities for businesses that want to
            stand out and delight their guests and clients.
          </p>

          <div className="col-span-full bg-[#E7E7E7] p-[1em] sm:p-[2em] md:col-span-1">
            <div className="mb-[.8em] flex w-fit items-center justify-center rounded-full border border-gray-300 p-[.5em] text-3xl sm:text-4xl md:text-5xl">
              <FaEye />
            </div>

            <h1 className="mb-[.4em] text-2xl sm:text-3xl md:text-4xl">
              Our Mission
            </h1>
            <p className="text-lg leading-6 text-gray-500 md:text-xl">
              To be the leading locally present uniforms differentiator in the
              U.A.E and grow dynamically alongside the Expo.
            </p>
          </div>

          <div className="col-span-full bg-[#E7E7E7] p-[1em] sm:p-[2em] md:col-span-1">
            <div className="mb-[.8em] flex w-fit items-center justify-center rounded-full border border-gray-300 p-[.5em] text-3xl sm:text-4xl md:text-5xl">
              <FaBinoculars />
            </div>

            <h1 className="mb-[.4em] text-2xl sm:text-3xl md:text-4xl">
              Our Vision
            </h1>
            <p className="text-lg leading-6 text-gray-500 md:text-xl">
              To be a partner of choice for our clients and a trend setter for
              our competitors.
            </p>
          </div>

          <div className="col-span-full bg-[#E7E7E7] p-[1em] sm:p-[2em] md:col-span-1">
            <div className="mb-[.8em] flex w-fit items-center justify-center rounded-full border border-gray-300 p-[.5em] text-3xl sm:text-4xl md:text-5xl">
              <FaHandshake />
            </div>

            <h1 className="mb-[.4em] text-2xl sm:text-3xl md:text-4xl">
              Our Value
            </h1>
            <p className="text-lg leading-6 text-gray-500 md:text-xl">
              Solution Oriented organization, that provides suggestions at all
              steps to better the life of your precious uniforms.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
