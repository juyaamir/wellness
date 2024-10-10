import React, { useEffect, useState } from 'react'

interface SliderProps {
    images: string[];
}
const ImageSlider: React.FC<SliderProps> = ({images})=> {
  const [currentIndex, setCurrentIndex] = useState(0);
  const homeSlider = {
    width: '100%',
/*     maxWidth: '1200px', */
    height: '380px',
 /*    boxShadow: '10px 10px 1px red, -10px -10px 1px yellow, 10px -10px 1px green, -10px 10px 1px blue' */
    
  };

  const imageSlider = {
    width: '100%',
    height: '100%',
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',  


  };
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length  - 1 ? 0 : prevIndex + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div style={homeSlider}>
      <div style={imageSlider}>

      </div>
    </div>
  )
}

export default ImageSlider