import React,{useState,useEffect} from 'react';
import styles from './editor.module.css';
import AddForm from '../addForm/addForm';
import EditForm from '../editForm/editForm';
import { db } from '../../service/firebase';
import {onSnapshot,collection,query,orderBy} from 'firebase/firestore';

const Editor = ({userInfo,card}) => {

    const [cards,setCards]=useState([]);
    const dbRef=collection(db,"cards");

    useEffect(()=>{
        const q=query(dbRef,orderBy("createdAt","desc"));
        onSnapshot(q,(snapshot)=>{
            setCards(snapshot.docs.map((doc)=>({...doc.data(),id:doc.id})))
        })
    },[])

    return(
        <section className={styles.editor}>
            <p className={styles.title}>Card Maker</p>
            {cards.map((card)=>(
                <EditForm card={card}/>
            ))}
            <AddForm userInfo={userInfo}/>
            
        </section>
    );
};

export default Editor;