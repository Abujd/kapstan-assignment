import React from "react";
import ServiceInfoCard from "../ServiceInfoCard";
import SystemMetrics from "./systemMetric/SystemMetrics";
import EventHistory from "./eventHistory/EventHistory";

function Overview({selectedOption}) {
  return (
    <div>
      <div className="w-[100%]">
        <ServiceInfoCard selectedOption={selectedOption}/>
      </div>
      <div className="flex justify-between gap-[30px] mt-[20px] w-[100%]">
        <div
          className="w-[100%] border rounded-[8px] bg-[#fff] boxShadowStyle"
        >
          <SystemMetrics />
        </div>
        <div
          className="w-[100%] border rounded-[8px] bg-[#fff] boxShadowStyle"
        >
          <EventHistory />
        </div>
      </div>
    </div>
  );
}

export default Overview;
