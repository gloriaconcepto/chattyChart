import React, { memo,useState} from "react";
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import './sidebar.scss';
import { sideBarContents,signature} from "../../Utilities/SideBarConstant";
import ContactsComponents from "../../Modules/ContactModules";
const SideBar =memo((props)=>{
    const [activeKey,setActiveKey]=useState(1)
    const menusClick = (key) => {
    
      setActiveKey(key);
  };
    return(
      
      <React.Fragment>
        <div className="side-bar-wrapper">
            <div className="justified-center"><span className="app-title">{signature}</span></div>
            <MenuList>
            {
                sideBarContents.map((value, index) => (
                  <MenuItem  key={index} sx={{ marginBottom: "38px", background: activeKey === value.id ? "#24B65E" : null,height:'45px' }} onClick={()=>menusClick(value.id)}>
                      <ListItemIcon>{activeKey === value.id ? value.iconActive: value.iconInActive}</ListItemIcon>
                      <ListItemText sx={{marginLeft:'26.02px',color: activeKey===value.id ? '#FFFFFF':null}}>{value.title}</ListItemText>
                  </MenuItem>
              ))
            
          
           }
            </MenuList>
 
            <Divider light sx={{marginTop:'40px',marginBottom:'24px'}}/>
            <Typography variant="h1" gutterBottom className="contact-header">
            Contacts
            </Typography>
            <Box className="contacts-box">
               <ContactsComponents/>
            </Box>
            </div>
      </React.Fragment>
     
    )
  }
  
  )
           
       
      
  
  export default SideBar;