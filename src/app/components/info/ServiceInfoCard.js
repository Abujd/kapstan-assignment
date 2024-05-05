"use client";
import React, { useState } from "react";
import UpArrow from "../svgs/UpArrow";
import DownArrow from "../svgs/DownArrow";
import Correct from "../svgs/Correct";

function ServiceInfoCard() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="w-[100%]">
      <div className={`border rounded-[8px] bg-[#fff] overflow-hidden ${isCollapsed ? "h-[60px]" : "h-auto"} transition-height duration-500`}>
        <div
          className="flex items-center justify-between cursor-pointer px-[20px] py-[20px]"
          onClick={toggleCollapse}
        >
          <div className="text-[#595959] font-bold">Service info</div>
          {isCollapsed ? <UpArrow /> : <DownArrow />}
        </div>
        <div className={`transition-opacity duration-500 ${isCollapsed ? "opacity-0" : "opacity-100"} ${isCollapsed ? "h-0" : "h-auto"}`}>
          <div className="flex text-[12px] text-[#595959] gap-[20px] px-[20px] py-[10px]">
            <div className="basis-[10%]">Current version</div>
            <div>Desired version</div>
          </div>
          <div className="flex text-[12px] gap-[20px] px-[20px] py-[10px]">
            <div className="basis-[10%] flex items-center gap-[5px]">
              <Correct /> In sync
            </div>
            <div>1.2.1</div>
          </div>
          <div className="flex items-center px-[20px] py-[10px] mb-[10px]">
            <button className="btn btn-primary">Deploy</button>
            <div className="text-[12px] text-[#595959] ml-auto">Last updated 5 hours ago</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceInfoCard;
