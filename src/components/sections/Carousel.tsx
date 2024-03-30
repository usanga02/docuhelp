import { useState, useEffect } from 'react';
import SlideComponent from '../slideComponent';
import { motion } from 'framer-motion';

type Props = {
  slides: {
    image: string
    title: string
    subtitle: string
  }[]
}

const Carousel = ({ slides }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (
    <>
      {slides.map((slide, index) => (
        index === currentSlide && (
          <motion.div
            initial={{ y: 550 }}
            animate={{ y: 0 }}
            exit={{ y: -550 }}
            transition={{ duration: 1, ease: 'backOut' }}
            key={index}>
            <SlideComponent image={slide.image} title={slide.title} subtitle={slide.subtitle} />
          </motion.div>
        )))}
    </>
  );
};

export default Carousel;
