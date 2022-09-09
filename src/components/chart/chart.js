import React, { useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useSites } from "../../contexts/SitesContext";

function Chart() {
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

  // let options = {};

  // console.log(sites);

  const [options, setOptions] = useState({});

  useEffect(() => {
    // console.log(checkedSensorType);
    if (checkedSensorType[0] === "temperature") {
      // console.log("ijdiej");
      tempData.get("SIT001");
      let seriesData = [];
      for (let i = 0; i < checkedSites.size; i++) {
        let cs = Array.from(checkedSites);
        seriesData.push({
          data: tempData.get(cs[i]),
          name: sites.find((o) => o._id === cs[i]).name,
          turboThreshold: 0,
        });
      }
      setOptions({
        chart: {
          type: "spline",
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        xAxis: {
          labels: {
            enabled: false,
          },
        },
        accessibility: {
          enabled: false,
        },
        title: {
          text: "Temperature (in °C)",
        },
        series: seriesData,
      });
    } else if (checkedSensorType[0] === "humidity") {
      let seriesData = [];
      for (let i = 0; i < checkedSites.size; i++) {
        let cs = Array.from(checkedSites);
        seriesData.push({
          data: humidityData.get(cs[i]),
          name: sites.find((o) => o._id === cs[i]).name,
          turboThreshold: 0,
        });
      }
      setOptions({
        chart: {
          type: "spline",
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        xAxis: {
          labels: {
            enabled: false,
          },
        },
        accessibility: {
          enabled: false,
        },
        title: {
          text: "Humidity (in %)",
        },
        series: seriesData,
      });
    } else if (checkedSensorType[0] === "ambientLight") {
      let seriesData = [];
      for (let i = 0; i < checkedSites.size; i++) {
        let cs = Array.from(checkedSites);
        seriesData.push({
          data: alData.get(cs[i]),
          name: sites.find((o) => o._id === cs[i]).name,
          turboThreshold: 0,
        });
      }
      setOptions({
        chart: {
          type: "spline",
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        xAxis: {
          labels: {
            enabled: false,
          },
        },
        accessibility: {
          enabled: false,
        },
        title: {
          text: "Ambient Light (lx)",
        },
        series: seriesData,
      });
    } else if (checkedSensorType[0] === "voc") {
      let seriesData = [];
      for (let i = 0; i < checkedSites.size; i++) {
        let cs = Array.from(checkedSites);
        seriesData.push({
          data: vocData.get(cs[i]),
          name: sites.find((o) => o._id === cs[i]).name,
          turboThreshold: 0,
        });
      }
      setOptions({
        chart: {
          type: "spline",
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        xAxis: {
          labels: {
            enabled: false,
          },
        },
        yAxis: [
          {
            plotLines: [
              {
                color: "red",
                value: "500",
                width: "0.8",
              },
            ],
          },
        ],
        accessibility: {
          enabled: false,
        },
        title: {
          text: "VOC Data (in ppb)",
        },
        series: seriesData,
      });
    } else if (checkedSensorType[0] === "uvIndex") {
      let seriesData = [];
      for (let i = 0; i < checkedSites.size; i++) {
        let cs = Array.from(checkedSites);
        seriesData.push({
          data: uvData.get(cs[i]),
          name: sites.find((o) => o._id === cs[i]).name,
          turboThreshold: 0,
        });
      }
      setOptions({
        chart: {
          type: "spline",
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        xAxis: {
          labels: {
            enabled: false,
          },
        },
        accessibility: {
          enabled: false,
        },
        title: {
          text: "UV Index",
        },
        series: seriesData,
      });
    } else if (checkedSensorType[0] === "pressure") {
      let seriesData = [];
      for (let i = 0; i < checkedSites.size; i++) {
        let cs = Array.from(checkedSites);
        seriesData.push({
          data: pressureData.get(cs[i]),
          name: sites.find((o) => o._id === cs[i]).name,
          turboThreshold: 0,
        });
      }
      setOptions({
        chart: {
          type: "spline",
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        xAxis: {
          labels: {
            enabled: false,
          },
        },
        accessibility: {
          enabled: false,
        },
        title: {
          text: "Pressure (in mbar)",
        },
        series: seriesData,
      });
    } else if (checkedSensorType[0] === "sound") {
      let seriesData = [];
      for (let i = 0; i < checkedSites.size; i++) {
        let cs = Array.from(checkedSites);
        seriesData.push({
          data: soundData.get(cs[i]),
          name: sites.find((o) => o._id === cs[i]).name,
          turboThreshold: 0,
        });
      }
      setOptions({
        chart: {
          type: "spline",
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        xAxis: {
          labels: {
            enabled: false,
          },
        },
        accessibility: {
          enabled: false,
        },
        title: {
          text: "Sound Level (in dB)",
        },
        series: seriesData,
      });
    } else if (checkedSensorType[0] === "co2") {
      let seriesData = [];
      for (let i = 0; i < checkedSites.size; i++) {
        let cs = Array.from(checkedSites);
        seriesData.push({
          data: co2Data.get(cs[i]),
          name: sites.find((o) => o._id === cs[i]).name,
          turboThreshold: 0,
        });
      }
      setOptions({
        chart: {
          type: "spline",
        },
        xAxis: {
          labels: {
            enabled: false,
          },
        },
        plotOptions: {
          series: {
            marker: {
              enabled: false,
              states: {
                hover: {
                  enabled: true,
                },
              },
            },
          },
        },
        yAxis: [
          {
            plotLines: [
              {
                color: "red",
                value: "1000",
                width: "0.8",
              },
            ],
          },
        ],
        accessibility: {
          enabled: false,
        },
        title: {
          text: "CO2 (in ppm)",
        },
        series: seriesData,
      });
    }
  }, [resLen, checkedSensorType, co2Data]);

  // console.log(options);

  return <HighchartsReact highcharts={Highcharts} options={options} />;
}

export default Chart;
