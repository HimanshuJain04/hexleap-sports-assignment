import React from "react";
import Image from "next/image";

interface collection {
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

const CollectionCard = (props: any) => {
  const data: collection = props.data;
  return (
    <div className="px-4 pt-4 pb-2 bg-white shadow-lg shadow-black/[0.10] dark:bg-bg-card-dark w-[257px] h-[625] overflow-hidden">
      {/* image */}
      <div className="overflow-hidden bg-white w-[225] h-[400px]">
        <Image
          src={data?.image}
          alt="team-image"
          width={225}
          height={400}
          className="object-cover h-full w-full"
        />
      </div>

      {/* dashed line */}
      <div className="w-full my-5 border-t-2 px-4 border-dashed border-card-dots-light bg:border-card-dots-dark relative">
        <div className="w-[20px] h-[20px] rounded-full absolute top-[-10px] left-[-25px] dark:bg-bottom-linear-dark bg-[#EDF1F7]"></div>
        <div className="w-[20px] h-[20px] rounded-full absolute top-[-10px] right-[-25px] dark:bg-bottom-linear-dark bg-[#EDF1F7]"></div>
      </div>

      {/* description */}
      <div className="w-full gap-3 flex justify-center items-center flex-col">
        {/* name */}
        <div>
          <p className="text-lg text-center font-medium text-black dark:text-white">
            {data.name}
          </p>
        </div>

        {/* date, etc */}
        <div className="flex text-xs  gap-3 font-medium text-black dark:text-white items-center">
          <span className="flex gap-1 border-r-2 border-black dark:border-white pr-3">
            <p className="uppercase">{data.month}</p>
            <p>{data.date}</p>
          </span>

          <span className="uppercase border-r-2 border-black dark:border-white pr-3">
            <p>{data.weekDay}</p>
          </span>

          <span>
            <p>{data.time}</p>
          </span>
        </div>

        <div className="text-center text-sm card-light-desc dark:text-white">
          <p>{data.destination}</p>
        </div>

        <div className="bg-black w-full flex justify-center py-3 text-white text-sm items-center">
          <button>{data.collection}</button>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
