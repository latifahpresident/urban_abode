import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyBFIbjSDM5VpmqbDfg-n-f_GaAc4D-LB2s",
    authDomain: "urban-abode-25825.firebaseapp.com",
    projectId: "urban-abode-25825",
    storageBucket: "urban-abode-25825.appspot.com",
    messagingSenderId: "667331147823",
    appId: "1:667331147823:web:c4b63f832329c81026eeda",
    measurementId: "G-D2B163E4ME"
  };

  // const firebaseConfig = {
  //   apiKey:   process.env.REACT_APP_apiKey,
  //   authDomain:  process.env.REACT_APP_authDomain,
  //   projectId:   process.env.REACT_APP_projectId,
  //   storageBucket:   process.env.REACT_APP_storageBucket,
  //   messagingSenderId: process.env.REACT_APP_messagingSenderId,
  //   appId: process.env.REACT_APP_appId,
  //   measurementId: process.env.REACT_APP_measurementId
  // };
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth();
  
  export default app