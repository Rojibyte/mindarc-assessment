import { useState } from "react";
import "./App.css";
import tabsData from "../lib/data.json";
import useCurrentWidth from "./checkViewport";
import Tabs from "../components/Tabs";
import Accordion from "../components/Accordion";

const mobileBreakpoint = 700;

function App() {
  const isMobile = useCurrentWidth() < mobileBreakpoint;
  const [activeState, setActiveState] = useState(1);

  console.log(activeState);

  return (
    <div className="container flex flex-wrap my-10 mx-auto p-5">
      <div
        className={`flex flex-col flex-row ${
          isMobile === true ? "space-y-5 border-b" : " space-x-5"
        }`}
      >
        {isMobile ? (
          <Accordion
            data={tabsData}
            isActive={activeState}
            setActive={setActiveState}
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
