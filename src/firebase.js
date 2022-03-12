import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-shvU57TOaMmjMWjnbGPoJCLg5jNVcXI",
  authDomain: "reactcrm-a6bb5.firebaseapp.com",
  databaseURL: "https://reactcrm-a6bb5-default-rtdb.firebaseio.com",
  projectId: "reactcrm-a6bb5",
  storageBucket: "reactcrm-a6bb5.appspot.com",
  messagingSenderId: "235898438632",
  appId: "1:235898438632:web:b20c450ad95569e6e99a5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export async function getCollection(name) {
  return getDocs(query(collection(db, name)));
}

// var products = [];

// async function getAllProducts(name) {
//   var res = await getCollection(name);
//   if (res.empty) {
//     products.push(name);
//     return;
//   }
//   res.docs.forEach((el) => {
//     getAllProducts(el.id);
//   });
// }
