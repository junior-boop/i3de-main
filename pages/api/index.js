import { async } from "@firebase/util";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../../firebase";

export async function SaveData(){
    try {
        const docRef = await addDoc(collection(db, "articles"), {
            contenu : "contenu",
            createdAt:'30 octobre 2022 à 23:31:56 UTC+1',
            id:"00ab",
            image:"/api/rien",
            publiedAt:'31 octobre 2022 à 06:33:05 UTC+1',
            publier:true,
            slug:"contenu-text",
            titre:"rien"
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

export async function GetData(){
    const querySnapshot = await getDocs(collection(db, "article"));
    // querySnapshot.forEach((doc) => {
    // console.log(`${doc.id} => ${doc.data()}`);
    // });

    return querySnapshot
}


export default function handler(req, res) {

    const data = GetData().then(resp => resp.json())
    const rest = data.then(data => data)
    
    res.status(200).json({type : 'Good thing', liste : data})
  }
  