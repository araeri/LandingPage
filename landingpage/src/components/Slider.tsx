import React, { useEffect, useState } from 'react';

const images = [
  'https://imgscf.slidemembers.com/docs/1/1/418/women_s_sports_wear_google_slides_template_design_417141.jpg',
  'https://imgscf.slidemembers.com/docs/1/1/227/pearl_jewelry_google_slides_themes_templates_226682.jpg',
  'https://www.showeet.com/wp-content/uploads/iphone-turquoise-powerpoint-template.jpg',
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-64 sm:h-80 lg:h-96 overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-700"
      />
    </div>
  );
};

export default Slider;
