import React from 'react';
import logo from "../../IMG/instagramLogo.png";
import searchIcon from "../../IMG/searchIcon.png";
import Menu from "./Menu";

const HeaderHome = () => {

    const _stylesHeaderHome = {
        Header: {
            position: 'fixed',
            top: '0',
            zIndex: '2',
            backgroundColor: '#fff',
            width: '100%',
            borderBottom: '1px solid #dbdbdb',
        },
        container:{
            padding: '1em 0 0.9em 0',
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '1000px',
            margin: '0 auto',
        },
        logo:{
            width: '100px',
            cursor: 'pointer',
        },
        search:{
            border: '1px solid #dbdbdb',
            borderRadius: '3px',
            backgroundColor: '#fafafa',
            minWidth: '219px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'left',
            marginLeft: '1.5em'

        },
        searchIcon:{
            width: '10px',
            opacity: '0.4',
            marginRight: '0.3em',
            marginLeft: '0.7em',
        },
        searchText:{
            color: '#8e8e8e',
            fontSize: '0.85em',
            fontWeight: '300',
            border: 'none',
            outline: 'none',
            backgroundColor:'#0000',
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
        },
      };

    return (
        <div className="Header" style = {_stylesHeaderHome.Header}>
            <div className="container" style = {_stylesHeaderHome.container}>
                <img className="logo" src={logo} alt="instagram logo" style = {_stylesHeaderHome.logo}/>
                <div className="search" style = {_stylesHeaderHome.search}>
                    <img className="searchIcon" src={searchIcon} alt="search icon" style = {_stylesHeaderHome.searchIcon}/>
                    <input type={"text"} placeholder="Search" style = {_stylesHeaderHome.searchText}></input>
                </div>
                <Menu />
            </div>
        </div>
    );
  };
  
  export default HeaderHome;