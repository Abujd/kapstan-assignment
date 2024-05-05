"use client";
import React, { useState } from "react";
import Application from "../svgs/Application";
import Connection from "../svgs/Connection";
import Doller from "../svgs/Doller";
import Security from "../svgs/Security";
import LogoCircle from "../svgs/LogoCircle";
import LogoText from "../svgs/LogoText";
import Admin from "../svgs/Admin";
import Save from "../svgs/Save";
import Arrow from "../svgs/Arrow";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(250);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setSidebarWidth(isOpen ? 50 : 250);
  };

  return (
    <>
      {isOpen ? (
        <div
          className={`bg-[#37146B] text-[#fff] h-screen flex flex-col justify-between w-[${sidebarWidth}px]`}
        >
          <div>
            <div className="flex items-center gap-[8px] px-[30px] py-[30px]">
              <LogoCircle />
              <LogoText />
            </div>
            <div className="border-b border-[#B88BFE] opacity-80 mb-[20px]"></div>

            <button>
              <div className="flex items-center gap-[20px] cursor-pointer px-[30px]">
                <Application />
                <span>Applications</span>
              </div>
            </button>
            <div className="border-b border-[#B88BFE] opacity-80 my-[20px]"></div>
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Connection />
              <span>Connections</span>
            </div>
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Doller />
              <span>Cost</span>
            </div>
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Security />
              <span>Security</span>
              <button className="btn btn-primary">Beta</button>

            </div>
            <div className="border-b border-[#B88BFE] opacity-80 my-[20px]"></div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Admin />
              <span>Admin</span>
            </div>
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Save />
              <span>Docs</span>
            </div>
            <div className="border-b border-[#B88BFE] opacity-80 my-[20px]"></div>

            <div
              className="px-[30px] mb-[30px] cursor-pointer"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <Arrow />
            </div>
          </div>
        </div>
      ) : (
        <div
          className={`bg-[#37146B] text-[#fff] h-screen flex flex-col justify-between w-[${sidebarWidth}px]`}
        >
          <div>
            <div className="flex items-center gap-[8px] px-[30px] py-[30px]">
              <LogoCircle />
            </div>
            <div className="border-b border-[#B88BFE] opacity-80 mb-[20px]"></div>

            <button>
              <div className="flex items-center gap-[20px] cursor-pointer px-[30px]">
                <Application />
              </div>
            </button>
            <div className="border-b border-[#B88BFE] opacity-80 my-[20px]"></div>
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Connection />
            </div>
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Doller />
            </div>
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Security />
            </div>
            <div className="border-b border-[#B88BFE] opacity-80 my-[20px]"></div>
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Admin />
            </div>
            <div className="flex items-center gap-[20px] cursor-pointer px-[30px] mb-[30px]">
              <Save />
            </div>
            <div className="border-b border-[#B88BFE] opacity-80 my-[20px]"></div>

            <div
              className="px-[30px] mb-[30px] cursor-pointer"
              onClick={() => {
                toggleSidebar();
              }}
            >
              <Arrow />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
