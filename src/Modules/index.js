import React, { memo } from "react";
import "./content.scss";
import TopHeader from "../Layout/TopHeader";
const LandingComponent = memo((props) => {
  return (
    <div className="main-content-wrapper">
      <div className="top-header-pad">
      <TopHeader />
      </div>
  
    </div>
  );
});

export default LandingComponent;
