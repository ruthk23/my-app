import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
	apiKey: "AIzaSyBnLMsj3kssnwu0U7RVxf1LQLGdev6k8Wg",
	authDomain: "fir-3498b.firebaseapp.com",
	projectId: "fir-3498b",
	storageBucket: "fir-3498b.appspot.com",
	messagingSenderId: "910426167678",
	appId: "1:910426167678:web:01a3531cca619b6b437b2f",
	measurementId: "G-GFT75PH4N0",
}
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
