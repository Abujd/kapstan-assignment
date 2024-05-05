"use client";
import React, { useState } from "react";
import Moniter from "../../svgs/Moniter";
import Build from "../../svgs/Build";
import Alert from "../../svgs/Alert";
import Time from "../../svgs/Time";
import Overview from "./Overview";
import EnvironmentVariables from "./EnvironmentVariables";
import Alerts from "./Alerts";
import HistoryTab from "./HistoryTab";

function InfoTabPanel(props) {
  const [selectedTab, setSelectedTab] = useState("EV");
  const renderTabComponent = () => {
    switch (selectedTab) {
      case "OVERVIEW":
        return <Overview />;
      case "EV":
        return <EnvironmentVariables />;
      case "ALERTS":
        return <Alerts />;
      case "EH":
        return <HistoryTab />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex item-center gap-[20px] px-[30px] my-[30px]">
        <div
          onClick={() => setSelectedTab("OVERVIEW")}
          className={`flex gap-[10px] items-center text-[14px] cursor-pointer ${
            selectedTab === "OVERVIEW" ? "font-bold" : "text-[#595959]"
          }`}
        >
          <Moniter />
          Overview
        </div>
        <div
          onClick={() => setSelectedTab("EV")}
          className={`flex gap-[10px] items-center text-[14px] cursor-pointer ${
            selectedTab === "EV" ? "font-bold" : "text-[#595959]"
          }`}
        >
          <Build />
          Environment Variables
        </div>
        <div
          onClick={() => setSelectedTab("ALERTS")}
          className={`flex gap-[10px] items-center text-[14px] cursor-pointer ${
            selectedTab === "ALERTS" ? "font-bold" : "text-[#595959]"
          }`}
        >
          <Alert />
          <div className="flex ietms-start">
          <span>Alerts</span>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6" cy="6" r="3" fill="#E91F04" />
          </svg>
          </div>
        </div>
        <div
          onClick={() => setSelectedTab("EH")}
          className={`flex gap-[10px] items-center text-[14px] cursor-pointer ${
            selectedTab === "EH" ? "font-bold" : "text-[#595959]"
          }`}
        >
          <Time />
          Event history
        </div>
      </div>
      <div className="px-[30px] ">{renderTabComponent()}</div>
    </div>
  );
}

export default InfoTabPanel;
