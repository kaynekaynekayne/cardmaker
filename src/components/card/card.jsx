import React from 'react';
import styles from './card.module.css';

const DEFAULT_IMAGE='/images/default_logo.png';

const Card = ({}) => {
    //카드프리뷰 최종애들
    const url=DEFAULT_IMAGE;
    return(
        <div className={styles.card}>
        {/* <div className={`${styles.card} ${getStyles(theme)}`}> */}
            {/* <p className={styles.title}>Card Preview</p> */}
            <img className={styles.avatar} src={url} alt="profile photo"/>
            <div className={styles.info}>
                <h1 className={styles.name}>name</h1>
                <p className={styles.company}>company</p>
                <p className={styles.job}>job</p>
                <p className={styles.email}>email</p>
                <p className={styles.greeting}>greeting</p>
            </div>
        </div>

    );
};

// function getStyles(theme){
//     switch(theme){
//         case 'dark':
//             return styles.dark;
//         case 'light':
//             return styles.light;
//         case 'colorful':
//             return styles.colorful;
//         default:
//             throw new Error(`unknown theme: ${theme}`);
//     }
// }

export default Card;