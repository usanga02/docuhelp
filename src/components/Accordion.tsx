import React, { useState } from "react";
import { cn } from "../libs/utils";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons'

type Props = {
  data: { title: string; message: string }[];
};

const Accordion = ({ data }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number>(-1);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? -1 : index);
  };

  return (
    <div className="mx-auto w-full max-w-2xl text-lg">
      {data.map((data, index) => {
        return (
          <div
            key={index}
            className={cn("mb-8 rounded-xl p-[1px] border-2 border-secondary")}
          >
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className="cursor-pointer rounded-md bg-primary px-5 py-3 md:p-10 md:py-8"
            >
              <div className="flex items-center justify-between">
                <div className="w-5/6 font-bold text-3xl">
                  {data.title}
                </div>
                <div className="text-3xl">
                  {activeIndex === index ? <FontAwesomeIcon icon={faChevronDown} /> : <FontAwesomeIcon icon={faChevronUp} />}
                </div>
              </div>
              {activeIndex === index && (
                <p className="mt-3 w-5/6 text-lg font-semibold">{data.message}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
