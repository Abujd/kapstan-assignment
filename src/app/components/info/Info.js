import React from "react";
import InfoHeading from "./InfoHeading";
import InfoTabPanel from "./infoTabPanel/InfoTabPanel";

function Info({selectedOption}) {
  return (
    <div>
      <InfoHeading selectedOption={selectedOption}/>
      <InfoTabPanel  selectedOption={selectedOption}/>
    </div>
  );
}

export default Info;
