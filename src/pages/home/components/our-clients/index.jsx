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
    <Wrapper className="our-clients mt-[5vw] font-gilroy">
      <h1 className="text-center font-medium text-5xl mb-[.1em]">
        Our Clients
      </h1>
      <p className="font-light text-center text-xl text-gray-400 mb-[1.5em]">
        Proudly Serving These Esteemed Clients
      </p>

      <div className="marquee">
        <div className="marquee-group">
          <div className="image-group">
            <img src={Logo1} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo3} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo4} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo5} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo6} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo7} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo8} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo9} alt="client logo" />
          </div>
        </div>
        <div className="marquee-group">
          <div className="image-group">
            <img src={Logo1} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo3} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo4} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo5} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo6} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo7} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo8} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo9} alt="client logo" />
          </div>
        </div>
      </div>

      <div className="marquee">
        <div className="marquee-group">
          <div className="image-group">
            <img src={Logo1} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo3} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo4} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo5} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo6} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo7} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo8} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo9} alt="client logo" />
          </div>
        </div>
        <div className="marquee-group">
          <div className="image-group">
            <img src={Logo1} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo3} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo4} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo5} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo6} alt="client logo" />
          </div>
          <div className="image-group">
            <img src={Logo7} alt="client logo" />
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
