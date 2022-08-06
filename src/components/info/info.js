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
          <span>&lt; 350: Healthy and general air quality </span>

          <span className="space"></span>

          <span style={{ color: "#4ca804" }}>&#9632; </span>
          <span>&lt; 450 Acceptable range</span>
          <span className="space"></span>

          <span style={{ color: "#a5cf3c" }}>&#9632; </span>
          <span>&lt; 700 Filthy and uncomfortable</span>
          <span className="space"></span>

          <span style={{ color: "#f5e61c" }}>&#9632; </span>
          <span>&lt; 1000 Drowsiness</span>
          <span className="space"></span>

          <span style={{ color: "#f69c09" }}>&#9632; </span>
          <span>&lt; 2500 Adverse health effects</span>
          <span className="space"></span>

          <span style={{ color: "#d82726" }}>&#9632; </span>
          <span>
            &lt; 5000 Exposure for more than 8h may lead to brain damage, coma,
            death
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
