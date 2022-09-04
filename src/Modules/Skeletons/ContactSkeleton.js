import React, { memo } from "react";
import Skeleton from "@mui/material/Skeleton";
const ContactsSkeletons = memo(() => {
  return (
    <div style={{display:'flex'}}>
      <div style={{marginLeft:'15px'}}>
        <Skeleton variant="circular" width={40} height={40} animation="wave"/>
      </div>
      <div style={{marginLeft:'15px'}}>
        <Skeleton animation="wave"  width={200} />
        <Skeleton animation="wave" width={100}/>
      </div>
    </div>
  );
});

export default ContactsSkeletons;
