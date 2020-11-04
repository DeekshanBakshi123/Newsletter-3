  
import firebase from 'firebase';
    

  // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyCt0kX4QRFnKJCxBaOFJ8lEFBPYWBV5xlQ",
    authDomain: "newsletter-7b500.firebaseapp.com",
    databaseURL: "https://newsletter-7b500.firebaseio.com",
    projectId: "newsletter-7b500",
    storageBucket: "newsletter-7b500.appspot.com",
    messagingSenderId: "322185885107",
    appId: "1:322185885107:web:d1d9a13755caddb32d87c6"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
 export default firebase.database();