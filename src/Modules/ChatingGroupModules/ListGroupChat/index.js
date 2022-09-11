import React, { memo } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import userForumGroup from "./forums.json";
import person1 from "../../../Assets/svg/person1.svg";
import person2 from "../../../Assets/svg/person2.svg";
import "./list-group.scss";
const mockAvatarPic = [person1, person2, person1, person2];
const ListGroupForum = memo(() => {
  return (
    <div className="list-group-forum-wrapper">
      {userForumGroup?.map((value) => (
        
        <Card sx={{ maxWidth: 350 }} key={value.id}>
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={value.name}
            subheader={value.description}
          />
          <CardContent>
            <Divider flexItem className="horizontal-line" />
            <div className="avatar-container">
              <AvatarGroup total={value.totalMembers} max={7}>
                {
                    mockAvatarPic.map((data,id)=>(
                        <Avatar alt={value.name} src={data}  key={id}/>
                    ))
                }
               
              </AvatarGroup>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
});
export default ListGroupForum;
