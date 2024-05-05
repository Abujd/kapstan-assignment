import React, { useState } from "react";
import CpuUtilisation from "./CpuUtilisation";
import Memory from "./Memory";

function SystemMetrics() {
  const [selectedTab, setSelectedTab] = useState("CPU");
  return (
    <div className="px-[20px] pb-[20px] mt-[20px]">
      <div className="text-[16px] font-bold text-[#595959] py-[16px]">
        System metrics
      </div>
      <div className="flex gap-[20px] main-page border-b-2 justify-around">
        <div
          onClick={() => setSelectedTab("CPU")}
          className={`cursor-pointer tab ${
            selectedTab === "CPU" ? "active-tab" : ""
          }`}
        >
          CPU
        </div>
        <div
          onClick={() => setSelectedTab("Memory")}
          className={`cursor-pointer tab ${
            selectedTab === "Memory" ? "active-tab" : ""
          }`}
        >
          Memory
        </div>
      </div>
      <div className="mt-4">
        {selectedTab === "CPU" && (
          <div className="text-[16px] text-gray-700">
            <div className="mt-4">
              <CpuUtilisation />
            </div>
          </div>
        )}
        {selectedTab === "Memory" && (
          <div className="text-[16px] text-gray-700">
            <div className="mt-4">
              <Memory />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SystemMetrics;
