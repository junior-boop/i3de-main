import Head from 'next/head'
import Beneficiaire from '../layouts/beneficaire'
import Header from '../layouts/header'
import Mission from '../layouts/mission'
import Objectifs from '../layouts/objectifs'
import Principal from '../layouts/principe'
import Testimony from '../layouts/temoignage'

import Cible from '../layouts/cible'
import Services from '../layouts/services'
import Partenaire from '../layouts/partenaires'



export default function Home() {

  
  return (
    <>
      <Head>
        <title>I3DE </title>
      </Head>
      <div className='vide'></div>
      <Header />
      <Mission />
      <Beneficiaire />
      <Objectifs />
      <Cible />
      <Principal />
      <Services />
      <Testimony /> 
      <Partenaire />
    </>
  )
}


