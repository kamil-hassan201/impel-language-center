import firebaseConfig from "./firebase.conf"
import { initializeApp } from "firebase/app";

const firebaseAuthInitializer = () => {
    initializeApp(firebaseConfig);
}

export default firebaseAuthInitializer;