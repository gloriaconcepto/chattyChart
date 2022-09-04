import React, { memo } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";

import ContactData from "./contact-data.json";
import placeHolder from "../../Assets/svg/placeHolder.svg";
const ContactsComponents = memo((props) => {
  return (
    <React.Fragment>
      {ContactData?.map((value) => (
        <List key={value.id} sx={{cursor:'pointer'}} className='contacts-wrapper'>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={value.name} src={placeHolder} />
            </ListItemAvatar>
            <ListItemText
          primary={value.name}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                className="small-email-title"
              >
              {value.email}
              </Typography>
            
            </React.Fragment>
          }
        />
           
          </ListItem>
        </List>
      ))}
    </React.Fragment>
  );
});

export default ContactsComponents;
