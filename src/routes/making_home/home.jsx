import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';
import Card from '../../components/card/card';
import styles from './home.module.css';

//메이커 대신 쓰는 중 
const Home = ({isLoggedIn}) => {

    const [cards,setCards]=useState([]);
    useState(()=>{
    },[])

    return(
        <section className={styles.container}>
            <Header isLoggedIn={isLoggedIn}/>
            <div className={styles.content}>
                <Editor />
                <Card />
                {/* {cards.map((card)=>(
                    <>
                        <Editor card={card}/>
                        <Card card={card}/>
                    </>
                ))} */}
            </div>
        </section>
    )
};

export default Home;