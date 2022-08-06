import React from 'react';
import Header from "./components/header/header";
import Body from "./components/body/body";
import { SitesProvider } from "./contexts/SitesContext";

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
