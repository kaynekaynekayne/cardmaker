import React, { useEffect } from 'react';
import styles from './editForm.module.css';
import { db } from '../../service/firebase';
import {deleteDoc,doc} from 'firebase/firestore'; 

const EditForm = ({card}) => {
    
    const {userName,userCompany,userJob,userTheme,userEmail,userGreeting}=card;

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
            <input className={styles.input} type="text" name="" value={userName} />
            <input className={styles.input} type="text" name="" value={userCompany} />
            <select className={styles.select} value={userTheme}>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="colorful">Colorful</option>
            </select>
            <input className={styles.input} type="text" name="" value={userJob}/>
            <input className={styles.input} type="text" name="" value={userEmail} />
            <textarea className={styles.textarea} name="" value={userGreeting} ></textarea>
            <label htmlFor="file-upload" className={styles.upload}>
                <i className="fa-solid fa-images"></i>
            </label>
            <input id="file-upload" type="file" style={{display:'none'}} />
            <button onClick={()=>{deleteCard(card.id)}} className={styles.button}>
                <i className="fas fa-trash-alt"></i>
            </button>
    </div>
    )
};

export default EditForm;