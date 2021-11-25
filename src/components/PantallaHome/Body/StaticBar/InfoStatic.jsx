import React from "react"
const InfoStatic = () => {
    const _stylesInfo = {
        infoBox:{
            flexDirection: 'row'
        },
        nav:{
            marginBottom: '16px'
        },
        a:{
            color: '#c7c7c7',
            fontSize: '11px',
            fontWeight: '400',
            textDecoration: 'none',
            paddingLeft: '6px'
        }
    }
  return (
    <div className="InfoStatic" style={_stylesInfo.infoBox}>
        <nav className="box-letras-info" style={_stylesInfo.nav}>
            <a className="info" href="#info" style={_stylesInfo.a}>About</a>
            <a className="info" href="#help" style={_stylesInfo.a}>Help</a>
            <a className="info" href="#press" style={_stylesInfo.a}>Press</a>
            <a className="info" href="#API" style={_stylesInfo.a}>API</a>
            <a className="info" href="#jobs" style={_stylesInfo.a}>Jobs</a>
            <a className="info" href="#privacy" style={_stylesInfo.a}>Privacy</a>
            <a className="info" href="#terms" style={_stylesInfo.a}>Terms</a>
            <a className="info" href="#locations" style={_stylesInfo.a}>Locations</a>
            <a className="info" href="#top" style={_stylesInfo.a}>Top Accounts</a>
            <a className="info" href="#hashtag" style={_stylesInfo.a}>Hashtags</a>
            <a className="info" href="#language" style={_stylesInfo.a}>Language</a>
        </nav>
    </div>
  );
};
export default InfoStatic;
