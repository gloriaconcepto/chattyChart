import {messageIcon} from '../../Assets/svg/messageIcon';
import {supportIcon} from '../../Assets/svg/supportIcon';
import {settingIcon} from '../../Assets/svg/settingIcon';
export  const sideBarContents=[
    {   id:1,
        title:'Message',
        url:'/',
        iconActive:messageIcon.active(),
        iconInActive:messageIcon.inactive()
    },
    {   id:2, 
        title:'Support',
        url:'/',
        iconActive:supportIcon.active(),
        iconInActive:supportIcon.inactive()
    },
    {
        id:3,
        title:'Settings',
        url:'/',
        iconActive:settingIcon.active(),
        iconInActive:settingIcon.inactive()
    } 
]

export const signature='chatty';


