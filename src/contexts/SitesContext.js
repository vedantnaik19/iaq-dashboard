import React, { useContext, useEffect, useState } from "react";
import { reqInstance } from "../utils/ReqInstance";
import { timeConverter } from "../utils/TimeConverter";

const SitesContext = React.createContext();
const SitesUpdateCheckedContext = React.createContext();

export function useSites() {
  return useContext(SitesContext);
}
export function useUpdateCheckedSites() {
  return useContext(SitesUpdateCheckedContext);
}

export function SitesProvider({ children }) {
  // const [sensorData, setSensorData] = useState(new Set());
  const [co2Data, setCo2Data] = useState(new Map());

  const [tempData, setTempData] = useState(new Map());
  const [humidityData, setHumidityData] = useState(new Map());
  const [alData, setAlData] = useState(new Map());
  const [vocData, setVocData] = useState(new Map());
  const [uvData, setUvData] = useState(new Map());
  const [pressureData, setPressureData] = useState(new Map());
  const [soundData, setSoundData] = useState(new Map());

  const [sites, setSites] = useState([]);
  const [checkedSites, setCheckedSites] = useState(new Set());
  const [resLen, setResLen] = useState(0);
  const [checkedSensorType, setCheckedSensorType] = useState(["co2"]);

  function handleOnChange(id) {
    let ms = new Set(checkedSites);
    setCheckedSites(new Set());
    if (ms.has(id)) ms.delete(id);
    else ms.add(id);
    setCheckedSites(ms);
  }

  function handleOnChangeSensorType(id) {
    setCheckedSensorType([id]);
  }

  //   const [latestData, setLatestData] = useState([]);

  useEffect(() => {
    getLatestData();
    const interval = setInterval(() => getLatestData(), 25000);
    return () => {
      clearInterval(interval);
    };
  }, [checkedSites]);

  async function getLatestData() {
    if (checkedSites.size > 0) {
      console.log("Fetching latest data...");
      const cs = Array.from(checkedSites);
      for (let i = 0; i < cs.length; i++) {
        reqInstance.get(`iot/all/${cs[i]}`).then((res) => {
          let siteId = cs[i];
          // For Co2
          let msCo2 = co2Data;
          let co2DataSeries = [];

         

          // For temp
          let msTemp = tempData;
          let tempDataSeries = [];

          // For humidity
          let msHumidity = humidityData;
          let humidityDataSeries = [];

          // For ambientLight
          let msAl = alData;
          let alDataSeries = [];

          // For voc
          let msVoc = vocData;
          let vocDataSeries = [];

          // For uv
          let msUv = uvData;
          let uvDataSeries = [];

          // For pressure
          let msPressure = pressureData;
          let pressureDataSeries = [];

          // For sound
          let msSound = soundData;
          let soundDataSeries = [];

          setResLen(res.data.length);
          console.log("Data length", res.data.length);
          for (let j = 1; j < res.data.length; j++) {
            // if(j%2===0)
            co2DataSeries.push([
              timeConverter(res.data[j].createdAt),
              res.data[j].co2,
            ]);

           

            tempDataSeries.push([
              timeConverter(res.data[j].createdAt),
              res.data[j].temperature,
            ]);

            humidityDataSeries.push([
              timeConverter(res.data[j].createdAt),
              res.data[j].humidity,
            ]);

            alDataSeries.push([
              timeConverter(res.data[j].createdAt),
              res.data[j].ambientLight,
            ]);

            vocDataSeries.push([
              timeConverter(res.data[j].createdAt),
              res.data[j].voc,
            ]);

            uvDataSeries.push([
              timeConverter(res.data[j].createdAt),
              res.data[j].uvIndex,
            ]);
            pressureDataSeries.push([
              timeConverter(res.data[j].createdAt),
              res.data[j].pressure,
            ]);

            soundDataSeries.push([
              timeConverter(res.data[j].createdAt),
              res.data[j].sound,
            ]);
          }
          msCo2.set(siteId, co2DataSeries);
          setCo2Data(msCo2);

          msTemp.set(siteId, tempDataSeries);
          setTempData(msTemp);

          msHumidity.set(siteId, humidityDataSeries);
          setHumidityData(msHumidity);

          msAl.set(siteId, alDataSeries);
          setAlData(msAl);

          msVoc.set(siteId, vocDataSeries);
          setVocData(msVoc);

          msUv.set(siteId, uvDataSeries);
          setUvData(msUv);

          msPressure.set(siteId, pressureDataSeries);
          setPressureData(msPressure);

          msSound.set(siteId, soundDataSeries);
          setSoundData(msSound);

        });
      }
    }
  }

  useEffect(() => {
    reqInstance.get("sites/all").then((res) => {
      //   console.log(res.data);
      setSites(res.data);
      let ms = new Set();
      ms.add(res.data[0]._id);
      setCheckedSites(ms);
    });
  }, []);

  return (
    <SitesContext.Provider
      value={[
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
        // handleOnChangeSensorType,
      ]}
    >
      <SitesUpdateCheckedContext.Provider
        value={[handleOnChange, handleOnChangeSensorType]}
      >
        {children}
      </SitesUpdateCheckedContext.Provider>
    </SitesContext.Provider>
  );
}
