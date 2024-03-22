import React from "react";
import Button from "@/components/Button";
import Team from "@/components/TeamCard";
import Ads from "@/components/AdsCard";
import { Teams as teamData } from "@/constants/team";

const Sports = () => {
  return (
    <div className="w-full">
      <div>
        {/* heading */}
        <div>
          <span className="text-2xl pb-2 border-b-2 border-[#738FFF] text-black dark:text-white font-bold">
            Sports
          </span>
        </div>

        {/* cards */}
        <div className="mt-7 flex w-full flex-row shrink-0 gap-2 overflow-auto justify-between items-start">
          {teamData?.map((team) => (
            <Team data={team} key={team?.id} />
          ))}
          <Ads />
        </div>

        {/* button */}
        <div className="flex justify-center mt-[50px] items-center w-full">
          <Button />
        </div>
      </div>
    </div>
  );
};

export default Sports;
