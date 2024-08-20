import Wrapper from "../../../../components/ui/wrapper";
import Logo1 from "../../../../assets/images/pd-img.jpg";

const NeedToKnow = () => {
  return (
    <Wrapper id="need-to-know" className="mt-[5vw] px-[10vw] font-roboto">
      <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 ">
        <div className="relative h-[400px] rounded-md shadow-lg">
          <div className="absolute inset-0 rounded-md bg-gradient-to-r from-blue-500 to-purple-500 opacity-75 blur-xl"></div>
          <img
            className="relative h-full w-full rounded-md"
            src={Logo1}
            alt="Design"
          />
        </div>

        <div className="w-[92%] lg:w-[62%] rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 p-1 shadow-xl">
          <div className="rounded-lg bg-white px-4 py-10 shadow-lg space-y-4">
            <h1 className="text-right mr-3 text-2xl font-medium text-[#FF9553] font-lucida-calligraphy">
              NEED TO KNOW
            </h1>
            <p className="text-sm text-start text-gray-500">
              PERFECT DESIGNS is your partner of choice for providing made to
              measure, high quality and picture perfect uniforms for your
              Ambassadors.
            </p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default NeedToKnow;
