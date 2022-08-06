import React from "react";
import { useSites, useUpdateCheckedSites } from "../../contexts/SitesContext";
import "./chart-option.css";

function ChartOption() {
  const [
    sites,
    checkedSites,
    co2Data,
    resLen,
    checkedSensorType,
  ] = useSites();

  const [handleOnChange, handleOnChangeSensorType] = useUpdateCheckedSites();


  return (
    <div className="chart-option-container">
      <span>
        <input
          className="form-check-input"
          type="radio"
          value="co2"
          id="co2"
          onChange={() => handleOnChangeSensorType("co2")}
          checked={checkedSensorType.includes("co2")}
        />
        <label className="form-check-label">CO2</label>
      </span>

      <span>
        <input
          className="form-check-input"
          type="radio"
          value="voc"
          id="voc"
          onChange={() => handleOnChangeSensorType("voc")}
          checked={checkedSensorType.includes("voc")}
        />
        <label className="form-check-label">VOC</label>
      </span>
      
      <span>
        <input
          className="form-check-input"
          type="radio"
          value="temperature"
          id="temperature"
          onChange={() => handleOnChangeSensorType("temperature")}
          checked={checkedSensorType.includes("temperature")}
        />
        <label className="form-check-label">Temperature</label>
      </span>

      <span>
        <input
          className="form-check-input"
          type="radio"
          value="humidity"
          id="humidity"
          onChange={() => handleOnChangeSensorType("humidity")}
          checked={checkedSensorType.includes("humidity")}
        />
        <label className="form-check-label">Humidity</label>
      </span>

      <span>
        <input
          className="form-check-input"
          type="radio"
          value="ambientLight"
          id="ambientLight"
          onChange={() => handleOnChangeSensorType("ambientLight")}
          checked={checkedSensorType.includes("ambientLight")}
        />
        <label className="form-check-label">Ambient Light</label>
      </span>

      

      <span>
        <input
          className="form-check-input"
          type="radio"
          value="pressure"
          id="pressure"
          onChange={() => handleOnChangeSensorType("pressure")}
          checked={checkedSensorType.includes("pressure")}
        />
        <label className="form-check-label">Pressure</label>
      </span>

      <span>
        <input
          className="form-check-input"
          type="radio"
          value="sound"
          id="sound"
          onChange={() => handleOnChangeSensorType("sound")}
          checked={checkedSensorType.includes("sound")}
        />
        <label className="form-check-label">Sound</label>
      </span>

      <span>
        <input
          className="form-check-input"
          type="radio"
          value="uvIndex"
          id="uvIndex"
          onChange={() => handleOnChangeSensorType("uvIndex")}
          checked={checkedSensorType.includes("uvIndex")}
        />
        <label className="form-check-label">UV Index</label>
      </span>

    </div>
  );
}

export default ChartOption;
