import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE='/images/default_logo.png';

const Card = ({card}) => {
    
    const url=DEFAULT_IMAGE;
    const {userName,userCompany,userJob,userTheme,userEmail,userGreeting}=card;
    return(
        
        <div className={`${styles.card} ${makeTheme(userTheme)}`}>
            <img className={styles.avatar} src={url} alt="profile photo"/>
            <div className={styles.info}>
                <h1 className={styles.name}>{userName}</h1>
                <p className={styles.company}>{userCompany}</p>
                <p className={styles.job}>{userJob}</p>
                <p className={styles.email}>{userEmail}</p>
                <p className={styles.greeting}>{userGreeting}</p>
            </div>
        </div>

    );
};

function makeTheme(theme){
    switch(theme){
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            return styles.light;
    }
}

export default Card;