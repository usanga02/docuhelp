import React, { useState, useEffect } from 'react';

type Props = {
  items: {
    title: string
    subtitle: string
    image: string
  }[]
}

const Scroller = ({ items }: Props) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setScrollPosition((prevScrollPosition) => {
        const newPosition = prevScrollPosition + 1;
        return newPosition >= items.length ? 0 : newPosition;
      });
    }, 1000); // Adjust the interval as needed

    return () => clearInterval(intervalId);
  }, [items.length]);

  useEffect(() => {
    const list = document.getElementById('scrollList');
    if (list) {
      list.scrollTo({
        top: scrollPosition * 100, // Adjust the scroll amount based on item height
        behavior: 'smooth',
      });
    }
  }, [scrollPosition]);

  return (
    <div className="relative overflow-hidden bg-gray-200 w-full h-64">
      <div className="scroll-list h-full overflow-y-auto" id="scrollList">
        {items.map((item, index) => (
          <div key={index} className="scroll-item flex items-center justify-center h-16 border my-20 border-gray-400">{item.title}</div>
        ))}
      </div>
    </div>
  );
};

export default Scroller;
