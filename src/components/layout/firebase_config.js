import firebase from "firebase"
const firebaseConfig = {
  apiKey: "AIzaSyBWcB4PGv8PwP4OL9WlFdaQdbzMJKozJDA",
  authDomain: "eduport-9faee.firebaseapp.com",
  databaseURL: "https://eduport-9faee-default-rtdb.firebaseio.com",
  projectId: "eduport-9faee",
  storageBucket: "eduport-9faee.appspot.com",
  messagingSenderId: "571846764559",
  appId: "1:571846764559:web:c3ce65844c6de908305b7a",
  measurementId: "G-9ZB2XQLPC9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics()
  export const auth = firebase.auth();
export const firestore = firebase.firestore();
export default firebase;
