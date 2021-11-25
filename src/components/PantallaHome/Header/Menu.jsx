import React from 'react';
import ProfileIcon from "../Profile/ProfileIcon";
import image from "../../IMG/profile.jpg";
import { ReactComponent as Home } from "../../IMG/home.svg";
import { ReactComponent as Inbox } from "../../IMG/inbox.svg";
import { ReactComponent as Explore } from "../../IMG/explore.svg";
import { ReactComponent as Notifications } from "../../IMG/notifications.svg";

const Menu = () => {

    const _stylesMenu = {
        menu :{
            display: 'flex',
        },
        icon :{
            marginRight: '1.5em',
            width: '23px',
            height: '23px',
            cursor: 'pointer',
        },
        profileIcon:{
              marginTop: '-3px',
        },
          
    };

    return (
        <div className="menu" style={_stylesMenu.menu}>
            <Home className="icon" style={_stylesMenu.icon}/>
            <Inbox className="icon" style={_stylesMenu.icon}/>
            <Explore className="icon" style={_stylesMenu.icon}/>
            <Notifications className="icon" style={_stylesMenu.icon}/>
            <ProfileIcon iconSize="small" image={image} style={_stylesMenu.profileIcon}/>
        </div>
    );
  };
  
  export default Menu;