import Card_Beneficiate from "../composants/benef/benefice"
import Container from "../composants/container"
import {benef} from '../styles/style-e.module.css'

export default function Beneficiaire(){
    return(
        <>  
            <div className="vide" />
            <div className={`${benef} container-fluide mt-5`}>
                <div className="titre w-100 text-center py-5"> Bénéficiaires </div>
                <Container cName = {'row pb-5'} style = {{gap : 60, justifyContent : 'center'}}>
                    <Card_Beneficiate numerique={'05'} desc={`Les Établissements d'enseignement technique et Industriel du second cycle`} />
                    <Card_Beneficiate numerique={'55'} desc={`Les enseignants desdits établissements techniques`}  />
                    <Card_Beneficiate numerique={`+6K`} desc={`Les éleves des établissements ciblé`} />
                    <Card_Beneficiate numerique={'05'} desc={`La communauté éducative toute entières`} />
                </Container>
            </div>
        </>
    )
}

function BeneficaireItem({inverse, chiffre1, chiffre2, text1, text2, titre, className}){

    const Chiffre = { width : '30%', textAlign : "center", fontSize : 42, fontWeight : '300'}
    const Box = {display : "flex", alignItems : "center", padding : "10px 0",  flexDirection : inverse ? 'row-reverse' : 'row'}
    const text = { width : '70%', fontSize : 16, fontWeight : '500', textAlign : !inverse ? 'left' : 'right', paddingRight : 10}
    return (
        <div className={className}>
            <div className={!inverse ? "bg-orange" : 'bg-orange-rouge'} style={{width : '100%',padding : 12, fontSize : 18, fontWeight : '500', color : "white", borderRadius : 5, marginBottom : 10, textAlign : !inverse ? 'left' : 'right' }}>{titre}</div>
            <div style={Box}>
                <div className={!inverse ? "color-orange" : "color-orange-rouge"} style={Chiffre}>
                    {chiffre1}
                </div>
                <div style={text}>
                    {text1}
                </div>
            </div>
            <div style={Box}>
                <div className={!inverse ? "color-orange" : "color-orange-rouge"} style={Chiffre}>
                   {chiffre2}
                </div>
                <div style={text}>
                    {text2}
                </div>
            </div>
        </div>
    )
}



