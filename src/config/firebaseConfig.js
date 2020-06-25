import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

  const config = {
    apiKey: "AIzaSyDpYN8jnObeGb0Xj4MSel7CchvY3CkZk3Y",
    authDomain: "firedux-89c36.firebaseapp.com",
    databaseURL: "https://firedux-89c36.firebaseio.com",
    projectId: "firedux-89c36",
    storageBucket: "firedux-89c36.appspot.com",
    messagingSenderId: "181284906643"
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots:true});

  export default firebase;