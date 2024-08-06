import { useState } from "react";

import Navbar from "../../components/ui/navbar";
import Hero from "./components/hero";
import AboutUs from "./components/about-us";
import OurClients from "./components/our-clients";
import PromotionalMarquee from "./components/promotional-marquee";
import ImageGallery from "./components/image-gallery";
import MyAlterations from "./components/my-alterations";
import Footer from "./components/footer";

const Home = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <>
      <Navbar
        isMobileNavOpen={isMobileNavOpen}
        setIsMobileNavOpen={setIsMobileNavOpen}
      />
      <Hero />
      <AboutUs />
      <PromotionalMarquee />
      <MyAlterations />
      <ImageGallery />
      <OurClients />
      <Footer />

      {isMobileNavOpen && (
        <div className="fixed left-0 top-0 z-[9] h-screen w-screen bg-black opacity-30"></div>
      )}
    </>
  );
};

export default Home;
