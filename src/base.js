import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyAF5GSZqrFjm9QTiSY4XShL5Dutdva7zv8',
  authDomain: 'catch-of-the-day-crgl.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-crgl.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
