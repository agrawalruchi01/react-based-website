import  { initializeApp } from 'firebase/app';
import { getAuth, 
         signInWithRedirect, 
         signInWithPopup, 
         GoogleAuthProvider,
         createUserWithEmailAndPassword,
         signInWithEmailAndPassword,
         signOut,
         onAuthStateChanged
         } from 'firebase/auth';

import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCOAmud0wBbN6KZlPy4I7zi3NKD3jZaBjA",
    authDomain: "crwn-clothing-db-15330.firebaseapp.com",
    projectId: "crwn-clothing-db-15330",
    storageBucket: "crwn-clothing-db-15330.appspot.com",
    messagingSenderId: "724063351140",
    appId: "1:724063351140:web:8d7c153cf6597aa5180a71"
  };
  
  // Initialize Firebase
  const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();

  googleProvider.setCustomParameters({
      prompt: "select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopUp = () => signInWithPopup(auth, googleProvider);
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);
  
  export const db = getFirestore();
  export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
      if (!userAuth) return;

     const userDocRef = doc(db, 'users', userAuth.uid);
     console.log(userDocRef);

     const userSnapshot = await getDoc(userDocRef);
     console.log(userSnapshot);

     if(!userSnapshot.exists()) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef,
                {displayName,
                email,
                createdAt,
                ...additionalInformation});
        } catch (error) {
            console.log("error creating the user", error.message)
        }
     } 

     return userDocRef;
  }

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
      if (!email || !password) return;
     return await createUserWithEmailAndPassword(auth, email, password);

  }

  export const signInWithManualUserNameandPassword = async (email, password) => {
    if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password);

}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListener = (callback) => {
    if (!callback) return;
    onAuthStateChanged(auth, callback);
}