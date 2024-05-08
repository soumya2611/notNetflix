// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword,
     getAuth,
      signInWithEmailAndPassword, 
      signOut} from "firebase/auth";

import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCrpchQHQ3LrJZc6W-FwyhGuf_NntoBGeM",
  authDomain: "netflix-clone-e0678.firebaseapp.com",
  projectId: "netflix-clone-e0678",
  storageBucket: "netflix-clone-e0678.appspot.com",
  messagingSenderId: "387040793045",
  appId: "1:387040793045:web:14e0724ea388f16fa66d5c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);
const signup =async(name,email,password)=>{
  try {
const res= await createUserWithEmailAndPassword(auth,email, password);
const user =res.user;
await addDoc(collection(db,"user"),{
    uid:user.uid,
    email,
    name,
    authProvider:"local"
})
  }
  catch(error){
    console.log(error)
    if (typeof error.code === 'string') {
        toast.error(error.code.split('/')[1].split('-').join(' '));
    } else {
        toast.error('An error occurred');
    }
}
}
const login = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error)
        if (typeof error.code === 'string') {
            toast.error(error.code.split('/')[1].split('-').join(' '));
        } else {
            toast.error('An error occurred');
        }
    }
}
const logout=()=>{
    signOut(auth);
}
export { auth,db,signup,login,logout};