import React from "react";
import "./body.css";
import Chart from "../chart/chart";
import ChartOption from "../chart-option/chart-option";
import SideBar from "../side-bar/side-bar";
import Info from "../info/info";

function Body() {
 
  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col-3 ">
          <SideBar />
        </div>
        <div className="col">
          <div>
            <ChartOption />
            <Chart />
            <Info/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Body;
