import React, { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';
import Card from '../../components/card/card';
import AddForm from '../../components/addForm/addForm';
import styles from './home.module.css';
import { db } from '../../service/firebase';
import {onSnapshot,collection,query,orderBy} from 'firebase/firestore';

//메이커 대신 쓰는 중 
const Home = ({isLoggedIn,userInfo}) => {

    const [cards,setCards]=useState([]);
    const dbRef=collection(db,"cards");

    console.log(cards);
    useEffect(()=>{
        const q=query(dbRef,orderBy("createdAt","desc"));
        onSnapshot(q,(snapshot)=>{
            setCards(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
        })
    },[])

    return(
        <section className={styles.container}>
            <Header isLoggedIn={isLoggedIn}/>
            <div className={styles.content}>
                <Editor userInfo={userInfo} cards={cards}/>
                <Preview cards={cards}/>
            </div>
        </section>
    )
};

export default Home;