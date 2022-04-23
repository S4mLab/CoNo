// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getFirestore,
  collection,
  getDocs,
  setDocs,
  doc,
  query,
  where,
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBlO9LlntehL9dp-7kltpt2cfacwBqmfzo',
  authDomain: 'cono-1b069.firebaseapp.com',
  projectId: 'cono-1b069',
  storageBucket: 'cono-1b069.appspot.com',
  messagingSenderId: '633049531450',
  appId: '1:633049531450:web:b018b00ae575196c2f6103',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// initialise the db
const db = getFirestore(app);

// ----------query--------------
// create a ref to the majors collection
const majorsRef = collection(db, 'majors');

// create a query to collection
const response = query(majorsRef, where('name', '==', 'data science'));

const querySnapshot = await getDocs(response);
querySnapshot.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data());
});

await setDoc(doc(db, "users"))
// 
