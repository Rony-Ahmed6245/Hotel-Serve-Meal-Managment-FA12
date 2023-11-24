import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";








export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider()


const AuthProvider = ({children }) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true)


    // register part
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
          
    }

    // logIn 
    const logIn = (email, password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password);
        
    }

    // user manage with observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('user', currentUser, user);
            setUser(currentUser);
            setloading(false)
        });
        return () => {
            unSubscribe();
        }

    }, [])

    // logout 
    const logOut =()=>{
        setloading(true)
        return signOut(auth)
        .then(result => {
            console.log(result);
        })
        .catch(err => {
            console.log(err);
        })
    }

    const googleSignIn = () =>{
        setloading(true)
       return signInWithPopup(auth, provider)

    }
    const authInfo = {
        user,
        createUser,
        logIn,
        logOut ,
        loading,
        googleSignIn
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;