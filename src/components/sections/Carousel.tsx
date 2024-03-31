import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import SlideComponent from '../slideComponent';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  slides: {
    image: string
    title: string
    subtitle: string
  }[]
  currentSlide: number
  setCurrentSlide: Dispatch<SetStateAction<number>>
}

const Carousel = ({ slides, currentSlide, setCurrentSlide }: Props) => {

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  //   }, 3000);
  //
  //   return () => clearInterval(intervalId);
  // }, [currentSlide]);

  return (
    <>
      <AnimatePresence mode='popLayout'>
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              initial={{ y: 550 }}
              animate={{ y: 0 }}
              exit={{ y: -600, z: -10 }}
              transition={{ duration: 1, ease: 'backOut' }}
              key={index}>
              <SlideComponent {...slide} />
            </motion.div>
          )
          // : index === currentSlide + 1) && <SlideComponent {...slide} />
        ))}
      </AnimatePresence>
    </>
  );
};

export default Carousel;
