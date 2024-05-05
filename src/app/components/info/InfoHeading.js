import React from "react";
import Status from "../status/Status";
import Menu from "../svgs/Menu";

function InfoHeading(props) {
  return (
    <div className="w-full">
      <div className="flex justify-between px-[30px] items-center">
        <div className="text-[20px] pl-[10px] font-bold text-[#000000]">
          tic-tac-toe
        </div>

        <div className={`flex gap-[8px] items-center ml-auto`}>
          <Status type="deployed"/>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default InfoHeading;
