import React from 'react';
import styles from './header.module.css';
import { auth } from '../../service/firebase';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = ({isLoggedIn}) => {

    let navigate=useNavigate();

    const onLogout=()=>{
        const ok=window.confirm("로그아웃 하시겠습니까?");
        if(ok){
            signOut(auth)
            .then(()=>{
                navigate("/");
            })
        } else{
            return;
        }
    }

    return(
        <header className={styles.header}>
            {isLoggedIn && (<button className={styles.logout} onClick={onLogout}>
                Logout
            </button>)}
            <img className={styles.logo} src="/images/logo5.png" alt="logo"></img>
            <h1 className={styles.title}>Business Card Maker</h1>
        </header>
    )
};

export default Header;