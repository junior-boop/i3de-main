import Container from "../composants/container";

export default function Cible(){
    return(
        <section className='cible' style={{padding : '64px 0'}} >
          <Container>
            <div className="left">

              <div className="cible_label">Notre cible</div>
              <div className="cible_titre">Les avantages de l’impression 3D pour la professionnalisation</div>
              <div className="desc">L’impression et la modélisation 3D permettent de créer des objets tangibles
                  qui peuvent être manipulés et examinés, ce qui rend l'apprentissage plus interactif et
                  plus intéressant. Les avantages d’ordre pédagogique sont multiples</div>
              <div className="more">
                <a href="/">
                  <button>
                      En savoir plus
                  </button>
                </a>
              </div>

            </div>
            <div className="right">

              <Element annee={'Pour les apprenants'} text = {"Booster la créativité des apprenants et améliorer la professionnalisation des enseignements en contribuant à un apprentissage plus interactif, plus pratique (via la manipulation réelle), plus collaboratif (via la cocréation), plus personnalisé et plus durable (les objets sont personnalisables et réutilisables)."} />
              <Element annee={'Pour les enseignants'} text = {"Offrir aux enseignants / formateurs la possibilité de monter des projets d’apprentissage pratiques et de créer outils pédagogiques, des modèles et des prototypes pour illustrer des concepts difficiles à comprendre ou des outils pédagogiques personnalisés qui peuvent aider les étudiants à apprendre plus efficacement. "} />
              <Element annee={"Pour les écoles"} text = {"Booster la créativité des apprenants et améliorer la professionnalisation des enseignements en contribuant à un apprentissage plus interactif, plus pratique (via la manipulation réelle), plus collaboratif (via la cocréation), plus personnalisé et plus durable (les objets sont personnalisables et réutilisables)."} />

            </div>
          </Container>
      </section>
    )
}


function Element ({annee, text}){
    return(
      <div className="ligne">
        <div className="icon">
          {annee}
        </div>
        <div>{text}</div>
      </div>
    )
  }
  