import React from "react";
import Image from "next/image";

interface ads {
  id: number;
  image: string;
  title: string;
  description: string;
}

const AdsCard = (props: any) => {
  const data: ads = props.data;

  return (
    <div className="p-2 bg-bg-card-dark flex flex-col gap-5 w-[237px] h-[511px] overflow-hidden">
      {/* team image */}
      <div className="overflow-hidden bg-black w-[217px] h-[218px]">
        <Image
          src={data?.image}
          alt="ads-image"
          width={217}
          height={218}
          className="object-cover h-full w-full"
        />
      </div>

      {/* details */}
      <div className="p-2 flex flex-col items-center  gap-2">
        {/* title of ads */}
        <p className="font-semibold text-white text-xl">{data.title}</p>

        {/* description */}
        <p className="text-text-card-dark px-2 text-sm font-normal">
          {data.description}
        </p>
      </div>
    </div>
  );
};

export default AdsCard;
