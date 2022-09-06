import { handle } from "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

// Authentication
const provider = new GoogleAuthProvider();
export const auth = getAuth(handle);
export const createLoginPopup = () => { return signInWithPopup(auth, provider); };
export const logoutUser       = () => { return signOut(auth); };
export const getCurrentUserId = () => { 
    try {
        return getAuth().currentUser.uid; 
    }
    catch {
        return 0;
    }
};