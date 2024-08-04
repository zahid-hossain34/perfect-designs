import Navbar from "../../components/ui/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import OurClients from "./components/our-clients";
import PromotionalMarquee from "./components/promotional-marquee";
import MyAlterations from "./components/my-alterations";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutUs />
      <PromotionalMarquee />
      <MyAlterations />
      <OurClients />
    </>
  );
};

export default Home;
