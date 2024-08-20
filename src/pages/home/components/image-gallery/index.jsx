import "./index.css";
import React from "react";

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

import Wrapper from "../../../../components/ui/wrapper";
const imagesData = {
  all: [
    { id: 1, category: "hospitality uniforms", imgSrc: Image1, layout: "tall" },
    { id: 2, category: "restaurant uniforms", imgSrc: Image2, layout: "tall" },
    { id: 3, category: "healthcare uniforms", imgSrc: Image3, layout: "wide" },
    { id: 4, category: "hospitality uniforms", imgSrc: Image4, layout: "tall" },
    { id: 5, category: "construction uniform", imgSrc: Image5, layout: "tall" },
    { id: 6, category: "corporate apparel", imgSrc: Image6, layout: "big" },
    { id: 7, category: "restaurant uniforms", imgSrc: Image7, layout: "wide" },
    { id: 8, category: "hospitality uniforms", imgSrc: Image8, layout: "tall" },
    { id: 9, category: "healthcare uniforms", imgSrc: Image9, layout: "tall" },
    {
      id: 10,
      category: "healthcare uniforms",
      imgSrc: Image10,
      layout: "wide",
    },
    {
      id: 11,
      category: "healthcare uniforms",
      imgSrc: Image11,
      layout: "tall",
    },
    { id: 12, category: "healthcare uniforms", imgSrc: Image12, layout: "big" },
    {
      id: 14,
      category: "restaurant uniforms",
      imgSrc: Image14,
      layout: "wide",
    },
    {
      id: 15,
      category: "construction uniform",
      imgSrc: Image15,
      layout: "big",
    },
    {
      id: 16,
      category: "restaurant uniforms",
      imgSrc: Image16,
      layout: "tall",
    },
    { id: 17, category: "corporate apparel", imgSrc: Image17, layout: "big" },
    { id: 18, category: "corporate apparel", imgSrc: Image18, layout: "wide" },
    { id: 19, category: "corporate apparel", imgSrc: Image19, layout: "tall" },
  ],
  hospitality: [
    { id: 1, category: "hospitality uniforms", imgSrc: Image1, layout: "big" },
    { id: 8, category: "hospitality uniforms", imgSrc: Image8, layout: "wide" },
    { id: 4, category: "hospitality uniforms", imgSrc: Image4, layout: "big" },
  ],
  restaurant: [
    { id: 2, category: "restaurant uniforms", imgSrc: Image2, layout: "wide" },
    { id: 7, category: "restaurant uniforms", imgSrc: Image7, layout: "big" },
    {
      id: 14,
      category: "restaurant uniforms",
      imgSrc: Image14,
      layout: "wide",
    },
  ],
  healthcare: [
    { id: 3, category: "healthcare uniforms", imgSrc: Image3, layout: "wide" },
    { id: 9, category: "healthcare uniforms", imgSrc: Image9, layout: "tall" },
    {
      id: 10,
      category: "healthcare uniforms",
      imgSrc: Image10,
      layout: "tall",
    },
    {
      id: 11,
      category: "healthcare uniforms",
      imgSrc: Image11,
      layout: "wide",
    },
    { id: 12, category: "healthcare uniforms", imgSrc: Image12, layout: "big" },
  ],
  construction: [
    { id: 5, category: "construction uniform", imgSrc: Image5, layout: "tall" },
    {
      id: 15,
      category: "construction uniform",
      imgSrc: Image15,
      layout: "big",
    },
    {
      id: 16,
      category: "construction uniform",
      imgSrc: Image16,
      layout: "wide",
    },
  ],
  corporate: [
    { id: 6, category: "corporate apparel", imgSrc: Image6, layout: "big" },
    { id: 17, category: "corporate apparel", imgSrc: Image17, layout: "tall" },
    { id: 18, category: "corporate apparel", imgSrc: Image18, layout: "tall" },
    { id: 19, category: "corporate apparel", imgSrc: Image19, layout: "big" },
  ],
};

const categoryNames = {
  all: "All",
  hospitality: "Hospitality Uniforms",
  restaurant: "Restaurant Uniforms",
  healthcare: "Healthcare Uniforms",
  construction: "Construction Uniform",
  corporate: "Corporate Apparel",
};

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [isTransitioning, setIsTransitioning] = React.useState(false);

  const handleCategoryChange = (category) => {
    setIsTransitioning(true); // Start the transition
    setTimeout(() => {
      setSelectedCategory(category);
      setIsTransitioning(false); // End the transition after new items are loaded
    }, 300); // Match the delay to your CSS transition duration
  };
  return (
    <Wrapper className="min-h-screen px-8 lg:px-16 space-y-8 bg-black pt-10 pb-24 sm:pt-24 md:pt-20">
      <div className="flex flex-wrap justify-center gap-4 space-x-4">
        {Object.keys(imagesData).map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`rounded-full px-2 py-1 font-allerta text-sm ${
              selectedCategory === category
                ? "bg-[#F3A850] text-white"
                : "text-white"
            }`}
          >
            {categoryNames[category].toUpperCase()}
          </button>
        ))}
      </div>

      <div className={`masonry ${isTransitioning ? "fade-out" : "fade-in"}`}>
        {imagesData[selectedCategory].map((image) => (
          <div key={image.id} className={image.layout}>
            <img loading="lazy" src={image.imgSrc} alt={image.category} />
            <p>{image.category}</p>
          </div>
        ))}
      </div>
    </Wrapper>
  );
};

export default ImageGallery;
