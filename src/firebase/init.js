
import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
  apiKey: "",
  authDomain: "tx-chat-app.firebaseapp.com",
  databaseURL: "https://tx-chat-app.firebaseio.com",
  projectId: "tx-chat-app",
  storageBucket: "tx-chat-app.appspot.com",
  messagingSenderId: "349720912446"
};
const firebaseApp=firebase.initializeApp(config);
// firebaseApp.firestore().settings({timestampsInSnapshots:true})
export default firebaseApp.firestore();