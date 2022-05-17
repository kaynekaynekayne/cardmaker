import React,{useState,useEffect} from 'react';
import styles from './editor.module.css';
import AddForm from '../addForm/addForm';
import EditForm from '../editForm/editForm';
import { db } from '../../service/firebase';
import {onSnapshot,collection,query,orderBy} from 'firebase/firestore';

const Editor = ({userInfo,cards}) => {

    // const onChange=(e)=>{

    // }
    
    return(
        <section className={styles.editor}>
            <p className={styles.title}>Card Maker</p>
            <div className={styles.container}>
                {cards.map((card)=>(
                    <EditForm card={card} key={card.id}/>
                ))}
                <AddForm userInfo={userInfo}/>
            </div>
            
        </section>
    );
};

export default Editor;