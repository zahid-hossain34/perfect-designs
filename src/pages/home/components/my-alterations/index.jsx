import Wrapper from "../../../../components/ui/wrapper";
import { FiArrowDownRight } from "react-icons/fi";

const MyAlterations = () => {
  return (
    <Wrapper className="bg-[#E7E7E7]">
      <div className="px-[1.5rem] py-[1rem] sm:px-[4rem] sm:py-[3rem] xl:px-[8rem] xl:py-[6rem] grid grid-cols-5 font-roboto">
        <div className="col-start-1 col-span-full xl:col-start-1 xl:col-span-2 h-full flex flex-col justify-between lg:pr-3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            Everything you need
          </h1>

          <h2 className="w-fit mt-[.5em] leading-5 text-xl sm:text-2xl text-balance">
            Top Services Requested by Customers
            <span className="ml-2 sm:ml-3 inline-block align-middle text-2xl sm:text-3xl md:text-4xl">
              <FiArrowDownRight />
            </span>
          </h2>
        </div>

        <div className="mt-[1.5em] md:mt-[2em] xl:mt-0 lg:pl-2 col-start-1 col-span-full xl:col-start-3 xl:col-span-3 flex flex-wrap xl:justify-end items-center gap-2 sm:gap-4 tex-base sm:text-xl lg:text-2xl xl:border-l border-gray-500 [&_div]:w-full lg:[&_div]:w-[48%] xl:[&_div]:w-fit [&_div]:px-[1.2em] sm:[&_div]:px-[2em] [&_div]:py-[.25em] sm:[&_div]:py-[.5em] [&_div]:rounded-full [&_div]:border [&_div]:border-gray-600 [&_div]:text-nowrap">
          <div>Machine Stitch</div>
          <div>Bow Tie</div>
          <div>Body Tightening</div>
          <div> Zipper Change</div>
          <div>Hand Stitch</div>
          <div>Waist Tightening</div>
          <div>Sleeves Length Shortening</div>
          <div>Shoulder Shortening</div>
          <div>Legs Tapering</div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyAlterations;
