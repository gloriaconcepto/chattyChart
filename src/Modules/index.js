import React, { memo } from "react";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import "./content.scss";
import Icon from '../Assets/svg'
import GroupForumChart from './ChatingGroupModules';
import TopHeader from "../Layout/TopHeader";
const LandingComponent = memo((props) => {
  const pageTitle = "Messages";
  return (
    <div className="main-content-wrapper">
      <div className="top-header-pad">
        <TopHeader />
      </div>
      <Divider flexItem className="horizontal-line" />
      <div className="justisfied-space-bewteen title-header-container">
        <Typography component="h2" className="title-header">{pageTitle}</Typography>
        <div>
       <Icon.ChartIcon className="chart-icon"/>
        </div>
      </div>
      <div>
        < GroupForumChart.ListGroupForum/>
      </div>
    </div>
  );
});

export default LandingComponent;
