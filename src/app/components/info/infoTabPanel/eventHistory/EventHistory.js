"use client";
import Status from "@/app/components/status/Status";
import React, { useEffect, useState } from "react";
import { getEventHistory } from "../../../../../../utils/ApiService";
import { getDateFormat } from "../../../../../../utils/common";

function EventHistory(props) {
  const [historyData, setHistoryData] = useState(null);
  const [visibleItems, setVisibleItems] = useState(4);

  const handleViewMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  const fetchApplications = async () => {
    try {
      const res = await getEventHistory();
      setHistoryData(res);
    } catch (error) {
      console.log("Error :: ", error);
    }
  };

  useEffect(() => {
    fetchApplications();
  }, []);

  return (
    <div className="px-[20px] pb-[20px] mt-[20px]">
      <div className="text-[16px] font-bold text-[#595959] mb-[10px]">
        Event History
      </div>

      <div className="px-[30px] flex items-center font-bold text-[16px] py-[16px] gap-[15px] border-b">
        <div className="basis-[33%]">Event</div>
        <div className="basis-[33%]">Version</div>
        <div className="basis-[33%]">Status</div>
      </div>
      {historyData && historyData?.slice(0, visibleItems).map((row, item) => (
        <div
          className="px-[30px] flex items-center text-[14px] py-[16px] gap-[15px] border-b"
          key={row?.id}
        >
          <div className="basis-[33%]">
            {row.event}
            <div className="text-[#A5A5A5]">
              {row.timestamp && getDateFormat(row.timestamp)}
            </div>
          </div>

          <div className="basis-[33%]">{row.version}</div>
          <div className="basis-[33%]">
            <Status type={row.status} />
          </div>
        </div>
      ))}
      {visibleItems < historyData?.length && (
        <div
          className="text-[14px] underline cursor-poiner text-[#6E27D5] mt-[20px] cursor-pointer"
          onClick={handleViewMore}
        >
          View More
        </div>
      )}
    </div>
  );
}

export default EventHistory;
