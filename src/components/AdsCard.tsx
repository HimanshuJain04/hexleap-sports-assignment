import React from "react";
import Image from "next/image";
import { Ads as data } from "@/constants/ads";

// interface AdsProps {
//   data: {
//     id: number;
//     image: string;
//     title: string;
//     description: string;
//   };
// }

const AdsCard: React.FC = () => {
  return (
    <div className="p-2 shrink-0 dark:bg-bg-card-dark shadow-xl shadow-black/[0.10] bg-bg-card-light flex flex-col gap-5 w-[237px] h-[511px] overflow-hidden">
      {/* team image */}
      <div className="overflow-hidden dark:bg-black bg-white w-full h-[218px] relative">
        <Image
          src={data?.image}
          alt="ads-image"
          width={217}
          height={218}
          className="object-cover h-full w-full"
        />

        <span className="bg-black  absolute z-10 top-0 right-0  text-white px-[15px] py-[3px] font-bold text-xs">
          Ad
        </span>
      </div>

      {/* details */}
      <div className="p-2 flex flex-col items-center  gap-2">
        {/* title of ads */}
        <p className="font-semibold text-ads-title dark:text-white text-xl">
          {data.title}
        </p>

        {/* description */}
        <p className="dark:text-text-card-dark text-card-light-desc px-2 text-[13px] font-normal">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default AdsCard;
