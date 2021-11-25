import React from "react";
import celus from "../IMG/celus.png";
import logo2 from "../IMG/logo2.png";
import fotocelu from "../IMG/celufoto.jpg"
import { authentication } from '../../firebase-config';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import FooterLogin from "./FooterLogin";


const Login = () => {

    const history = useNavigate();
    const signInGoogle = () =>{
      const provider = new GoogleAuthProvider();
        signInWithPopup(authentication, provider)
        .then((re) =>{
          console.log(re);
          history("/home")
        })
        .catch((error) =>{
          console.log(error);
        })
    }

  return (
    <div className="Login" style={{..._stylesLogin.back}}>
        <div className="row" style={{..._stylesLogin.row}}>
            <div className="column-left" style={{..._stylesLogin.column}}>
                <div className="left-container" style={{..._stylesLogin.cellphone}}>
                    <img src={celus} alt="no carga">
                    </img>
                    <div className="celu-pic" style={{..._stylesLogin.fotocelu}}>
                        <img src={fotocelu} alt="no carga" style={{..._stylesLogin.imgcelu}}></img>
                    </div>
                </div>
            </div>
            <div className="column-right" style={{..._stylesLogin.column}}>
                <div className="right-container" style={{..._stylesLogin.right}}>
                    <div className="box" style={{..._stylesLogin.box, ..._stylesLogin.box1}}>
                        <img src={logo2} alt="no carga" style={{ ..._stylesLogin.img }}></img>
                        <input type={"text"} placeholder="Teléfono, usuario o correo electrónico" style={{..._stylesLogin.input}}></input>
                        <input type={"text"} placeholder="Contraseña" style={{..._stylesLogin.input}}></input>
                        <div className="sign-up" style={{..._stylesLogin.signUp}}>
                            Iniciar Sesión 
                        </div>
                        <div className="or" style={{..._stylesLogin.or}}>O
                        </div>
                        <GoogleButton style={{..._stylesLogin.button}} onClick={() => {signInGoogle()}}>
                        </GoogleButton>
                        <a className="btn" href="#Olvidaste" style={{..._stylesLogin.letra,..._stylesLogin.a}}>¿Olvidaste tu contraseña?</a>
                    </div>
                    <div className="box" style={{..._stylesLogin.box, ..._stylesLogin.box2}}>
                        ¿No tienes una cuenta?
                        <a className="bla" href="#registrarte" style={{..._stylesLogin.letra,..._stylesLogin.b}}>Regístrate</a>
                    </div>
                </div>
            </div>
        </div>
        <FooterLogin></FooterLogin>
    </div>
  );
};

const _stylesLogin = {
    back: {
        backgroundColor: '#fafafa',
        height: '100vh'
    },
    row: {
        display: 'flex'
    },
    column: {
        float: 'left',
        width: '50%',
        display: 'inline-block',
        overflow: 'auto',
        padding: '0px 0px 100px 0px'
    },
    cellphone: {
        float: 'right',
        margin: '130px 0px 0px 0px',
        position: 'relative'
    },
    right:{
        width: '280px'
    },
    box: {
        float: 'left',
        width: '300px',
        padding: '30px',
        border: '1px solid lavender',
        backgroundColor: 'white',
        textAlign: 'center',
        margin: '150px 10px 5px 20px',
        display: 'flex',
        alignItems:'center',
        justifyContent: 'center',
    },
    box1:{        
        flexDirection: 'column'
    },
    box2:{
        margin: '8px 10px 5px 20px',        
        padding: '25px 30px 25px 30px',
    },
    img:{
        width: '60%',
        margin: '0px',
        padding: '0px 10px 30px 10px'
    },
    h3:{
        margin: '10px 0px',
        color: 'darkgray',
        fontWeight: '600',
        fontSize:'17px',
        // eslint-disable-next-line no-dupe-keys
        margin: '0px 10px 20px 0px'
    },
    button:{
        textAlign: 'center',
        padding: '2px',
        margin: '10px',
        alignItems:'center',
        borderRadius: '5px'
    },
    input:{
        backgroundColor: '#fafafa',
        color: 'gray',
        width: '85%',
        border: '1px solid whitesmoke',
        borderRadius: '3px',
        padding: '10px',
        margin: '5px 0px',
        outline: 'none',
    },
    signUp:{
        backgroundColor: 'dodgerblue',
        color: 'white',
        fontWeight: '500',
        textAlign: 'center',
        borderRadius: '5px',
        padding: '7px',
        margin: '10px',
        width: '85%',
        fontSize: '15px',
        opacity: '.3',
        cursor: 'context-menu'
    },
    or:{
        width: '100px',
        display: 'inline-block',
        color: 'gray',
        overflow: 'visable',
        margin: '10px 40px 15px'
    },
    letra:{
      float: 'left',
      textAlign: 'center',
      textDecoration: 'none',
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", 
      borderRadius:'24px',
      whiteSpace: 'nowrap',
    },
    a:{
      color: '#03045e',
      padding: '14px 14px 0px 14px',
      fontSize: '13px',
      fontWeight: '400',
    },
    b:{
      color: 'dodgerblue',
      paddingLeft: '4px',
      fontSize: '15px',
      fontWeight: '600',
      display: 'inline',
      margin: '0'
    },
    fotocelu:{
        position: 'absolute',
        top: '100px',
        right: '63px',
    },
    imgcelu:{
        width:'240px'
    }
}

export default Login;
