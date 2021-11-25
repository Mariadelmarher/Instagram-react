import React from "react"

const ProfileStatic = (props) => {

    const _stylesProfileStatic = {
        rowProfile:{
            grande:{
                marginTop: props.margin,
                height:'80px'
            },
            peque:{
                marginTop: props.margin,
                height:'60px'
            },
        },
        targetProfile:{
            grande:{
                height: '56px',
                position: 'relative',
                top: '14%',
                width: '100%',
                display: 'flex'
            },
            peque:{
                height: '56px',
                position: 'relative',
                width: '100%',
                display: 'flex'
            },
        },
        PhotoProfile:{
            grande:{
                display: 'flex',
                position: 'absolute',
                height: '56px',
                width: '66px',
                alignItems:'center',
            },
            peque:{
                display: 'flex',
                position: 'absolute',
                height: '56px',
                width: '45px',
                alignItems:'center',
            },
        },
        NameProfile:{
            grande:{
                display: 'flex',
                position: 'absolute',
                height: '56px',
                width: '167px',
                margin: '0px 0px 0px 66px'
                
            },
            peque:{
                display: 'flex',
                position: 'absolute',
                height: '56px',
                width: '167px',
                margin: '0px 0px 0px 50px'
            },
        },
        ChangeProfile:{
            display: 'flex',
            height: '56px',
            width: '67px',
            margin: '0px 0px 0px 233px',
            float: 'right',
            textAlign: 'right'
        },
        InfouserName:{
            display: 'inline-block',
            height: '40px',
            width: '200px',
            position: 'relative',
            top: '13.5%',
            paddingLeft: '2px'
        },
        apellido:{
            overflow: 'hidden',
            color: '#8e8e8e',
            fontWeight: '400',
            fontSize: '14px',
            display: 'inline'
        },
        nombre:{
            color: '#262626',
            fontWeight: '600',
            textDecoration: 'none',
        },
        cambiar:{
            fontSize: '12px',
            color: '#0095f6',
            marginTop: '20px',
            width: '100%',
            fontWeight: '600',
        },
        text:{
            cursor: 'pointer',
        },
        img:{
            grande:{
                height: '56px',
                width: '56px',
                borderRadius: '50px',
                cursor: 'pointer',
            },
            peque:{
                height: '42px',
                width: '42px',
                borderRadius: '50px',
                cursor: 'pointer',
            },
        },
    };

  return (
    <div className="ProfileStatic" style={_stylesProfileStatic.rowProfile[props.Tamaño]}>
        <div className="target-profile" style={_stylesProfileStatic.targetProfile[props.Tamaño]}>
            <div className="target-foto" style={_stylesProfileStatic.PhotoProfile[props.Tamaño]}>
                <img className="cardImg" src={props.imgprofile} alt="post" style={_stylesProfileStatic.img[props.Tamaño]} />
            </div>
            <div className="target-nombre" style={_stylesProfileStatic.NameProfile[props.Tamaño]}>
                <div className="info-user" style={_stylesProfileStatic.InfouserName}>
                    <div className="user-name" style={_stylesProfileStatic.userName}>
                        <a className="nombre" href="#nombre" style={_stylesProfileStatic.nombre}>{props.nameProfile}</a>
                    </div>
                    <div className="user-lastname" style={_stylesProfileStatic.userLast}>
                        <div className="apellido" style={_stylesProfileStatic.apellido}>
                            {props.textOptionProfile}
                        </div>
                    </div>
                </div>
            </div>
            <div className="change-nombre" style={_stylesProfileStatic.ChangeProfile}>
                <div className="cambiar" style={_stylesProfileStatic.cambiar}><div style={_stylesProfileStatic.text}>{props.Tipo}</div></div>
            </div>
        </div>
    </div>
  );
};
export default ProfileStatic;
