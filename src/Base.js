import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDRu992-a9owi7VKk5gJFXPfYml19fIVCw",
    authDomain: "very-hot-burgers-a1e6e.firebaseapp.com",
    databaseURL: "https://very-hot-burgers-a1e6e-default-rtdb.firebaseio.com"
})


const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;