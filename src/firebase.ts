import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDD8C58RUyhlRYluowm0ITu1y6bTPEQHqg",
  authDomain: "tabletop-character-tracker.firebaseapp.com",
  projectId: "tabletop-character-tracker",
  storageBucket: "tabletop-character-tracker.appspot.com",
  messagingSenderId: "695218473537",
  appId: "1:695218473537:web:115e58f831d8ab8d70d4c0"
};
//initializes firebase and stores in variable app
//which allows access to firebase services
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
