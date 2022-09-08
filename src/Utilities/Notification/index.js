import  PropTypes  from "prop-types";
import React, { memo} from "react";
import Badge from '@mui/material/Badge';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import './notification.scss';
const Notification=memo((props)=>{
    
    const {count}=props;
   
    return(
        <div className="notification-wrapper">
             <Badge badgeContent={count} color="error" max={50}>
             <NotificationsNoneIcon className="notification-icon"/>
             </Badge>
   
        </div>
    )
})
Notification.propTypes={
count:PropTypes.number,
}

export default Notification;