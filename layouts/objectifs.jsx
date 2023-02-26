import Image from "next/image";
import Container from "../composants/container";

export default function Objectifs() {
    return(
        <section style={{padding : '64px 0'}} >
            <div className="vide"/>
            <Container cName="d-flex justify-content-center">
                <div className=" col-12 col-md-9 row p-0">
                    <div className="col-12 col-md-6 col-lg-6">
                        <h2 style={{marginBottom : 18}}>Les Objectifs </h2>
                        <div>
                            <ul>
                                <li style={{fontSize : 18, marginBottom : 12}}> Installation de <span style={{color : "var(--bg-color-orange)", fontSize : 18, fontWeight : '600'}}>05 FabLabs</span> d'impression 3D dans <span style={{color : "var(--bg-color-orange)", fontSize : 18, fontWeight : '600'}}>05 écoles</span> d'enseignement technique du cameroun </li>
                                <li style={{fontSize : 18, marginBottom : 12}}> Deploiement d'une plateforme de partage de plus de <span style={{color : "var(--bg-color-orange)", fontSize : 18, fontWeight : '600'}}>200</span> ressources (Kits 3D, fiches didactiques)</li>
                                <li style={{fontSize : 18, marginBottom : 12}}> Renforcement des capacités de <span style={{color : "var(--bg-color-orange)", fontSize : 18, fontWeight : '600'}}>55</span> enseignants (modélisation & impression 3D, gestion du FabLabs)</li>
                            </ul>
                        </div>
                    </div>
                    <div className ="col-12 col-md-6 col-lg-6 p-0">
                        <div style={{width : '350px', height : 500, position : 'relative' }}>
                            <Image src={"/assets/images/cameroon.svg"} layout = {'fill'} style ={{boxShadow : '-4px -4px 50px -20px orange'}} />
                            <Point x = {44} y= {384} duree = {1} ville = "Douala" list={["Lycée Technique d'Akwa", "Lycée Technique de KOUMASSI"]} />
                            <Point x = {80} y= {300} duree = {1.2} ville = "Bafoussam" list={["Lycée Technique Canadien"]}/>
                            <Point x = {139} y= {365} duree = {1.4} ville = "Yaoundé" list={["Lycée Technique de NKOL BISSON"]}/>
                            <Point x = {230} y= {371} duree = {1.6} ville = "Bertoua" list={["Lycée Technique de NKOL BIKON"]}/>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}


function Point({duree, x, y, list, ville}){
    const liste = list.map(el => <li>{el}</li>)
    return (
       <div className="point" style={{position : 'absolute', top : `${y}px`, left : `${x}px` }}>
            <div style={{position : 'relative'}}>
                <div className="wave" style={{width : 20 + (4 * list.length), position : 'absolute', aspectRatio : '1', animationDuration : `${duree}s`}}></div>
                <div className="bg-special round" style={{ width : 20 + (4 * list.length), aspectRatio : '1', borderRadius : 15, display : 'flex', alignItems : 'center', justifyContent : 'center', color : 'white' }}>{list.length}</div>
                <div className="over">
                    <div style={{fontWeight : 500}}>{ville}</div>
                    {liste}
                </div>
            </div>
       </div>
    )
}