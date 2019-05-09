  import firebase from 'firebase/App'
  import firestore from 'firebase/firestore'
  

 var firebaseConfig = {
    apiKey: "AIzaSyDgvlVg7FdpGJGisYWe-fzI8socw1nfI2M",
    authDomain: "mark-smoothie.firebaseapp.com",
    databaseURL: "https://mark-smoothie.firebaseio.com",
    projectId: "mark-smoothie",
    storageBucket: "mark-smoothie.appspot.com",
    messagingSenderId: "265260102470",
    appId: "1:265260102470:web:0afdde513dad0c72"
 };

    // Initialize Firebase
 const firebaseApp =  firebase.initializeApp(firebaseConfig);

 firebaseApp.firestore().settings({  })


 export default firebaseApp.firestore()