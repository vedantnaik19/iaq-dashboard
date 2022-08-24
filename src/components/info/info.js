import React from "react";
import { useSites } from "../../contexts/SitesContext";
import "./info.css";

export default function Info() {
  const [
    sites,
    checkedSites,
    co2Data,
    resLen,
    checkedSensorType,
    tempData,
    humidityData,
    alData,
    vocData,
    uvData,
    pressureData,
    soundData,
    // co2DataThres
  ] = useSites();

  return (
    <div className="info-container">
      {checkedSensorType[0] === "co2" && (
       <div>
       <span style={{ color: "#056d36" }}>&#9632; </span>
       <span>
         Acceptable value less than<b> 1000ppm</b>
       </span>
     </div>
      )}

      {checkedSensorType[0] === "voc" && (
        <div>
          <span style={{ color: "#056d36" }}>&#9632; </span>
          <span>
            Acceptable value less than<b> 500ppb</b>
          </span>
        </div>
      )}
    </div>
  );
}
