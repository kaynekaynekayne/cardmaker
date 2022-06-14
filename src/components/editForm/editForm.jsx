import React, { useState,useEffect } from 'react';
import styles from './editForm.module.css';
import { db } from '../../service/firebase';
import {deleteDoc,doc,updateDoc} from 'firebase/firestore'; 

const EditForm = ({card,userInfo}) => {
    
    const {userName,userCompany,userJob,userTheme,userEmail,userGreeting}=card;
    
    const [newName,setNewName]=useState(userName);
    const [newCompany,setNewCompany]=useState(userCompany);
    const [newTheme,setNewTheme]=useState(userTheme); 
    const [newJob,setNewJob]=useState(userJob);
    const [newEmail,setNewEmail]=useState(userEmail);
    const [newGreeting,setNewGreeting]=useState(userGreeting);

    const updateCard=async(id)=>{
        const cardRef=doc(db,"cards",id);
        try{
            await updateDoc(cardRef,{
                userName:newName,
                userCompany:newCompany,
                userTheme:newTheme,
                userJob:newJob,
                userEmail:newEmail,
                userGreeting:newGreeting,
                userId:userInfo.uid,
                createdAt:Date.now(),
            })
        }catch(error){
            console.log(error)
        }
    }

    const deleteCard=async(id)=>{
        const cardRef=doc(db,"cards",id);
        const ok=window.confirm('삭제하시겠습니까?');
        if(ok){
            await deleteDoc(cardRef);
        } else{
            return;
        }
    }

    
    return(
        <div className={styles.form}>
            <input
                onChange={(e)=>setNewName(e.target.value)} 
                className={styles.input} 
                type="text" 
                name="" 
                value={newName} 
            />
            <input 
                onChange={(e)=>setNewCompany(e.target.value)} 
                className={styles.input} 
                type="text" 
                name="" 
                value={newCompany} 
            />
            <select 
                onChange={(e)=>setNewTheme(e.target.value)} 
                className={styles.select} 
                value={newTheme}
            >
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input 
                onChange={(e)=>setNewJob(e.target.value)}
                className={styles.input} 
                type="text" 
                name="" 
                value={newJob}
            />
            <input
                onChange={(e)=>setNewEmail(e.target.value)} 
                className={styles.input} 
                type="text" 
                name="" 
                value={newEmail} 
            />
            <textarea 
                onChange={(e)=>setNewGreeting(e.target.value)}
                className={styles.textarea} 
                name=""
                value={newGreeting} >
            </textarea>
            
            {/* <label htmlFor="file-upload" className={styles.upload}>
                <i className="fa-solid fa-images"></i>
            </label>
            <input 
                id="file-upload" 
                type="file" 
                style={{display:'none'}} 
            /> */}
            <button onClick={()=>{updateCard(card.id)}} className={styles.upload}>
                UPDATE
            </button>

            <button onClick={()=>{deleteCard(card.id)}} className={styles.button}>
                <i className="fas fa-trash-alt"></i>
            </button>
    </div>
    )
};

export default EditForm;