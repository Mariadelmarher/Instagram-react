import React from "react";

const ProfileIcon = (props) => {
  const _stylesProfileIcon = {
    storyBorder: {
        padding: '2px',
        background: 'linear-gradient(200deg ,#da3394 25% ,#e03c67 50% ,#f3753b 75% ,#f99b4a 100%)',
        borderRadius: '50%',
    },
    null:{

    },
    small:{
        border: '2px solid #fff',
        display: 'block',
        cursor: 'pointer',
        borderRadius: '50%',
        width: '25px',
        height: '25px',
        
      },
      mid:{
      border: '2px solid #fff',
      display: 'block',
      cursor: 'pointer',
      borderRadius: '50%',
      width: '35px',
      height: '35px',

    },
  };

  const { iconSize, storyBorder, image } = props;

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let randomId = getRandomInt(1, 70);

  let profileImage = image
    ? image
    : `https://i.pravatar.cc/150?img=${randomId}`;

  return (
    <div className={storyBorder ? "storyBorder" : ""}  style={storyBorder ? _stylesProfileIcon.storyBorder : _stylesProfileIcon.null}>
      <img
        className={`profileIcon ${iconSize}`} style={_stylesProfileIcon[props.iconSize]}//arreglar
        src={profileImage}
        alt="profile"
      />
    </div>
  );
};

export default ProfileIcon;
