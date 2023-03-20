import Head from 'next/head'
import Footer from '../layouts/footer'
import NavBar from '../layouts/navbar'
import '../styles/style_base.css'
import '../styles/style.css'
import styles from '../styles/Home.module.css'
import Global_context from '../context/global_context'
import useFirebase from '../firebase/firebase'
import { GoogleAuthProvider, signInWithPopup,  signOut, onAuthStateChanged } from 'firebase/auth'


function MyApp({ Component, pageProps }) {
  
  const {Database, Storages, Analytics, Auth} = useFirebase()

  const googleSignIn = async () => {
    const Provide = new GoogleAuthProvider();
    
    if(Auth !== null) {
      console.log(Auth)
       await signInWithPopup(Auth, Provide)
      .then( result => console.log(result))
      .catch(error => console.log(error))
    } ;
  }
  return (

    <>
      <Global_context.Provider value={{
          Database, 
          Storages,
          Analytics,
          Auth, 
          googleSignIn
        }}>
          <NavBar/>
          {/* <div className='vide' /> */}
          <Component {...pageProps} />
          <footer className={styles.footer}></footer>
          <Footer />
      </Global_context.Provider>
    </>
  )
}

export default MyApp
