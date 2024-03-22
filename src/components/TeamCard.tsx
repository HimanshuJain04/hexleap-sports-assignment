import React from "react";
import Image from "next/image";

interface team {
  id: number;
  image: string;
  sport: string;
  name: string;
  totalEvents: number;
}

const TeamCard = (props: any) => {
  const data: team = props.data;

  return (
    <div className="p-2 bg-bg-card-dark  w-[237px] h-[511px] overflow-hidden">
      {/* team image */}
      <div className="overflow-hidden bg-black w-[217px] h-[385px]">
        <Image
          src={data?.image}
          alt="team-image"
          width={217}
          height={385}
          className="object-cover h-full w-full"
        />
      </div>

      {/* team name */}
      <div className="py-3">
        <p className="font-medium text-white text-base capitalize">
          {data.name}
        </p>
      </div>

      {/* details */}
      <div className="bg-bg-card-desc-dark rounded-sm gap-10 p-2 flex justify-start items-start">
        {/* events */}
        <div className="flex flex-col gap-1">
          <p className="text-text-card-dark text-xs font-normal">
            Total Events
          </p>
          <span className="text-white text-sm font-medium flex gap-1">
            <p>{data.totalEvents}</p>
            <p>Events</p>
          </span>
        </div>

        {/* sports */}
        <div className="flex gap-1 flex-col">
          <p className="text-text-card-dark text-xs font-normal">Sports</p>
          <span className="text-white text-sm font-medium capitalize">
            {data.sport}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
