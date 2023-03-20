import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from 'firebase/storage'
import { getFirestore } from "firebase/firestore"
import { getAuth } from 'firebase/auth'

import { useState, useEffect } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDCdoEOYomlTZANgV90x42hcIpi0WxIHuA",
  authDomain: "leadb-aee74.firebaseapp.com",
  databaseURL: "https://leadb-aee74-default-rtdb.firebaseio.com",
  projectId: "leadb-aee74",
  storageBucket: "leadb-aee74.appspot.com",
  messagingSenderId: "342738697323",
  appId: "1:342738697323:web:716f692d7cebb41ed9452e",
  measurementId: "G-HEBFZL2W7V"
};



export default function useFirebase(){

  const [Database, setDatabase] = useState(null)
  const [Analytics, setAnalytics] = useState(null)
  const [Storages, setStorages] = useState(null)
  const [Auth, setAuth] = useState(null)


  useEffect(() => {
    if(typeof window !== 'undefined'){
      const app = initializeApp(firebaseConfig);
      const analytics = getAnalytics(app);
      const storage = getStorage(app);
      const database = getFirestore(app)
      const authentification = getAuth(app)


      setAnalytics(analytics)
      setDatabase(database)
      setStorages(storage)
      setAuth(authentification)
    }
  }, [])


  return { Database, Analytics, Storages, Auth }
}