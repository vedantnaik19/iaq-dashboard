import React from "react";
import Header from "./components/header/header";
import Body from "./components/body/body";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SitesProvider } from "./contexts/SitesContext";
import Current from "./components/current/current";

function App() {
  return (
   
            <div>
              <Header />
              <SitesProvider>
                <Body />
              </SitesProvider>
            </div>
       
  );
}

export default App;
