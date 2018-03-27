import firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAuKgrqSa2Tcne8usZM4BLuA0gXSW84i54",
    authDomain: "divimate-1a95f.firebaseapp.com",
    databaseURL: "https://divimate-1a95f.firebaseio.com",
    projectId: "divimate-1a95f",
    storageBucket: "divimate-1a95f.appspot.com",
    messagingSenderId: "51341478822"
};
firebase.initializeApp(config);

export default firebase;