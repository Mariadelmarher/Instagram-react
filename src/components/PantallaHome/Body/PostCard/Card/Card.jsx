import React from "react";
import ProfileIcon from "../../../Profile/ProfileIcon";
import { ReactComponent as Home } from "../../../../IMG/cardButton.svg";
import { ReactComponent as Comment } from "../../../../IMG/comments.svg";
import { ReactComponent as Notification } from "../../../../IMG/notifications.svg";
import { ReactComponent as Inbox } from "../../../../IMG/inbox.svg";
import { ReactComponent as Bookmark } from "../../../../IMG/bookmark.svg";

const Card = (props) => {

    const _stylesCard = {
        card:{
            marginTop: '20px',
            backgroundColor: '#fff',
            border: '1px solid #dbdbdb',
        },
        header:{
            height: '50px',
            borderBottom: '1px solid #dbdbdb',
            display:'flex',
            alignItems: 'center',
        },
        Footer:{
            borderTop: '1px solid #dbdbdb',
        },
        ContImg:{
            maxHeight:'500px',
        },
        img:{
            width:'100%',
            maxHeight:'500px',
            objectFit: 'cover',
        },
        margen:{
            marginLeft: '10px',
        },
        nameUser:{
            marginLeft: '15px',
            color: '#262626',
            fontWeight: '600',
            cursor: 'pointer',
            fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif'
        },
        icon :{
            marginLeft: '76%',
            width: '17px',
            height: '17px',
            cursor: 'pointer',
        },
        IconosMenu:{
            display:'flex',
            alignItems: 'center',
            height: '60px',
        },
        Micon:{
            width: '26px',
            height: '26px',
            marginLeft: '10px',
            cursor: 'pointer',
        },
        likes:{
            marginLeft: '10px',
            cursor: 'pointer',
        },
        bookmark:{
            width: '26px',
            height: '26px',
            marginLeft: '78%',
            cursor: 'pointer',
        },
        Comentarios:{
            height: '50px',
        },
        ComentarioBar:{
            height: '50px',
            width: '100%',
            borderTop: '1px solid #dbdbdb',
            display:'flex',
            alignItems: 'center',
            justifyContent: 'left',
        },
        iconCommentBar:{
            width: '24px',
            height: '24px',
            marginLeft: '10px',
            marginRight: '10px',
            cursor: 'pointer'
        },
        input:{
            backgroundColor: 'transparent',
            height: '25px',
            color: 'gray',
            width: '80%',
            borderStyle: 'none',
            borderRadius: '3px',
            outline: 'none',
        },
        publish:{
            fontSize: '16px',
            color: '#0095f6',
            width: '8%',
            fontWeight: '600',
            textAlign: 'right',
            opacity: '.3',
            cursor: 'context-menu',
            marginLeft:'15px',
        },
    }
    
    return (
        <div className="Card" style={_stylesCard.card}>
        <div className="Header" style={_stylesCard.header}>
            <div style={_stylesCard.margen}></div>
            <ProfileIcon iconSize="mid" image={props.image} />
            <div className="nameUser" style={_stylesCard.nameUser}>{props.nameUser}</div>
            <Home className="icon" style={_stylesCard.icon}/>
        </div>
        <div className="ContImg" style={_stylesCard.ContImg}>
            <img className="cardImg" src={props.cardImg} alt="post" style={_stylesCard.img}/>
        </div>
        <div className="Footer" style={_stylesCard.Footer}>
            <div className="IconosMenu" style={_stylesCard.IconosMenu}>
                <Notification className="Micon" style={_stylesCard.Micon}/>
                <Comment className="Micon" style={_stylesCard.Micon}/>
                <Inbox className="Micon" style={_stylesCard.Micon}/>
                <Bookmark className="Micon" style={_stylesCard.bookmark}/>
            </div>
            <div className="Comentarios" style={_stylesCard.Comentarios}>
                <div className="likes" style={_stylesCard.likes}>{props.likes} likes</div>
                
            </div>
            <div className="ComentarioBar" style={_stylesCard.ComentarioBar}>
                <svg aria-label="Emoji" class="_8-yf5 " style={_stylesCard.iconCommentBar} color="#262626" fill="#262626" height="24" role="img" viewBox="0 0 48 48" width="24"><path d="M24 48C10.8 48 0 37.2 0 24S10.8 0 24 0s24 10.8 24 24-10.8 24-24 24zm0-45C12.4 3 3 12.4 3 24s9.4 21 21 21 21-9.4 21-21S35.6 3 24 3z"></path><path d="M34.9 24c0-1.4-1.1-2.5-2.5-2.5s-2.5 1.1-2.5 2.5 1.1 2.5 2.5 2.5 2.5-1.1 2.5-2.5zm-21.8 0c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5-2.5-1.1-2.5-2.5zM24 37.3c-5.2 0-8-3.5-8.2-3.7-.5-.6-.4-1.6.2-2.1.6-.5 1.6-.4 2.1.2.1.1 2.1 2.5 5.8 2.5 3.7 0 5.8-2.5 5.8-2.5.5-.6 1.5-.7 2.1-.2.6.5.7 1.5.2 2.1 0 .2-2.8 3.7-8 3.7z"></path></svg>
                <input type={"text"} placeholder="Add a Comment..." style={_stylesCard.input}></input>
                <div className="publish" style={_stylesCard.publish}>Post</div>
            </div>
        </div>
    </div>
  );
};

export default Card;
