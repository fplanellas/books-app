import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

export const loadBooks = async (uid = "") => {
    const collectionRef = collection(FirebaseDB, `${uid}/books/notes`);
    const docs = await getDocs(collectionRef);

    const books = [];

    docs.forEach((doc) => {
        books.push({ id: doc.id, ...doc.data() });
    });

    return books;
};
