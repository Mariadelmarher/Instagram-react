import React from 'react';
import HeaderHome from './Header/HeaderHome';
import PostCard from './Body/PostCard/PostCard';
import StaticBar from './Body/StaticBar/StaticBar';
//import Sidebar from "./Body/BodySidebar/Sidebar"
// import { authentication } from '../../firebase-config';

// import { useNavigate } from 'react-router-dom';

const HomeInstagram = () => {

    /* const history = useNavigate();
    const signOutt = () =>{
        signOut(authentication).then(() => {
          history("/")
        }).catch((err) => {
         console.log(err)
        });
    } */

    const _stylesHomeInstagram ={
        container: {
            display: 'flex',
            justifyContent: 'left',
            margin: '0 auto',
            maxWidth: '1000px',
            backgroundColor: '#fafafa',
            paddingTop:'3em',
            
        },
        main:{
            
        },
        Home:{
            backgroundColor: '#fafafa',

        }
    };

    return (
        <div className='Home-Instagram' style={_stylesHomeInstagram.Home}>
            <HeaderHome />
            <main style={_stylesHomeInstagram.main}>
                <div className="container" style = {_stylesHomeInstagram.container}>
                    <PostCard />
                    <StaticBar />
                </div>
            </main>
        </div>
    );
  };
  
  export default HomeInstagram;