

import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA2wg2ioVHou1PRqWKCqAtaycMMBcvXp9I",
  authDomain: "apppoke-81318.firebaseapp.com",
  projectId: "apppoke-81318",
  storageBucket: "apppoke-81318.appspot.com",
  messagingSenderId: "190746933301",
  appId: "1:190746933301:web:66d4048a69e76fb93cd97c",
  measurementId: "G-2YG1VHVLMT"
};

firebase.initializeApp(firebaseConfig);
export{firebase}