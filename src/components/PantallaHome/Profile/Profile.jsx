import React from "react";
import ProfileIcon from "./ProfileIcon";
import users from "../../data/users";

const Profile = (props) => {
    const {username,caption,urlText,iconSize,captionSize,storyBorder,hideAccountName,image} = props;

    let accountName = username
        ? username
        : users[Math.floor(Math.random() * users.length)].username;

    const _stylesProfile ={
        profile: {
            display: 'flex',
            alignItems: 'center',
            fontSize: '0.8em',
            marginBottom: '0.85em',
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            marginLeft: '1em',
            minWidth: '180px',
        },
        accountName: {
            fontWeight: '500',
            marginBottom:'5px',
            cursor: 'pointer',
            //text-decoration: 'underline', arreglar
        },
        a:{
            textAlign: 'right',
            width: '100%',
        },
        caption: {
            color: '#8e8e8e',
            fontSize: '0.8em',
            /* &.small {
                font-size: '0.8em', arreglar
            } */
        },
    };

  return (
    <div className="profile" style={_stylesProfile.profile}>
        <ProfileIcon
            iconSize={iconSize}
            storyBorder={storyBorder}
            image={image}
        />
        {(accountName || caption) && !hideAccountName && (
            <div className="textContainer" style={_stylesProfile.textContainer}>
                <span className="accountName" style={_stylesProfile.accountName}>{accountName}</span>
                <span className={`caption ${captionSize}`} style={_stylesProfile.caption}>{caption}</span>
            </div>
        )}
        <a href="/"  style={_stylesProfile.a}>{urlText}</a>
    </div>
  );
}

export default Profile;