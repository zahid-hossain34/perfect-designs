import Wrapper from "../../../../components/ui/wrapper";
import "./index.css";

const PromotionalMarquee = () => {
  return (
    <Wrapper className="promotional-marquee font-medium text-nowrap uppercase mt-[8vw] sm:mt-[5vw] md:mt-0">
      <div className="marquee">
        <div className="marquee-group pl-[1em]">
          ✨ Perfect Designs - Where Uniforms Meet Perfection! ✨ Experience the
          Best in Quality and Service.
        </div>
        <div className="marquee-group pl-[1em]">
          ✨ Perfect Designs - Where Uniforms Meet Perfection! ✨ Experience the
          Best in Quality and Service.
        </div>
      </div>
    </Wrapper>
  );
};

export default PromotionalMarquee;
