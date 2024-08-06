import ConstructionImage1 from "../../../../assets/images/construction-uniform-1.jpg";
import CorporateImage1 from "../../../../assets/images/corporate-apparel-1.jpg";
import FashionImage1 from "../../../../assets/images/fashion-uniform-1.jpg";
import FashionImage2 from "../../../../assets/images/fashion-dress-1.jpg";
import HospitalImage1 from "../../../../assets/images/hospital-uniform-1.jpg";
import RestaurantImage1 from "../../../../assets/images/restaurant-uniform-1.jpg";
import CorporateImage2 from "../../../../assets/images/corporate-uniform-2.jpg";

import Wrapper from "../../../../components/ui/wrapper";

const Hero = () => {
  return (
    <Wrapper
      id="home"
      className="mb-[4rem] mt-[1vw] flex flex-col-reverse md:mb-[5vw] lg:mb-0 lg:flex-row"
    >
      <div className="mb-[-2.2vw] mt-[4vw] flex h-full w-full flex-col justify-end self-end xs:mt-[7vw] sm:mt-[4vw] lg:mt-0 lg:w-[75%]">
        <h2 className="mx-auto w-[80%] text-center font-roboto text-[3.5vw] font-light leading-[1.2em] text-gray-400 md:text-[3vw] lg:mx-0 lg:w-[60%] lg:text-left lg:text-[2.5vw]">
          <span className="relative font-normal text-black after:z-[-1]">
            Perfect Designs
          </span>{" "}
          is your partner of choice for providing made to measure, high quality
          and picture perfect uniforms for your Ambassadors.
        </h2>

        <div className="text-center font-anton-sc text-[10vw] md:text-[9vw] lg:text-left lg:text-[8vw]">
          <h1 className="mb-[-4vw]">DIFFERENTIATING</h1>
          <h1 className="">YOUR AMBASSADORS</h1>
        </div>
      </div>

      <div className="relative flex h-full w-full gap-[4%] lg:w-[30%]">
        <img
          loading="lazy"
          className="absolute left-[-44%] hidden w-[40%] lg:block"
          src={CorporateImage2}
          alt=""
        />

        <div className="w-[40%] sm:w-[30%] md:w-[25%] lg:w-[50%]">
          <img
            loading="lazy"
            className="w-full object-cover"
            src={FashionImage1}
            alt="Describing fashion apparel"
          />

          <div className="font-oswald text-[10px] tracking-wider sm:text-[12px] lg:text-sm">
            <div className="flex items-center justify-between gap-2 border-b border-gray-200 py-[.5em]">
              <h1>01</h1>
              <h1>CORPORATE APPAREL</h1>
            </div>
            <div className="flex items-center justify-between gap-2 border-b border-gray-200 py-[.5em]">
              <h1>02</h1>
              <h1>HEALTHCARE UNIFORMS</h1>
            </div>
            <div className="flex items-center justify-between gap-2 border-b border-gray-200 py-[.5em]">
              <h1>03</h1>
              <h1>CONSTRUCTION UNIFORMS</h1>
            </div>
            <div className="flex items-center justify-between gap-2 border-b border-gray-200 py-[.5em]">
              <h1>04</h1>
              <h1>RESTAURANT UNIFORMS</h1>
            </div>
          </div>
        </div>

        <div className="lg:lex-col flex max-h-full w-[60%] flex-wrap gap-[3%] sm:w-[70%] sm:gap-[2%] md:w-[75%] lg:w-[50%] lg:gap-[.8vw]">
          <img
            loading="lazy"
            className="w-[25vw] object-cover sm:w-[20vw] md:w-[21vw] lg:w-full"
            src={ConstructionImage1}
            alt=""
          />
          <img
            loading="lazy"
            className="w-[25vw] object-cover sm:w-[20vw] md:w-[21vw] lg:w-full"
            src={CorporateImage1}
            alt=""
          />
          <img
            loading="lazy"
            className="w-[25vw] object-cover sm:w-[20vw] md:w-[21vw] lg:w-full"
            src={HospitalImage1}
            alt=""
          />
          <img
            loading="lazy"
            className="w-[25vw] object-cover sm:w-[20vw] md:w-[21vw] lg:w-full"
            src={RestaurantImage1}
            alt=""
          />
          <img
            loading="lazy"
            className="w-[25vw] object-cover sm:w-[20vw] md:w-[21vw] lg:w-full"
            src={FashionImage2}
            alt=""
          />
          <img
            loading="lazy"
            className="w-[25vw] object-cover sm:w-[20vw] md:w-[21vw] lg:hidden lg:w-full"
            src={CorporateImage2}
            alt=""
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Hero;
