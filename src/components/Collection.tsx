import React from "react";
import { Collection as data } from "@/constants/collections";
import CollectionCard from "@/components/CollectionCard";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

const Collection = () => {
  return (
    <div className="bg-gradient-to-b w-full flex pt-[70px] pb-[50px] justify-center from-top-linear-light to-bottom-linear-light dark:from-top-linear-dark dark:to-bottom-linear-dark">
      <div className=" flex relative justify-start w-10/12 gap-14  items-center flex-col">
        {/* heading and desc */}
        <div className=" flex justify-center flex-col items-center gap-6 w-10/12">
          <p className="text-5xl font-bold text-black dark:text-white">
            Collection Spotlight
          </p>
          <p className=" text-sm font-normal text-center text-black dark:text-white">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>

        {/* left arrow */}
        <button className="border-[1px] left-0 absolute top-[55%] border-bg-button text-bg-button py-4 px-3">
          <span>
            <FaChevronLeft />
          </span>
        </button>

        {/* cards */}
        <div className=" w-10/12">
          <div className="flex justify-between w-full items-start gap-5">
            {data?.map((data) => (
              <CollectionCard key={data.id} data={data} />
            ))}
          </div>
        </div>

        {/* right arrow */}
        <button className="border-[1px] absolute top-[55%] right-0 border-bg-button text-bg-button py-4 px-3">
          <span>
            <FaChevronRight />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Collection;
