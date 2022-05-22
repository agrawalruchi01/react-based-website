import { createContext, useState, useEffect } from 'react';
import {createUserDocumentFromAuth, onAuthStateChangedListener} from '../utils/firebase/firebase.utils'

export const UserContext = createContext({
    currentUser: null,
    setCurrentUser:() => null,
});

export const UserProvider = ({children}) => {
    const [currentUser, setNewCurrentUser] = useState(null);
    const value ={currentUser, setNewCurrentUser};

    useEffect(() =>{
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            } 
            setNewCurrentUser(user);
            
        });
        return unsubscribe;
    }, []);
   return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}


