import Wrapper from "../../../../components/ui/wrapper";
import "./index.css";

const PromotionalMarquee = () => {
  return (
    <Wrapper className="promotional-marquee mt-[8vw] text-nowrap font-medium uppercase sm:mt-[5vw] md:mt-8">
      <div className="marquee">
        <div className="marquee-group pl-[1em]">
          &bull; Perfect Designs - Where Uniforms Meet Perfection &bull;
          Experience the Best in Quality and Service
        </div>
        <div className="marquee-group pl-[1em]">
          &bull; Perfect Designs - Where Uniforms Meet Perfection &bull;
          Experience the Best in Quality and Service
        </div>
      </div>
    </Wrapper>
  );
};

export default PromotionalMarquee;
