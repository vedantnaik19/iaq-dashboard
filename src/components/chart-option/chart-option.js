import React from "react";
import "./chart-option.css";

function ChartOption() {
  return (
    <div className="chart-option-container">
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio1"
          value="option1"
        />
        <label className="form-check-label" for="inlineRadio1">
          Weekly View
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio2"
          value="option2"
        />
        <label className="form-check-label" for="inlineRadio2">
          Monthly View
        </label>
      </div>
      <div className="form-check form-check-inline">
        <input
          className="form-check-input"
          type="radio"
          name="inlineRadioOptions"
          id="inlineRadio3"
          value="option3"
        />
        <label className="form-check-label" for="inlineRadio3">
          Yearly View
        </label>
      </div>
    </div>
  );
}

export default ChartOption;
