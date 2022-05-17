import React, { useState } from 'react';
import styles from './addForm.module.css';
import { db } from '../../service/firebase';
import {addDoc,collection} from 'firebase/firestore';

const AddForm = ({userInfo}) => {

    const [name,setName]=useState('');
    const [company,setCompany]=useState('');
    const [theme,setTheme]=useState('light'); 
    const [job,setJob]=useState('');
    const [email,setEmail]=useState('');
    const [greeting,setGreeting]=useState('');

    const dbRef=collection(db,"cards");
    
    const onSubmit=async(e)=>{
        e.preventDefault();

        try{
            await addDoc(dbRef,{
                userName:name,
                userCompany:company,
                userTheme:theme,
                userJob:job,
                userEmail:email,
                userGreeting:greeting,
                userId:userInfo.uid,
                createdAt:Date.now(),
            })
        }catch(error){
            console.log(error);
        }

        setName("");
        setCompany("");
        setTheme("");
        setJob("");
        setEmail("");
        setGreeting("");
    };

    return(
        <div className={styles.container}>
            <form onSubmit={onSubmit} className={styles.form}>
                <input
                    onChange={(e)=>setName(e.target.value)} 
                    className={styles.input} 
                    type="text" 
                    name="" 
                    value={name}
                    required
                    placeholder="name"
                />
                <input 
                    onChange={(e)=>setCompany(e.target.value)} 
                    className={styles.input} 
                    type="text" 
                    name="" 
                    value={company}
                    required
                    placeholder="company"
                />
                <select onChange={(e)=>setTheme(e.target.value)} value={theme} className={styles.select} name="">
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="colorful">Colorful</option>
                </select>
                <input 
                    onChange={(e)=>setJob(e.target.value)}
                    className={styles.input}
                    type="text" 
                    name=""
                    value={job}
                    required
                    placeholder="job"
                />
                <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    className={styles.input} 
                    type="email"
                    name=""
                    value={email}
                    required
                    placeholder="email"
                />
                <textarea 
                    onChange={(e)=>setGreeting(e.target.value)}
                    className={styles.textarea} 
                    name=""
                    value={greeting}
                    required
                    placeholder="words">
                </textarea>
                <label htmlFor="file-upload" className={styles.upload}>
                    <i className="fa-solid fa-images"></i>
                </label>
                <input 
                    id="file-upload"
                    type="file"
                    style={{display:'none'}}
                />
                <button onSubmit={onSubmit} type="submit" className={styles.button}>
                    <i className="fa-solid fa-plus"></i>
                </button>

            </form>

        </div>

    );
};

export default AddForm;