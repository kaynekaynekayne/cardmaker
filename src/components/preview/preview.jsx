import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = ({cards}) => {

    return(
        <section className={styles.preview}>
            <p className={styles.title}>Card Preview</p>
            {cards.map((card)=>(
                <div className={styles.container}>
                    <Card card={card} key={card.id}/>
                </div>
            ))}
        </section>
    );
};

export default Preview;