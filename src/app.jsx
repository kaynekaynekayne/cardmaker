import React, { useState,useEffect } from 'react';
import Home from './routes/making_home/home';
import Login from './components/login/login';
import AppRouter from './Router';
import styles from './app.module.css';
import {auth} from './service/firebase';
import {onAuthStateChanged} from 'firebase/auth';

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      if(user){
        setIsLoggedIn(true);
      } else{
        setIsLoggedIn(false);
      }
    })
  },[])

  return (
    <div className={styles.app}>
      <AppRouter isLoggedIn={isLoggedIn}/>
    </div>
  );
}

export default App;
