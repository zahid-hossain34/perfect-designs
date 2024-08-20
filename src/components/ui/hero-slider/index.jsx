import { Swiper, SwiperSlide } from "swiper/react";
import ConstructionImage1 from "../../../assets/images/construction-uniform-1.jpg";
import CorporateImage1 from "../../../assets/images/corporate-apparel-1.jpg";
import FashionImage1 from "../../../assets/images/fashion-uniform-1.jpg";
import FashionImage2 from "../../../assets/images/fashion-dress-1.jpg";
import HospitalImage1 from "../../../assets/images/hospital-uniform-1.jpg";
import RestaurantImage1 from "../../../assets/images/restaurant-uniform-1.jpg";
import CorporateImage2 from "../../../assets/images/corporate-uniform-2.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'swiper/css/effect-fade';
import './hero-slider.css'

// import required modules
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

const sliderImages = [
  ConstructionImage1,
  CorporateImage1,
  FashionImage1,
  FashionImage2,
  HospitalImage1,
  RestaurantImage1,
  CorporateImage2,
];

export default function HeroSlider() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 3500,
        }}
        loop={true}
        effect={'fade'}
        modules={[Autoplay, Pagination, EffectFade]}
        className="heroSwiper"
      >
        {sliderImages.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
