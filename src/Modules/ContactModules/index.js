import React, { memo, useState, useEffect } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import InfiniteScroll from "react-infinite-scroller";
import ContactData from "./contact-data.json";
import placeHolder from "../../Assets/svg/placeHolder.svg";
import ContactsSkeletons from "../Skeletons/ContactSkeleton";
const ContactsComponents = memo((props) => {
  const [contacts, setContacts] = useState(ContactData);
  const [hasMore, setHasMore] = useState(true);
  const [stopLoading, setStopLoading] = useState(false);
  const maxLength = 6;
  useEffect(() => {
    //check if the length equal the max length
    if (contacts.length === maxLength) {
      
        setStopLoading(false);
        setHasMore(false);
      }
  },[contacts]);
  const addMoreContacts = () => {

   // setStopLoading(true);
    let mockData = {
      id: 6,
      name: "Mmekut-mfon Gordons",
      email: "allisson@email.com",
    };
   
    if (contacts.length < maxLength){
        setStopLoading(true);
        setContacts((contacts) => [...contacts, mockData]);
    }
    
  
};


  return (
    <React.Fragment>
      <InfiniteScroll
        pageStart={0}
        loadMore={addMoreContacts}
        hasMore={hasMore}
       
        useWindow={false}
      >
        {contacts?.map((value) => (
          <List
            key={value.id}
            sx={{ cursor: "pointer" }}
            className="contacts-wrapper"
          >
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={value.name} src={placeHolder} />
              </ListItemAvatar>
              <ListItemText
                primary={value.name}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
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
        {console.log({stopLoading})}
       {stopLoading&& <ContactsSkeletons/>}
      </InfiniteScroll>
    </React.Fragment>
  );
});

export default ContactsComponents;
