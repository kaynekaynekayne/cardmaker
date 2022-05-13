import React from 'react';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './login.module.css';
import {googleProvider,githubProvider,auth} from '../../service/firebase';
import {signInWithPopup} from 'firebase/auth';

const Login = () => {

  const onLogin=(e)=>{
    const {name}=e.target;
    if(name==="google"){
      signInWithPopup(auth,googleProvider)
    } else{
      signInWithPopup(auth,githubProvider)
    }
    
  }

  return (
    <section className={styles.login}>
      <Header />
      <section>
        <h3>Login</h3>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button className={styles.button} name="google" onClick={onLogin}>Google</button>
          </li>
          <li className={styles.item}>
            <button className={styles.button} name="github" onClick={onLogin}>Github</button>
          </li>
        </ul>
      </section>
      <Footer />
    </section>
  )
}

export default Login;