  import * as firebase from 'firebase/app';
  import 'firebase/storage';
  import 'firebase/firestore';
  
  var firebaseConfig = {
    apiKey: "AIzaSyDngTtvnFt4kTzw__t8KkoeQ6X3yegQ5d8",
    authDomain: "ninga-firegram-3fa21.firebaseapp.com",
    databaseURL: "https://ninga-firegram-3fa21.firebaseio.com",
    projectId: "ninga-firegram-3fa21",
    storageBucket: "ninga-firegram-3fa21.appspot.com",
    messagingSenderId: "1007972329315",
    appId: "1:1007972329315:web:eb02bb269f30f2fce41556",
    measurementId: "G-4ETMWV4M4N"
  };
  // Initialize Firebase
  console.log(`firebase.initializeApp at ${new Date().toString().slice(16,24)}`);
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export {
      projectStorage,
      projectFirestore,
      timestamp,
  };
