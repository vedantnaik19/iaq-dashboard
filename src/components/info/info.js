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
        <ul>
          <li>
          <span>0-350: Healthy and general air quality </span>
          </li>

          <li>
          <span>351 - 450 Acceptable range</span>
          </li>


          <li>
          <span>451-700 Filthy and uncomfortable</span>
          </li>

          <li>
          <span>700-1000 Drowsiness</span>
          </li>

          <li>
          <span>1000 - 2500 Adverse health effects</span>
          </li>

          <li>
          <span>
            &lt; 5000 Exposure for more than 8h may lead to brain damage, coma,
            death</span>
            </li>
        </ul>
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
