// import { useState, useEffect } from 'react';

// export const useCarouselAutoplay = (totalSlides) => {
//   const [activeIndex, setActiveIndex] = useState(1);

//   useEffect(() => {
//     const nextSlide = () => {
//       setActiveIndex((prevIndex) => (prevIndex + 1) % totalSlides);
//     };

//     const autoplayTimer = setInterval(nextSlide, 1000);

//     return () => {
//       clearInterval(autoplayTimer);
//     };
//   }, [totalSlides]);

//   return activeIndex;
// };
