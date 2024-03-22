import React from "react";
import Button from "@/components/Button";
import Team from "@/components/TeamCard";
import Ads from "@/components/AdsCard";
import { Teams as teamData } from "@/constants/team";
import { Ads as adsData } from "@/constants/ads";

const Sports = () => {
  return (
    <div>
      <div>
        {/* heading */}
        <div>
          <span className="text-2xl pb-2 border-b-2 border-[#738FFF] text-white font-bold">
            Sports
          </span>
        </div>

        {/* cards */}
        <div className="pt-6 flex gap-5 justify-start items-start">
          {teamData?.map((team) => (
            <Team data={team} key={team?.id} />
          ))}

          <Ads data={adsData} />
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
