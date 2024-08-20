import Wrapper from "../../../../components/ui/wrapper";

const MyAlterations = () => {
  return (
    <Wrapper id="services" className="mt-14 bg-black px-2 lg:px-16">
      <div className="flex flex-col items-center justify-center space-y-8 py-4 text-white">
        <h1 className="font-dancing-script text-5xl">My Alterations</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 32 32"
          style={{
            fill: "#FFAE5B", // Change color here
            transform: "rotate(45deg)", // Rotate the SVG
          }}
        >
          <g fill="#FFAE5B">
            <path d="M25.5 29c1.93 0 3.5-1.57 3.5-3.5S27.43 22 25.5 22S22 23.57 22 25.5s1.57 3.5 3.5 3.5m0-6c1.378 0 2.5 1.121 2.5 2.5S26.878 28 25.5 28S23 26.879 23 25.5s1.122-2.5 2.5-2.5" />
            <path d="M18.732 23.95c0 1.451.357 3.271.836 4.301C20.548 30.738 22.476 32 25.3 32c3.694 0 6.7-3.006 6.7-6.7c0-3.593-2.818-6.2-6.7-6.2c-4.413 0-5.853-2.371-5.91-2.469a.5.5 0 0 0-.07-.095L3.965.158A.5.5 0 0 0 3.1.5c0 9.651 6.436 14.715 11.135 18.411c2.513 1.977 4.497 3.537 4.497 5.039M4.144 1.811l14.412 15.372c.268.424 2.044 2.917 6.744 2.917c3.303 0 5.7 2.187 5.7 5.2c0 3.144-2.557 5.7-5.7 5.7c-2.405 0-3.976-1.02-4.813-3.144c-.366-.786-.755-2.423-.755-3.906c0-1.987-2.153-3.681-4.878-5.825c-4.317-3.396-10.152-7.985-10.71-16.314M3 25.5C3 27.43 4.57 29 6.5 29s3.5-1.57 3.5-3.5S8.43 22 6.5 22S3 23.57 3 25.5m6 0C9 26.879 7.878 28 6.5 28S4 26.879 4 25.5S5.122 23 6.5 23S9 24.121 9 25.5" />
            <path d="M20.634 15.471a.5.5 0 1 0 .674.738C24.843 12.989 28.9 8.294 28.9.5a.5.5 0 0 0-.865-.342l-10.92 11.646a.5.5 0 0 0 .73.684l10.014-10.68c-.426 6.63-4.046 10.766-7.225 13.663m-9.723 3.425a.498.498 0 1 0-.361-.931a16 16 0 0 0-.684.292c-.844.375-1.895.843-3.166.843c-3.882 0-6.7 2.607-6.7 6.2C0 28.994 3.006 32 6.7 32c2.824 0 4.752-1.262 5.719-3.722c.506-1.085.581-3.46.581-4.778c0-.269.762-.843 1.218-1.186c.421-.316.856-.644 1.156-.982a.5.5 0 0 0-.748-.664c-.234.265-.628.561-1.01.848C12.785 22.142 12 22.732 12 23.5c0 2.072-.182 3.701-.499 4.384C10.676 29.98 9.105 31 6.7 31A5.706 5.706 0 0 1 1 25.3c0-3.014 2.397-5.2 5.7-5.2c1.484 0 2.691-.538 3.573-.931c.228-.102.441-.196.638-.273" />
            <circle cx="16" cy="16.984" r=".806" />
          </g>
        </svg>
        <div className="flex w-full flex-col items-center justify-center space-y-10 border border-dashed border-[#FFAE5B] py-6 font-oswald">
          <div className="text-sm font-semibold lg:text-xl">
            <p>Machine Stitch</p>
          </div>
          <div className="flex items-center justify-between space-x-4 text-sm font-semibold lg:space-x-20 lg:text-xl">
            <p className="">Bow Tie</p>
            <p className="">Body Tightening</p>
            <p className="">Zipper Change</p>
          </div>
          <div className="flex items-center flex-col lg:flex-row space-y-6 lg:space-y-0 justify-between space-x-5 text-sm font-semibold lg:space-x-20 lg:text-xl">
            <div className="flex items-center space-x-6 lg:space-x-20">
              <p className="">Hand Stitch</p>
              <p className="">Waist Tightening</p>
            </div>
            <div className="flex items-center space-x-6 lg:space-x-20">
              <p className="">Sleeves Length Shortening</p>
              <p className="">Shoulder Shortening</p>
            </div>
          </div>
          <div className="text-sm font-semibold lg:text-xl">
            <p>Legs Tapering</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default MyAlterations;
