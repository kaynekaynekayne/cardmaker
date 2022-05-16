import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE='/images/default_logo.png';

const Card = ({card}) => {
    //카드프리뷰 최종애들
    const url=DEFAULT_IMAGE;
    return(
        
        <div className={`${styles.card} ${getStyles(card.userTheme)}`}>
            <img className={styles.avatar} src={url} alt="profile photo"/>
            <div className={styles.info}>
                <h1 className={styles.name}>{card.userName}</h1>
                <p className={styles.company}>{card.userCompany}</p>
                <p className={styles.job}>{card.userJob}</p>
                <p className={styles.email}>{card.userEmail}</p>
                <p className={styles.greeting}>{card.userGreeting}</p>
            </div>
        </div>

    );
};

function getStyles(theme){
    switch(theme){
        case 'dark':
            return styles.dark;
        case 'light':
            return styles.light;
        case 'colorful':
            return styles.colorful;
        default:
            throw new Error(`unknown theme: ${theme}`);
    }
}

export default Card;