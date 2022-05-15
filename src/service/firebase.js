import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider,GithubAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKvUMRCWNJ6SGscG4OJHQut7aHSiuBzOM",
  authDomain: "business-card-maker-496c4.firebaseapp.com",
  projectId: "business-card-maker-496c4",
  storageBucket: "business-card-maker-496c4.appspot.com",
  messagingSenderId: "161426763567",
  appId: "1:161426763567:web:2d70822f28e94ca6403bda",
  measurementId: "G-EJHV9EGKE5"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db=getFirestore(app);

export const googleProvider=new GoogleAuthProvider;
export const githubProvider=new GithubAuthProvider;
