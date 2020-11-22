import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC9OtDoHP7iOzm7kqWbNwL5WYx0FweXsQk",
    authDomain: "pingu-52f3f.firebaseapp.com",
    databaseURL: "https://pingu-52f3f.firebaseio.com",
    projectId: "pingu-52f3f",
    storageBucket: "pingu-52f3f.appspot.com",
    messagingSenderId: "701255479730",
    appId: "1:701255479730:web:286fee219e7096870974ab"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider}
  export default db