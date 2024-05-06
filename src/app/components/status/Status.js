import React from "react";

const statusData = [
  {
    type: "deployed",
    color: "#00B88C",
    bgColor: "rgba(0, 184, 140, 0.12)",
    text: "deployed",
  },
  {
    type: "failed",
    color: "#DF0404",
    bgColor: "rgba(255, 197, 197, 0.38)",
    text: "Failed",
  },
  {
    type: "in_progress",
    color: "#DF9504",
    bgColor: "rgba(223, 149, 4, 0.12)",
    text: "In progress",
  },
  {
    type: "uninstalled",
    color: "#DF0404",
    bgColor: "rgba(255, 197, 197, 0.38)",
    text: "uninstalled",
  },
  {
    type: "successful",
    color: "#008767",
    bgColor: "rgba(22, 192, 152, 0.38)",
    text: "Successful",
  },
];

function Status({ type }) {
  const status = statusData.find((item) => item.type === type);

  if (!status) {
    return null;
  }

  const { color, bgColor, text } = status;

  return (
    <div
      className={`border rounded-[4px] px-[12px] py-[4px] text-[14px] flex items-center gap-[8px]`}
      style={{ backgroundColor: bgColor, color: color, borderColor: color }}
    >
      <svg
        width="8"
        height="8"
        viewBox="0 0 8 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="4" cy="4" r="4" fill={color} />
      </svg>

      {text}
    </div>
  );
}

export default Status;
