import Wrapper from "../../../../components/ui/wrapper";

import { FaBinoculars } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <Wrapper
      id="about-us"
      className="font-roboto min-h-screen flex items-center justify-center"
    >
      <div>
        <p className="text-[#FF9553] font-medium text-sm md:text-base lg:text-xl">
          ABOUT US
        </p>

        <div className="grid grid-cols-3 gap-x-6 gap-y-5 sm:gap-y-8 lg:gap-y-20">
          <h1 className="col-start-1 col-span-full sm:col-span-2 mt-[.25em] text-2xl sm:text-3xl md:text-4xl lg:5xl xl:text-6xl leading-[1.1em] w-[70%] sm:w-[60%]">
            Creating Unique Uniform Solutions for Brand Identity
          </h1>
          <p className="col-start-1 sm:col-start-3 col-span-full sm:col-span-1 self-end text-sm sm:text-base md:text-lg lg:text-xl text-gray-500">
            Perfect Designs began by providing basic uniform solutions to the
            service industry in the UAE. We&apos;ve grown into a dynamic
            company, crafting unique identities for businesses that want to
            stand out and delight their guests and clients.
          </p>

          <div className="col-span-full md:col-span-1 bg-[#E7E7E7] p-[1em] sm:p-[2em]">
            <div className="text-3xl sm:text-4xl md:text-5xl p-[.5em] w-fit rounded-full border border-gray-300 flex items-center justify-center mb-[.8em]">
              <FaEye />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-[.4em]">
              Our Mission
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-6">
              To be the leading locally present uniforms differentiator in the
              U.A.E and grow dynamically alongside the Expo.
            </p>
          </div>

          <div className="col-span-full md:col-span-1 bg-[#E7E7E7] p-[1em] sm:p-[2em]">
            <div className="text-3xl sm:text-4xl md:text-5xl p-[.5em] w-fit rounded-full border border-gray-300 flex items-center justify-center mb-[.8em]">
              <FaBinoculars />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-[.4em]">
              Our Vision
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-6">
              To be a partner of choice for our clients and a trend setter for
              our competitors.
            </p>
          </div>

          <div className="col-span-full md:col-span-1 bg-[#E7E7E7] p-[1em] sm:p-[2em]">
            <div className="text-3xl sm:text-4xl md:text-5xl p-[.5em] w-fit rounded-full border border-gray-300 flex items-center justify-center mb-[.8em]">
              <FaHandshake />
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl mb-[.4em]">
              Our Value
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-6">
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
