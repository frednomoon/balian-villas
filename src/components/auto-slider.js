import images from '../images/images.json';
import { useState, useEffect } from 'react';

const AutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);
  return (
    <div className="flex justify-center h-[90vh]">
      <div
        style={{ backgroundImage: `url(${images[currentIndex].src})` }}
        className="w-full h-full bg-center bg-cover duration-1000"
      ></div>
    </div>
  );
};

export default AutoSlider;