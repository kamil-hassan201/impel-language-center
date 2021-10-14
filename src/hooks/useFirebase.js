import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut, GithubAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseAuthInitializer from "../Firebase/firebase.init"
import userEvent from "@testing-library/user-event";
import useCart from "../customHooks/useCart";

firebaseAuthInitializer();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    const auth = getAuth();
    const googleProver = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();


    const signinUsingGoogle = () => {
        return signInWithPopup(auth, googleProver);
    }
    const signinUsingGithub = () => {
        return signInWithPopup(auth, githubprovider);
    }
    const signupUsingEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signinUsingEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
        })
    }, []);


    return {
        user,
        error,
        signinUsingGoogle,
        signinUsingGithub,
        logOut,
        setError,
        setUser,
        signupUsingEmail,
        signinUsingEmail,
        auth
    };

}

export default useFirebase;