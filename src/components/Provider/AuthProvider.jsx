import { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/Firebase.config';
export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }


    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // for check is the user is sign in or not? 
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('logged user', loggedUser)
            setUser(loggedUser);
            setLoading(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const handleUpdateProfile = (loggedUser, name, photoUrl) => {

        updateProfile(loggedUser, {
            displayName: name, photoURL: photoUrl
        })
            .then(() => {
                console.log('user name updated');
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    const authInfo = {
        user, createUser, signIn, googleSignIn, handleUpdateProfile, logOut, loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;