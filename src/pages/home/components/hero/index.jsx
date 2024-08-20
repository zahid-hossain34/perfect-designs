import HeroSlider from "../../../../components/ui/hero-slider";
import Wrapper from "../../../../components/ui/wrapper";

const Hero = () => {
  return (
    <Wrapper
      id="home"
      className="relative mb-[4rem] h-[350px] lg:h-[100vh] w-full md:mb-[5vw] lg:mb-0 lg:flex-row"
    >
      <HeroSlider />
      <div className="absolute left-[50%] top-[50%] z-10 h-full w-full translate-x-[-50%] translate-y-[-50%] transform place-content-center bg-black text-center opacity-60">
        <div className="mb-10 md:mb-24">
          <h1 className="font-dancing-script text-[30px] md:text-[40px] lg:text-[60px] font-semibold text-[#ff9a35]">
            Perfect Desigins
          </h1>
          <h1 className="font-oswald text-[20px] md:text-[30px] lg:text-[40px] text-white">
            DIFFERENTIATING YOUR AMBASSADORS
          </h1>
        </div>
      </div>

     
    </Wrapper>
  );
};

export default Hero;
