import "./index.css";

import Image1 from "../../../../assets/images/gallery-images/01.jpg";
import Image2 from "../../../../assets/images/gallery-images/02.jpg";
import Image3 from "../../../../assets/images/gallery-images/03.png";
import Image4 from "../../../../assets/images/gallery-images/04.jpg";
import Image5 from "../../../../assets/images/gallery-images/05.jpg";
import Image6 from "../../../../assets/images/gallery-images/06.jpg";
import Image7 from "../../../../assets/images/gallery-images/07.jpg";
import Image8 from "../../../../assets/images/gallery-images/08.jpg";
import Image9 from "../../../../assets/images/gallery-images/09.jpg";
import Image10 from "../../../../assets/images/gallery-images/10.jpg";
import Image11 from "../../../../assets/images/gallery-images/11.jpg";
import Image12 from "../../../../assets/images/gallery-images/12.jpg";
import Image14 from "../../../../assets/images/gallery-images/14.jpg";
import Image15 from "../../../../assets/images/gallery-images/15.jpg";
import Image16 from "../../../../assets/images/gallery-images/16.jpg";
import Image17 from "../../../../assets/images/gallery-images/17.jpg";
import Image18 from "../../../../assets/images/gallery-images/18.jpg";
import Image19 from "../../../../assets/images/gallery-images/19.jpg";
import Image20 from "../../../../assets/images/gallery-images/20.jpg";

import Wrapper from "../../../../components/ui/wrapper";

const ImageGallery = () => {
  return (
    <Wrapper className="min-h-screen mt-16 sm:mt-24 md:mt-32">
      <div className="masonry">
        <div className="tall">
          <img src={Image1} alt="collection" />
          <p>Hospitality Uniform</p>
        </div>

        <div className="tall">
          <img src={Image2} alt="collection" />
          <p>Hospitality Uniform</p>
        </div>

        <div className="wide black-text">
          <img src={Image3} alt="collection" />
          <p>Hospitality Uniform</p>
        </div>

        <div className="tall">
          <img src={Image4} alt="collection" />
          <p>Hospitality Uniform</p>
        </div>

        <div className="tall">
          <img src={Image5} alt="collection" />
          <p>Restaurant Uniform</p>
        </div>

        <div className="big">
          <img src={Image6} alt="collection" />
          <p>Restaurant Uniform</p>
        </div>

        <div className="wide">
          <img src={Image7} alt="collection" />
          <p>Restaurant Uniform</p>
        </div>

        <div className="tall">
          <img src={Image8} alt="collection" />
          <p>Restaurant Uniform</p>
        </div>

        <div className="tall">
          <img src={Image9} alt="collection" />
          <p>Healthcare Uniform</p>
        </div>

        <div className="wide">
          <img src={Image10} alt="collection" />
          <p>Healthcare Uniform</p>
        </div>

        <div className="wide">
          <img src={Image11} alt="collection" />
          <p>Healthcare Uniform</p>
        </div>

        <div className="big">
          <img src={Image12} alt="collection" />
          <p>Healthcare Uniform</p>
        </div>

        <div className="wide">
          <img src={Image14} alt="collection" />
          <p>Construction Uniform</p>
        </div>

        <div className="big">
          <img src={Image15} alt="collection" />
          <p>Construction Uniform</p>
        </div>

        <div className="wide">
          <img src={Image16} alt="collection" />
          <p>Construction Uniform</p>
        </div>

        <div className="tall">
          <img src={Image17} alt="collection" />
          <p>Corporate Uniform</p>
        </div>

        <div className="tall">
          <img src={Image18} alt="collection" />
          <p>Corporate Uniform</p>
        </div>

        <div className="big">
          <img src={Image19} alt="collection" />
          <p>Corporate Uniform</p>
        </div>

        <div className="tall">
          <img src={Image20} alt="collection" />
          <p>Corporate Uniform</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ImageGallery;
