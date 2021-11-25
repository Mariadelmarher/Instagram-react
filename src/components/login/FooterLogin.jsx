import React from "react"
const FooterLogin = () => {
  return (
    <div className="FooterLogin" style={{..._styleFooterLogin.footer}}>
        <div className="row1" style={{..._styleFooterLogin.row1}}>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="meta" href="meta" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Meta</div>
                </a>    
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="Información" href="Información" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Información</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="Empleo" href="Empleo" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Empleo</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="ayuda" href="ayuda" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Ayuda</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="api" href="api" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>API</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="Privacidad" href="privacidad" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Privacidad</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="condiciones" href="condiciones" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Condiciones</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="Cuentas" href="cuentas" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Cuentas destacadas</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="hastag" href="hashtag" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Hashtags</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="ubicaciones" href="ubicaciones" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Ubicaciones</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="insta" href="insta" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Instagram Lite</div>
                </a>
            </div>
        </div>

        <div className="row2" style={{..._styleFooterLogin.row1}}>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="belleza" href="belleza" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Belleza</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="danza" href="danza" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Danza</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="fit" href="fit" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Fitness</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="comi" href="comi" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Comida y bebida</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="casa" href="casa" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Casa y jardín</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="musica" href="musica" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Música</div>
                </a>
            </div>
            <div style={{..._styleFooterLogin.cajitas}}>
                <a className="arte" href="arte" style={{..._styleFooterLogin.a}}>
                    <div style={{..._styleFooterLogin.megacajitas}}>Arte</div>
                </a>
            </div>
        </div>
    </div>
  );
};

const _styleFooterLogin = {
    footer:{
        margin: '0px 350.5px 0px 294px'
    },
    row1:{
        webkitBoxPack: 'center',
        justifyContent: 'center',
        webkitBoxOrient: 'horizontal',
        webkitBoxDirection: 'normal',
        flexDirection: 'row',
        flexWrap: 'wrap',
        webkitBoxFlex: '0',
        flex: '0 0 auto',
        webkitBoxAlign: 'stretch',
        alignItems: 'stretch',
        alignContent: 'stretch',
        display: 'flex'
    },
    cajitas:{
        marginRight: '8px',
        marginLeft: '8px',
        marginBottom: '12px',
        flex: '0 0 auto',
        alignContent: 'stretch',
        display: 'flex',
        textDecoration: 'none',
        paddingLeft: '12px',
    },
    megacajitas:{
        display: 'block',
        color: '#8e8e8e',
        fontWeight: '400',
        fontSize: '12px',
        lineHeight: '16px',
        margin: '2px 0 3px',
    },
    a:{
        textDecoration: 'none'
    }
}

export default FooterLogin;
