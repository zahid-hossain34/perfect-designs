import ConstructionImage1 from "../../../assets/images/construction-uniform-1.jpg";
import CorporateImage1 from "../../../assets/images/corporate-apparel-1.jpg";
import FashionImage1 from "../../../assets/images/fashion-uniform-1.jpg";
import FashionImage2 from "../../../assets/images/fashion-dress-1.jpg";
import HospitalImage1 from "../../../assets/images/hospital-uniform-1.jpg";
import RestaurantImage1 from "../../../assets/images/restaurant-uniform-1.jpg";
import CorporateImage2 from "../../../assets/images/corporate-uniform-2.jpg";

import Wrapper from "../../../components/ui/wrapper";

const Hero = () => {
  return (
    <Wrapper className="mt-[1vw] w-full flex flex-col-reverse lg:flex-row">
      <div className="mb-[-2.2vw] self-end mt-[4vw] xs:mt-[7vw] sm:mt-[4vw] lg:mt-0 h-full w-full lg:w-[75%] flex flex-col justify-end">
        <h2 className="mx-auto lg:mx-0 text-center lg:text-left font-oswald text-[3.3vw] md:text-[2.8vw] lg:text-[2vw] w-[80%] lg:w-[60%] leading-[1.2em] text-gray-500">
          <span className="relative after:content-[''] after:absolute after:bottom-[2px] after:left-0 after:h-[3px] md:after:h-[6px] after:w-full after:bg-orange-logo after:z-[-1]">
            Perfect Designs
          </span>{" "}
          is your partner of choice for providing made to measure, high quality
          and picture perfect uniforms for your Ambassadors.
        </h2>

        <div className="text-center lg:text-left text-[10vw] md:text-[9vw] lg:text-[8vw] font-anton-sc">
          <h1 className="mb-[-4vw]">DIFFERENTIATING</h1>
          <h1 className="">YOUR AMBASSADORS</h1>
        </div>
      </div>

      <div className="h-full relative w-full lg:w-[30%] flex gap-[4%]">
        <img
          className="hidden lg:block w-[40%] absolute left-[-44%]"
          src={CorporateImage2}
          alt=""
        />

        <div className="w-[40%] sm:w-[30%] md:w-[25%] lg:w-[50%]">
          <img
            className="w-full object-cover"
            src={FashionImage1}
            alt="Describing fashion apparel"
          />

          <div className="font-oswald tracking-wider text-[10px] sm:text-[12px] lg:text-sm">
            <div className="flex justify-between items-center border-b border-gray-200 py-[.5em] gap-2">
              <h1>01</h1>
              <h1>CORPORATE APPAREL</h1>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-[.5em] gap-2">
              <h1>02</h1>
              <h1>HEALTHCARE UNIFORMS</h1>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-[.5em] gap-2">
              <h1>03</h1>
              <h1>CONSTRUCTION UNIFORMS</h1>
            </div>
            <div className="flex justify-between items-center border-b border-gray-200 py-[.5em] gap-2">
              <h1>04</h1>
              <h1>RESTAURANT UNIFORMS</h1>
            </div>
          </div>
        </div>

        <div className="w-[60%] sm:w-[70%] md:w-[75%] lg:w-[50%] max-h-full flex flex-wrap lg:lex-col gap-[3%] sm:gap-[2%] lg:gap-[.8vw]">
          <img
            className="w-[25vw] sm:w-[20vw] md:w-[21vw] lg:w-full object-cover"
            src={ConstructionImage1}
            alt=""
          />
          <img
            className="w-[25vw] sm:w-[20vw] md:w-[21vw] lg:w-full object-cover"
            src={CorporateImage1}
            alt=""
          />
          <img
            className="w-[25vw] sm:w-[20vw] md:w-[21vw] lg:w-full object-cover"
            src={HospitalImage1}
            alt=""
          />
          <img
            className="w-[25vw] sm:w-[20vw] md:w-[21vw] lg:w-full object-cover"
            src={RestaurantImage1}
            alt=""
          />
          <img
            className="w-[25vw] sm:w-[20vw] md:w-[21vw] lg:w-full object-cover"
            src={FashionImage2}
            alt=""
          />
          <img
            className="lg:hidden w-[25vw] sm:w-[20vw] md:w-[21vw] lg:w-full object-cover"
            src={CorporateImage2}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
