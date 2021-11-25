import React from "react"


const News = (props) => {

    const _stylesNews = {
        img:{
            width: '60px',
            height:'60px',
            borderRadius: '50px',
            border: '2px solid #fff',
        },
        news:{
            height:'100%',
            display: 'flex',
            alignItems:'center',
        },
        contImg:{
            marginLeft: '15px',
            width: 'auto',
            height:'auto',
            cursor: 'pointer',
            textAlign: 'center',
        },
        cImg:{
            display: 'flex',
            justifyContent: 'center',
            borderRadius: '50px',
            width: '64px',
            height:'auto',
            border: '2px solid #0f0',
        },
        span:{
            textOverflow: 'ellipsis',
            color: '#000',
            fontSize: '0.75em',
            fontWeight: '400',

        }
    };

  return (
    <div className="News" style={_stylesNews.news}>
        <div className="contImg" style={_stylesNews.contImg}>
            <div className ="cImg" style={_stylesNews.cImg}>
                <img className="searchIcon" src={props.imgUser} alt="search icon" style={_stylesNews.img}/>
            </div>
            <span style={_stylesNews.span} >{props.nameUser}</span>
        </div>
    </div>
  );
};
export default News;
