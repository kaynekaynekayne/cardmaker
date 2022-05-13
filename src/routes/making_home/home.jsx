import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Editor from '../../components/editor/editor';
import Preview from '../../components/preview/preview';
import styles from './home.module.css';

const Home = ({isLoggedIn}) => {

    return(
        <section className={styles.container}>
            <Header isLoggedIn={isLoggedIn}/>
            <div className={styles.content}>
                <Editor/>
                <Preview />
            </div>
            <Footer/>
        </section>
    )
};

export default Home;