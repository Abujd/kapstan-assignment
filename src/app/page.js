"use client";
import { useState } from "react";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

export default function Home() {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="flex items-start w-screen h-full">
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div
        className={`${isOpen ? "w-[100%]" : "w-[87%]"}`}
        style={{ height: "100%" }}
      >
        <Navbar selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        <div className="cursor-pointer">
          <Info selectedOption={selectedOption}/>
        </div>
      </div>
    </div>
  );
}
