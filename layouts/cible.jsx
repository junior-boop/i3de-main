import Container from "../composants/container";
import Titre from "../composants/titre";

export default function Cible(){
    return(
        <section id="cible" className="mt-5">
            <div className="titre color-white w-100 text-center py-5">
                Notre cible
            </div>
            <Container>
                <div className="cible">
                    <Calque>
                       <div className="h3 w-100 mb-3">
                        Pour les apprenants
                       </div>
                       <Paragraphe>
                        Améliorer la professionnalisation des formations en contribuant à un apprentissage plus interactif, plus pratique, plus collaboratif, plus personnalisé et plus durable
                       </Paragraphe>
                       <Paragraphe>
                        Fournir aux artisans et aux étudiants des outils et compétences en matière de conception et de fabrication pour créer des prototypes et des produits finis, personnalisés et même uniques.
                       </Paragraphe>
                    </Calque>
                    <Calque>
                        <div className="h3 w-100 mb-3">
                            Pour les enseignants / formateurs
                        </div>
                        <Paragraphe>
                       Offrir aux enseignants / formateurs la possibilité de créer des outils pédagogiques, des modèles et des prototypes pour illustrer des concepts difficiles à comprendre ou des outils pédagogiques personnalisés qui peuvent aider les étudiants à apprendre plus efficacement. 
                       </Paragraphe>
                       <Paragraphe>
                       Permettre aux enseignants de créer des objets pour des projets d'apprentissage : Les enseignants peuvent utiliser l'impression 3D pour créer des objets qui peuvent être utilisés dans des projets d'apprentissage. Cela permet aux étudiants de mieux comprendre les concepts et de les appliquer à des projets concrets et des expériences pratiques. 
                       </Paragraphe>
                    </Calque>
                    <Calque>
                        <div className="h3 w-100 mb-3">
                            Pour les artisans, les entreprises et industries
                        </div>
                        <Paragraphe>
                       Booster l’entrepreneuriat, la flexibilité et la rentabilité des entreprises. Ceci est possible via 1- la réduction des coûts de fabrication et réduction des délais de production; 2- la création des produits personnalisés en fonction des besoins spécifiques de leurs clients.
                       </Paragraphe>
                       <Paragraphe>
                       Booster l’innovation en permettant de créer des produits innovants et uniques (changeant en fonction des clients) qui peuvent être difficiles à réaliser avec des méthodes de fabrication traditionnelles. 
                       </Paragraphe>
                    </Calque>
                </div>
            </Container>
        </section>
    )
}

function Calque({children}){
    return(
        <div className="calque_cible">
            {children}
        </div>
    )
}

function Paragraphe({children}){
    return(
        <p style={{fontSize : 14, fontWeight : '400', marginBottom : 12}}>
            {children}
        </p>
    )
}