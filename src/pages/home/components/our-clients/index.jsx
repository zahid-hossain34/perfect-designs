import "./index.css";

import Wrapper from "../../../../components/ui/wrapper";

import Logo1 from "../../../../assets/images/logo1.png";
import Logo3 from "../../../../assets/images/logo3.png";
import Logo4 from "../../../../assets/images/logo4.png";
import Logo5 from "../../../../assets/images/logo5.png";
import Logo6 from "../../../../assets/images/logo6.png";
import Logo7 from "../../../../assets/images/logo7.png";
import Logo8 from "../../../../assets/images/logo8.png";
import Logo9 from "../../../../assets/images/logo9.png";

const OurClients = () => {
  return (
    <Wrapper id="clients" className="our-clients mt-[5vw] font-roboto">
      <h1 className="mb-[.1em] text-center text-2xl font-lucida-calligraphy font-medium sm:text-4xl md:text-5xl">
        Our Clients
      </h1>
      <p className="mb-[1.5em] text-center text-sm font-normal leading-4 text-gray-500 sm:text-lg md:text-xl">
        Proudly Serving These Esteemed Clients
      </p>

      <div className="marquee">
        <div className="marquee-group">
          <div className="image-group">
            <img loading="lazy" src={Logo1} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo3} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo4} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo5} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo6} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo7} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo8} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo9} alt="client logo" />
          </div>
        </div>
        <div className="marquee-group">
          <div className="image-group">
            <img loading="lazy" src={Logo1} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo3} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo4} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo5} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo6} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo7} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo8} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo9} alt="client logo" />
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-group">
          <div className="image-group">
            <img loading="lazy" src={Logo1} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo3} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo4} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo5} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo6} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo7} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo8} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo9} alt="client logo" />
          </div>
        </div>
        <div className="marquee-group">
          <div className="image-group">
            <img loading="lazy" src={Logo1} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo3} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo4} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo5} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo6} alt="client logo" />
          </div>
          <div className="image-group">
            <img loading="lazy" src={Logo7} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo8} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo9} alt="client logo" />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default OurClients;
