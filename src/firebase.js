import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCFa75GzQ2MJGSXCNdQJCaDOekb_OlJ9SU",
  authDomain: "disney-plus-clone-b19cf.firebaseapp.com",
  projectId: "disney-plus-clone-b19cf",
  storageBucket: "disney-plus-clone-b19cf.appspot.com",
  messagingSenderId: "884604666704",
  appId: "1:884604666704:web:f35a80b18ede40d0d0e255",
  measurementId: "G-B9PT56YV9Q",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
