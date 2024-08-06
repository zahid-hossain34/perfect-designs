import Wrapper from "../../../../components/ui/wrapper";
import { FiArrowDownRight } from "react-icons/fi";

const MyAlterations = () => {
  return (
    <Wrapper className="bg-[#E7E7E7]">
      <div className="grid grid-cols-5 px-[1.5rem] py-[1rem] font-roboto sm:px-[4rem] sm:py-[3rem] xl:px-[8rem] xl:py-[6rem]">
        <div className="col-span-full col-start-1 flex h-full flex-col justify-between lg:pr-3 xl:col-span-2 xl:col-start-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl">
            Everything you need
          </h1>

          <h2 className="mt-[.5em] w-fit text-balance text-xl leading-5 sm:text-2xl">
            Top Services Requested by Customers
            <span className="ml-2 inline-block align-middle text-2xl sm:ml-3 sm:text-3xl md:text-4xl">
              <FiArrowDownRight />
            </span>
          </h2>
        </div>

        <div className="tex-base col-span-full col-start-1 mt-[1.5em] flex flex-wrap items-center gap-2 border-gray-500 sm:gap-4 sm:text-xl md:mt-[2em] lg:pl-2 lg:text-2xl xl:col-span-3 xl:col-start-3 xl:mt-0 xl:justify-end xl:border-l [&_div]:w-full [&_div]:text-nowrap [&_div]:rounded-full [&_div]:border [&_div]:border-gray-600 [&_div]:px-[1.2em] [&_div]:py-[.25em] sm:[&_div]:px-[2em] sm:[&_div]:py-[.5em] lg:[&_div]:w-[48%] xl:[&_div]:w-fit">
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
