import { useState } from "react";
import "./App.css";
import tabsData from "../lib/data.json";
import useCurrentWidth from "./checkViewport";
import Tabs from "../components/Tabs";
import Accordion from "../components/Accordion";

const mobileBreakpoint = 700;

function App() {
  const isMobile = useCurrentWidth() < mobileBreakpoint;
  const [activeState, setActiveState] = useState(0);
  const handleToggle = (index) => {
    setActiveState(activeState !== index ? index : false);
  };

  return (
    <div className="container flex flex-wrap my-10 mx-auto p-5">
      <div
        className={`flex flex-col flex-row w-full ${
          isMobile === true ? "space-y-5 border-b" : " space-x-5"
        }`}
      >
        {isMobile ? (
          <Accordion
            data={tabsData}
            isActive={activeState}
            setActive={setActiveState}
            toggle={handleToggle}
          />
        ) : (
          <Tabs
            data={tabsData}
            isActive={activeState}
            setActive={setActiveState}
          />
        )}
      </div>
    </div>
  );
}

export default App;
