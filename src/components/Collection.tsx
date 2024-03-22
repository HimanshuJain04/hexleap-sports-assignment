"use client";

import React, { useEffect, useRef } from "react";
import { Collection as data } from "@/constants/collections";
import CollectionCard from "@/components/CollectionCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CollectionProps {}

interface CardData {
  id: number;
  image: string;
  name: string;
  collection: string;
  destination: string;
  time: string;
  weekDay: string;
  month: string;
  date: number;
}

const Collection: React.FC<CollectionProps> = () => {
  const boxWidth = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    boxWidth.current = document.querySelector(".cardsBox");
  }, []);

  function prevButtonHandler() {
    if (boxWidth.current) {
      const width = boxWidth.current.clientWidth;
      if (boxWidth.current.scrollLeft - 250 >= 0) {
        boxWidth.current.scrollLeft -= 250;
      } else {
        boxWidth.current.scrollLeft = 0;
      }
    }
  }

  function nextButtonHandler() {
    if (boxWidth.current) {
      const width = boxWidth.current.clientWidth;
      boxWidth.current.scrollLeft += 250;
    }
  }

  return (
    <div className="bg-gradient-to-b relative w-full flex pt-[70px] pb-[50px] justify-center from-top-linear-light to-bottom-linear-light dark:from-top-linear-dark dark:to-bottom-linear-dark">
      <div className="flex md:relative justify-start w-11/12 md:w-10/12 gap-14 items-center flex-col">
        {/* heading and desc */}
        <div className="flex justify-center flex-col items-center gap-6 w-10/12">
          <p className="text-3xl sm:text-4xl md:text-5xl text-center font-bold text-black dark:text-white">
            Collection Spotlight
          </p>
          <p className="text-sm font-normal text-center text-black dark:text-white">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>

        {/* left arrow */}
        <button
          onClick={prevButtonHandler}
          className="border-[1px] left-0 absolute top-[55%] border-bg-button text-bg-button py-3 sm:py-4 px-2 sm:px-3"
        >
          <span>
            <FaChevronLeft />
          </span>
        </button>

        {/* cards */}
        <div className="cardsBox flex overflow-auto justify-between w-10/12 items-start gap-5 md:gap-10 scroll-smooth transition-transform duration-300">
          {data?.map((data: CardData) => (
            <CollectionCard key={data.id} data={data} />
          ))}
        </div>

        {/* right arrow */}
        <button
          onClick={nextButtonHandler}
          className="border-[1px] absolute top-[55%] right-0 border-bg-button text-bg-button py-3 sm:py-4 px-2 sm:px-3"
        >
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Collection;
