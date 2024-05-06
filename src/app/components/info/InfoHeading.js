"use client"
import React, { useEffect, useState } from "react";
import Status from "../status/Status";
import Menu from "../svgs/Menu";

function InfoHeading({selectedOption}) {
  const [foundGame, setFoundGame] = useState(null);

  useEffect(() => {
    const storedGame = localStorage.getItem('game');
    if (storedGame) {
      setFoundGame(JSON.parse(storedGame));
    }
  }, [selectedOption]);

  return (
    <div className="w-full">
      <div className="flex justify-between px-[30px] items-center">
        <div className="text-[20px] pl-[10px] font-bold text-[#000000]">
          {foundGame?.name ||  <>tic-tac-toe</>}
        </div>

        <div className={`flex gap-[8px] items-center ml-auto`}>
          <Status type={foundGame?.status || "deployed"}/>
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default InfoHeading;
