import { createUserWithEmailAndPassword, onAuthStateChanged,GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config"; 
import useAxiosPublic from "../Hooks/useAxiosPublic";

 
export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user,setUser] =useState()
    const [loading ,setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const singInUser = (email,password) =>{
        setLoading(true)
       return signInWithEmailAndPassword(auth,email,password)
    }

    const GoogleSignIn = ()=>{
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateProfileUser = (name,photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL:photo
          })
    }
    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            if(currentUser){
                // get token and store client
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token)
                    }
                })
            }else{
                // TODO:remove token(if token stored in the client side ,local storage ,caching,in memory) 
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })
        return ()=>{
            unsubscribe
        }
    },[axiosPublic])
    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        GoogleSignIn,
        logOut,
        updateProfileUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;