import Wrapper from "../../../components/ui/wrapper";

const Hero = () => {
  return (
    <Wrapper className="mt-[-90px] h-screen flex bg-red-50">
      <div className="h-full bg-blue-50 w-[70%] flex flex-col justify-end font-black font-anton-sc">
        <h2>PERFECT DESIGN</h2>
        <div className="text-[7vw] leading-[70px] tracking-[-.1em]">
          <h1>DIFFERENTIATING</h1>
          <h1>Base</h1>
        </div>
      </div>

      <div>Right section</div>
    </Wrapper>
  );
};

export default Hero;
