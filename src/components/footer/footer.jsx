import React from 'react';
import styles from './footer.module.css';

const Footer=()=>{
    const date=new Date;
    const newYear=date.getFullYear();
    return(
        <footer className={styles.footer}>
            <p className={styles.title}>NEW CARD MACHINE OF {newYear}</p>
        </footer>
    )
};


export default Footer;