import React, { useContext, useEffect, useState } from "react";
import { reqInstance } from "../utils/ReqInstance";

const SitesContext = React.createContext();
const SitesUpdateCheckedContext = React.createContext();

export function useSites() {
  return useContext(SitesContext);
}
export function useUpdateCheckedSites() {
  return useContext(SitesUpdateCheckedContext);
}

export function SitesProvider({ children }) {
  const [sites, setSites] = useState([]);
  const [checkedSites, setCheckedSites] = useState(new Set());

  function handleOnChange(id) {
    let ms = new Set(checkedSites);
    setCheckedSites(new Set());
    if (ms.has(id)) ms.delete(id);
    else ms.add(id);
    setCheckedSites(ms);
  }

  useEffect(() => {
    if (checkedSites.size > 0) {
      console.log(checkedSites);
    }
  }, [checkedSites]);

  useEffect(() => {
    reqInstance.get("sites/all").then((res) => {
    //   console.log(res.data);
      setSites(res.data);
    });
  }, []);

  return (
    <SitesContext.Provider value={[sites, checkedSites]}>
      <SitesUpdateCheckedContext.Provider value={handleOnChange}>
        {children}
      </SitesUpdateCheckedContext.Provider>
    </SitesContext.Provider>
  );
}
