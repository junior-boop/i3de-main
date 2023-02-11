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


InitFireBase()

export default function Home() {
  return (
    <>
      <Head>
        <title>I3DE | L'impression 3D pour l'Éducation</title>
      </Head>
      <Header />
      <Mission />
      <Beneficiaire />
      <Objectifs />
      <Schema />
      <Principal />
      <VideoPresentation />
      <Testimony /> 
      <Container>
      </Container>
    </>
  )
}
