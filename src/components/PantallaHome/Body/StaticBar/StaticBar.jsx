import React from "react"
import Profile from "../../../IMG/profile.jpg";
import ProfileStatic from "./ProfileStatic/ProfileStatic";
import InfoStatic from "./InfoStatic";
const StaticBar = () => {

    const _stylesBarStatic = {
        column:{
            width: '300px',
            position: 'fixed',
            marginLeft: '700px',
            paddingLeft:'13px'
        },
        boxFollow:{
            backgroundColor: '#fafafa',
            marginTop: '0',
        },
        boxInfo:{
            backgroundColor: '#fafafa',
            height: '124px',
            marginTop: '8px'
        },
        suggstions:{
            width: '100%',
            display:'flex',
            marginBottom: '13px',
            marginTop: '13px'
        },
        span:{
            width: '80%',
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
            fontWeight:'600',
            color: '#8e8e8e',
            fontSize: '14px',
            
        },
        span2:{
            width: '20%',
            textAlign: 'right',
            color: '#262626',
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
            fontWeight: '600',
            fontSize: '12px',
            cursor:'pointer',
        }
    }

  return (
    <div className="StaticBar" style={_stylesBarStatic.column}>
        <ProfileStatic imgprofile = {Profile} nameProfile = 'Mar123' textOptionProfile = 'Maria del mar Hernandez' margin = '52px' Tipo = "Switch" Tamaño = "grande"/>
        <div className="box-follow" style={_stylesBarStatic.boxFollow}>
            <div className="Suggestions" style={_stylesBarStatic.suggstions}>
                <div className="span" style={_stylesBarStatic.span} >Suggestions For You</div>
                <div className="span2" style={_stylesBarStatic.span2} >See All</div>
            </div>
            <ProfileStatic imgprofile = {'https://picsum.photos//299/451'} nameProfile = 'TuSimpFavorito' textOptionProfile = 'followed by SniperMonkye' margin = '0' Tipo = "Follow" Tamaño = "peque"/>
            <ProfileStatic imgprofile = {'https://picsum.photos//299/462'} nameProfile = 'Haluca' textOptionProfile = 'followed by AstroHaluca' margin = '0' Tipo = "Follow" Tamaño = "peque"/>
            <ProfileStatic imgprofile = {'https://picsum.photos//299/465'} nameProfile = 'Naho' textOptionProfile = 'followed by Naho' margin = '0' Tipo = "Follow" Tamaño = "peque"/>
            <ProfileStatic imgprofile = {'https://picsum.photos//299/456'} nameProfile = 'pepe' textOptionProfile = 'followed by pepe' margin = '0' Tipo = "Follow" Tamaño = "peque"/>
            <ProfileStatic imgprofile = {'https://picsum.photos//299/458'} nameProfile = 'Chogat' textOptionProfile = 'followed by Chogat' margin = '0' Tipo = "Follow" Tamaño = "peque"/>
        </div>
        <div className="box-info" style={_stylesBarStatic.boxInfo}>
            <InfoStatic/>
        </div>
    </div>
  );
};
export default StaticBar;

