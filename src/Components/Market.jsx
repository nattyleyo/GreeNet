import { Link } from "react-router-dom";

import React from "react";
import "./Market.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowDown,
  faArrowUp,
  faCloud,
  faTemperatureHigh,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import MarketStatus from "./MarketStatus";
import CropList from "./CropList";
import InteractiveMap from "./InteractiveMap";
import Weekly_Mar from "./Weekly_Mar";
import Dashboard from "./Dashboard";
import HomeNavbar from "./HomeNavbar";
import Watchlist from "./Weekly_Mar";
import Sidebar from "./Sidebar";

function Market() {
  return (
    <div className="container">
      <div className="column left">
        <Sidebar />
      </div>
      <div className="column center">
        <OverviewContent />
      </div>
      <div className="column right" style={{ width: "448px" }}>
        {/* <Weekly_Mar /> */}
        <Watchlist />
      </div>
    </div>
  );
}

function OverviewContent() {
  return (
    <div className="overview-content">
      <div className="dash-title">Market</div>
      <div className="search-bar">
        <input type="text" placeholder="Find High Demand Area" />
        <button type="button">Find</button>
      </div>
      <div className="overview-cards">
        <div className="overview-card">
          <div className="top-t">
            <div className="title">Maize</div>
            <div className="change-indicator up">
              <FontAwesomeIcon icon={faArrowUp} /> <span>5%</span>
            </div>
          </div>
        </div>
        <div className="overview-card">
          <div className="top-t">
            <div className="title">Barley</div>
            <div className="change-indicator down">
              <FontAwesomeIcon icon={faArrowDown} /> 5%
            </div>
          </div>
        </div>
        <div className="overview-card">
          <div className="top-t">
            <div className="title">Wheat</div>
            <div className="change-indicator up">
              <FontAwesomeIcon icon={faArrowUp} /> <span>7%</span>
            </div>
          </div>
        </div>
        <div className="overview-card">
          <div className="top-t">
            <div className="title">Rice</div>
            <div className="change-indicator up">
              <FontAwesomeIcon icon={faArrowUp} /> <span>7%</span>
            </div>
          </div>
        </div>
      </div>
      <MarketStatus />
      <CropList />
    </div>
  );
}

export default Market;
