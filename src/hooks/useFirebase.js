import { getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState();
    const [error,setError] = useState();
    const [isLoading,setIsLoading] = useState(true);
    const auth = getAuth();


    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user)
            }).catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    //Observe user state change
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
            } else {
              setError({})
            }
            setIsLoading(false);
          });
          return () => unsubscribe;
    },[])


    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
        .then(() => {
            setUser({})
          })
          .catch((error) => {
            setUser(error.message)
        })
        .finally(() => setIsLoading(false))
    }


    return {
        user,
        signInUsingGoogle,
        logOut,
        isLoading
    }
}

export default useFirebase;