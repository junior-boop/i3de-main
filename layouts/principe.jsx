import Container from "../composants/container";
import Image from 'next/image'
import Style from '../styles/style-e.module.css'


export default function Principal(){
    return(
        <>
        <div className="vide"></div>
        <div className="vide"></div>
        
        <div className="titre w-100 text-center py-4"> Bénéficiaires </div>
        
        <section className={Style.container} style={{display : 'flex', alignItem : 'center', gap : 16, flexWrap : 'wrap', paddingTop : '64px', paddingBottom : 64}}>
            <Element className={'rand-4 rand-4-phone'} 
            title = {'Renforcement du capital humain'} 
            texte = {"Les enseignants enrôles dans le projet I3DE pourrant créer des kits éducatifs adapté aux besoins des élèves. Cela facilitera, pour l\'enseignement comme l\'apprenant l\'apprentissage de certaines matieres et concepts avec l\'utlisation du matériel pédagogique adapté et representatif des objets enseignés desormais imprimés en 3D"}
            >
                <div className="Element_first">
                    <div className="images_element" style={{backgroundImage : `url(./assets/images/apprenant.jpg)`}}>
                        
                    </div>
                </div>
            </Element>
            <Element 
                className={'rand-2 rand-4-phone element'}
                title = {"Promotion de la recherche et de l'innovation"}
                texte = {"Grâce aux  compétence acquises, les enseignants pourront initier et organiser des  projets de recherche. La conception de la maquette tel que celle d'un moteur de voiture en plastique ou d'un monument historique faciliterons leur comprehension. "}
            >
                <div className="Element_first">
                    <div className="images_element">
                        <img src="./assets/images/Rigid-Blue-Engine-Model.png" alt="" width={'100%'} />
                    </div>
                </div>
            </Element>
            <Element className={'rand-2 rand-4-phone element'}
                title = {'Contribution Écologique'}
                texte = {'Réduction de l\'empreinte carbone via la réutilisation (recyclage à moyen terme) ds déchets plastiques pour améliorer l\'approvisionnement en filament pour les impression'}
            >
                <div className="Element_first">
                    <div className="images_element top" style={{backgroundImage : `url(./assets/images/bouteille_fillament.jpg)`}}>
                    </div>
                </div>
            </Element>
            <Element className={'rand-4 rand-4-phone '} 
                title = {"Durabilité des kits éducatifs"}
                texte = {"Pour éviter l'usages de filament les objets 3D n'ont qu'une durée de vie de 5ans Mutualisation des ressources : Creation d'une banque de Modèle 3D + fiches pédagogiques les plus optimales. un reseau de partage sera disponible en ligne et mettra à la disposition  de tous les enseignants (Cameroun, Afrique, Monde) les ressources plus utiles et appréciés  "}
            />
        </section>
        </>
    )
} 

function Element({style, className, title, texte, children}){
    return(
        <div className={`Element ${className}`} style={{ padding : 36, borderRadius : 16,...style }}>
            <div className="Element_first">
                <div className = 'Element_titre' style={{textTransform : "uppercase", marginBottom : 12}}>{title}</div>
                <div className= {'Element_text'} >{texte}</div>
            </div>
            {children}
        </div>
    )
}