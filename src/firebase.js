import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA-shvU57TOaMmjMWjnbGPoJCLg5jNVcXI",
  authDomain: "reactcrm-a6bb5.firebaseapp.com",
  databaseURL: "https://reactcrm-a6bb5-default-rtdb.firebaseio.com",
  projectId: "reactcrm-a6bb5",
  storageBucket: "reactcrm-a6bb5.appspot.com",
  messagingSenderId: "235898438632",
  appId: "1:235898438632:web:b20c450ad95569e6e99a5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Get categoryes from db
export async function getCategories() {
  const q = query(collection(db, "categories"));

  const querySnapshot = await getDocs(q);
  // querySnapshot.forEach((doc) => {
  //   // doc.data() is never undefined for query doc snapshots
  //   console.log(doc.id);
  // });

  return querySnapshot;
}