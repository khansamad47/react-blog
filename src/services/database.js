
import { handle } from "./firebase";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";

const db = getFirestore(handle);

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

export const addBlog =    (item) => { return addDoc(collection(db, "blogpost"), item); };
export const deleteBlog = (item) => { return deleteDoc(doc(db, "blogpost", item.id)); };