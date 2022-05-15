import React from 'react';
import styles from './editor.module.css';
import InputForm from '../inputForm/inputForm';

const Editor = ({card}) => {


    return(
        <section className={styles.editor}>
            <p className={styles.title}>Card Maker</p>
            
            <div className={styles.form}>
                <input className={styles.input} type="text" name="" placeholder="name"/>
                <input className={styles.input} type="text" name="" placeholder="company"/>
                <select className={styles.select} name="" >
                    <option value="light">Light</option>
                    <option value="dark">Dark</option>
                    <option value="colorful">Colorful</option>
                </select>
                <input className={styles.input} type="text" name="" placeholder="job"/>
                <input className={styles.input} type="text" name="" placeholder="email"/>
                <textarea className={styles.textarea} name="" placeholder="words"></textarea>
                <label htmlFor="file-upload" className={styles.upload}>
                    <i className="fa-solid fa-images"></i>
                </label>
                <input id="file-upload" type="file" style={{display:'none'}}/>
                <button className={styles.button}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>
            
            <InputForm />
            
        </section>
    );
};

export default Editor;