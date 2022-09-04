// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxdUxR2TqWxGdh-8NSUGCOhqSLFtS5CPE",
  authDomain: "blog-4a8de.firebaseapp.com",
  projectId: "blog-4a8de",
  storageBucket: "blog-4a8de.appspot.com",
  messagingSenderId: "65250224132",
  appId: "1:65250224132:web:30a57b0bbc037025c5ed51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
export const createLoginPopup = () => { return signInWithPopup(auth, provider); };
export const getCurrentUserId = () => { return getAuth().currentUser.uid; };

// Firestore (Database)
const db = getFirestore(app);

export const getAllBlogs = async () => {
    try {
        const response = await getDocs(collection(db, "blogpost"))
        const results = response.docs.map((item) => { return {id: item.id, ...item.data() }; })
        return results;
    }
    catch(error)
    {
        console.log(error);
        return [];
    }
};

export const addBlog = async (item) => {
    console.log("Store in DB ", item);
    try {
        const response = await addDoc(collection(db, "blogpost"), item);
        console.log(response);
    }
    catch(error) {
        console.log(error);
        return error;
    }
};