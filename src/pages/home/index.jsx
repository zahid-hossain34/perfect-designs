import Navbar from "../../components/ui/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import OurClients from "./components/our-clients";
import PromotionalMarquee from "./components/promotional-marquee";
import ImageGallery from "./components/image-gallery";
import MyAlterations from "./components/my-alterations";
import Footer from "./components/footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <PromotionalMarquee />
      <MyAlterations />
      <ImageGallery />
      <OurClients />
      <Footer />
    </>
  );
};

export default Home;
