import React from "react";
import Card from "./Card/Card";
import News from "./News/News";

const PostCard = () => {

    const _stylesPostCard = {
        PostCard:{
            width: '68%',
            backgroundColor: '#fafafa',
        },
        BarStory:{
            width:'100%',
            height: '125px',
            backgroundColor: '#fff',
            border: '1px solid #dbdbdb',
            marginTop: '40px',
            display:'flex',
            overflowY: 'hidden',
            overflowX: 'hidden',
            outline: '0',
            
        },
        story:{
            width:'100%',
            height: '100%',
        },
    };

  return (
    <div className="PostCard" style={_stylesPostCard.PostCard}>
        <div className="BarStory" style={_stylesPostCard.BarStory}>
            <News nameUser='Juanjose' imgUser='https://picsum.photos//299/450'/>
            <News nameUser='MaresMar' imgUser='https://picsum.photos//299/452'/>
            <News nameUser='Jhonny' imgUser='https://picsum.photos//299/454'/>
            <News nameUser='Cuscusua' imgUser='https://picsum.photos//295/456'/>
            <News nameUser='MaresMar' imgUser='https://picsum.photos//295/452'/>
            <News nameUser='Jhonny' imgUser='https://picsum.photos//294/454'/>
            <News nameUser='Cuscusua' imgUser='https://picsum.photos//249/456'/>
            <News nameUser='Jhonny' imgUser='https://picsum.photos//299/454'/>
            <News nameUser='Cuscusua' imgUser='https://picsum.photos//249/456'/>
            <News nameUser='Cuscusua' imgUser='https://picsum.photos//249/456'/>
        </div>
        <div className="Storys" style={_stylesPostCard.story}>
            <Card cardImg='https://picsum.photos//249/449' nameUser='Hellsing' likes = '3,521' image = "https://picsum.photos//299/454"/>
            <Card cardImg='https://picsum.photos//249/448' nameUser='HellDog' likes = '45,342' image = "https://picsum.photos//299/451"/>
            <Card cardImg='https://picsum.photos//249/447' nameUser='HellBoss' likes = '35,221' image = "https://picsum.photos//299/452"/>
            <Card cardImg='https://picsum.photos//249/446' nameUser='Nightmare' likes = '21' image = "https://picsum.photos//299/453"/>
            <Card cardImg='https://picsum.photos//249/439' nameUser='Hellsing' likes = '3,521' image = "https://picsum.photos//299/454"/>
            <Card cardImg='https://picsum.photos//249/438' nameUser='HellDog' likes = '45,342' image = "https://picsum.photos//299/451"/>
            <Card cardImg='https://picsum.photos//249/437' nameUser='HellBoss' likes = '35,221' image = "https://picsum.photos//299/452"/>
            <Card cardImg='https://picsum.photos//249/436' nameUser='Nightmare' likes = '21' image = "https://picsum.photos//299/453"/>
            <Card cardImg='https://picsum.photos//249/435' nameUser='Hellsing' likes = '3,521' image = "https://picsum.photos//299/454"/>
            <Card cardImg='https://picsum.photos//249/434' nameUser='HellDog' likes = '45,342' image = "https://picsum.photos//299/451"/>
            <Card cardImg='https://picsum.photos//249/433' nameUser='HellBoss' likes = '35,221' image = "https://picsum.photos//299/452"/>
            <Card cardImg='https://picsum.photos//249/432' nameUser='Nightmare' likes = '21' image = "https://picsum.photos//299/453"/>
        </div>
    </div>
  );
};
export default PostCard;
