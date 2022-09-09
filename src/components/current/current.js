import React from "react";
import "./current.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import wind from "../../assets/wind.png";

export default function Current() {
  return (
    <div className="current-container">
      <div className="m-4 px-4">
        <div className="d-flex justify-content-between">
          <div>
            <h3> Electronics Lab, </h3>
            <h6> UEA</h6>
          </div>
          <div>
            <h3>08:24 am</h3>
            <h6>Thursday, Jan 4, 2022</h6>
          </div>
        </div>
        <div className="section mt-4 pt-4 d-flex justify-content-between">
          <div className="card align-self-stretch">
            <div className="card-body">
              <div className="d-flex px-2">
                <img src={wind} alt="wind" />
                <div className="px-3">
                  <p className="text-muted">CO2</p>
                  <h3>45 ppm</h3>
                </div>
              </div>
            </div>
          </div>
          <div class="card align-self-stretch">
            <div class="card-body">
              <p className="text-muted">CO2</p>
              <h3>45 ppm</h3>
            </div>
          </div>
          <div class="card align-self-stretch">
            <div class="card-body">
              <p className="text-muted">CO2</p>
              <h3>45 ppm</h3>
            </div>
          </div>{" "}
          <div class="card align-self-stretch">
            <div class="card-body">
              <p className="text-muted">CO2</p>
              <h3>45 ppm</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
