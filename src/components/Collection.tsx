import React from "react";
import { Collection as data } from "@/constants/collections";
import CollectionCard from "@/components/CollectionCard";

const Collection = () => {
  return (
    <div className="bg-gradient-to-t w-full flex pt-[70px] pb-[50px] justify-center from-top-linear-dark to-bottom-linear-dark">
      <div className=" flex justify-start w-10/12 gap-14  items-center flex-col">
        {/* heading and desc */}
        <div className=" flex justify-center flex-col items-center gap-6 w-10/12">
          <p className="text-5xl font-bold text-white">Collection Spotlight</p>
          <p className=" text-sm font-normal text-center text-white">
            Discover extraordinary moments with our Spotlight Collection
            metatickets—exclusive access to premium events for an unforgettable
            experience. Grab yours today!
          </p>
        </div>

        {/* cards */}
        <div className="">
          <div className="flex justify-start items-start gap-5">
            {data?.map((data) => (
              <CollectionCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
