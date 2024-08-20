import Wrapper from "../../../../components/ui/wrapper";
import {
  FaBinoculars,
  FaEye,
  FaHandshake,
  FaQuoteLeft,
  FaQuoteRight,
} from "react-icons/fa";
import bgImg from "../../../../assets/images/construction-uniform-1.jpg";
import "./index.css";

const AboutUs = () => {
  return (
    <Wrapper
      id="about-us"
      className="mt-24 flex min-h-screen items-center justify-center font-roboto"
    >
      <div className="relative">
        <div
          className="parallax-bg absolute left-0 top-0 -z-10 h-full w-full"
          style={{ backgroundImage: `url(${bgImg})` }}
        />
        <div className="parallax-content relative flex flex-col items-center justify-center space-y-4 p-20 text-center lg:space-y-8">
          <p className="relative font-lucida-calligraphy text-2xl font-bold text-[#FFAE5B] sm:text-3xl md:text-4xl lg:text-5xl">
            ABOUT US
          </p>
          <div className="h-[5px] w-[100px] bg-[#FFAE5B] lg:w-[140px]"></div>
        </div>

        <div className="space-y-16 bg-white px-4 pt-10 lg:px-16">
          <div className="flex flex-col space-y-4 lg:flex-row lg:space-x-44 lg:space-y-0">
            <div className="">
              <FaQuoteLeft className="text-[#FFAE5B]" size={50} />
            </div>
            <p className="px-16 pt-3 text-xs leading-loose text-gray-700 lg:ml-4 lg:px-0 lg:pt-16 lg:text-lg">
              Perfect Designs started as a company providing a basic uniforms
              solution to the service industry in UAE. From our humble
              beginnings, we are now developing into a fast-paced, dynamic
              company creating identities for all companies that want to
              differentiate themselves and have happy ambassadors for the
              <span className="text-[#FFAE5B]"> PERFECT DELIGHT </span>
              to their important guests and clients.
            </p>
            <div className="flex justify-end items-end lg:items-start ">
              <FaQuoteRight className="text-[#FFAE5B]" size={50} />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            <div className="space-y-8 rounded-lg bg-slate-50 p-6 shadow-lg hover:shadow-none">
              <div className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-teal-400 p-4 text-5xl text-white">
                <FaEye />
              </div>
              <h1 className="mb-2 text-center font-lucida-calligraphy text-2xl font-semibold text-[#FFAE5B]">
                Our Mission
              </h1>
              <p className="text-center text-gray-600">
                To be the leading locally present uniforms differentiator in the
                U.A.E and grow dynamically alongside the Expo.
              </p>
            </div>

            <div className="space-y-8 rounded-lg bg-slate-50 p-6 shadow-lg hover:shadow-none">
              <div className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-4 text-5xl text-white">
                <FaBinoculars />
              </div>
              <h1 className="mb-2 text-center font-lucida-calligraphy text-2xl font-semibold text-[#FFAE5B]">
                Our Vision
              </h1>
              <p className="text-center text-gray-600">
                To be a partner of choice for our clients and a trend setter for
                our competitors.
              </p>
            </div>

            <div className="space-y-8 rounded-lg bg-slate-50 p-6 shadow-lg hover:shadow-none">
              <div className="mb-4 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-yellow-400 p-4 text-5xl text-white">
                <FaHandshake />
              </div>
              <h1 className="mb-2 text-center font-lucida-calligraphy text-2xl font-semibold text-[#FFAE5B]">
                Our Value
              </h1>
              <p className="text-center text-gray-600">
                Solution Oriented organization, that provides suggestions at all
                steps to better the life of your precious uniforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default AboutUs;
