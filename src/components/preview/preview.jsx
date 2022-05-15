//문제 없으면 지울 파일
import React from 'react';
import styles from './preview.module.css';
import Card from '../card/card';

const Preview = () => {

    return(
        <section className={styles.preview}>
            <p className={styles.title}>Card Preview</p>
        </section>
    );
};

export default Preview;