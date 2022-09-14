import {getApp, getApps, initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'
const firebaseConfig = {
    apiKey: "AIzaSyCUlccpQveHEYy_ZCOiQqIFN63eD_DGocg",
    authDomain: "foodhunt-15010.firebaseapp.com",
    databaseURL: "https://foodhunt-15010-default-rtdb.firebaseio.com",
    projectId: "foodhunt-15010",
    storageBucket: "foodhunt-15010.appspot.com",
    messagingSenderId: "996640675079",
    appId: "1:996640675079:web:8d6c6f3ab57c953b4861a2"
  };
  const app = getApps.Length > 0? getApp() : initializeApp(firebaseConfig);

  const firestore = getFirestore(app)
  const storage = getStorage(app)

  export {app,firestore,storage};