import Head from 'next/head'
import Image from 'next/image'
import Container from '../composants/container'
import Beneficiaire from '../layouts/beneficaire'
import Schema from '../layouts/etapes'
import Header from '../layouts/header'
import Mission from '../layouts/mission'
import Objectifs from '../layouts/objectifs'
import Principal from '../layouts/principe'
import VideoPresentation from '../layouts/sectionVideo'
import Testimony from '../layouts/temoignage'
import styles from '../styles/Home.module.css'

import InitFireBase from '../firebase'
import Cible from '../layouts/cible'


InitFireBase()

export default function Home() {
  return (
    <>
      <Head>
        <Title text={"L'impression 3D pour l'Éducation"} />
      </Head>
      <div className='vide'></div>
      <Header />
      <Mission />
      <Beneficiaire />
      <Objectifs />
      <Cible />
      <Schema />
      <Principal />
      <Testimony /> 
      <Container>
      </Container>
    </>
  )
}


function Title({text}){
  return <title>{text}</title>
}