import firebase from 'firebase';
import 'firebas/auth';

const firebaseConfig = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId,
    appId: process.env.appId
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export default app