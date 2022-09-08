import React, { memo } from "react";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Notification from "../../Utilities/Notification";
import SearchBar from "../../Utilities/SearchBar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import placeHolder from "../../Assets/svg/placeHolder.svg";
import "./top-header.scss";
const TopHeader = memo(() => {
  const onSearchMessage = (text) => {
    console.log("text", text);
    //loadash debounce will be set here
  };
  return (
    <React.Fragment>
      <Grid container alignItems="center" columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={4} md={8}>
          <SearchBar
            title="Search messages"
            callBackFunc={(e) => onSearchMessage(e)}
          />
        </Grid>
        <Grid item xs={1} md={1}>
          <Notification count={2} />
        </Grid>
        <Grid item xs={1} md={1}>
          <div className="top-header-wrapper">
            <Divider
              orientation="vertical"
              flexItem
              className="vertical-line"
            />
            <List>
            <ListItem alignItems="flex-start">
            <ListItemAvatar className="avatar-position">
                <Avatar alt='mmekut' src={placeHolder} />
              </ListItemAvatar>
              <ListItemText
                primary={'mmekut-mfon'}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      className="small-email-title"
                    >
                    {'mmekut@gmail.com'}
                    </Typography>
                  </React.Fragment>
                }
              />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  );
});

export default TopHeader;
