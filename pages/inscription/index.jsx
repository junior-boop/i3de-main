import Container from "../../composants/container";
import Bannier from "../../layouts/bannier";

export default function Inscription(){
    return(
        <>
        <div className="vide"></div>
        <Bannier name={'Inscription'} />
        <Container>
            <div className="vide"></div>
            
            <div className="inscription_section">
                <div className="cadre">
                    <div class="titre">Bénéficiez du programme</div>
                    <div>it is often said that the pursuance of integrated collection of software engineering standards minimizes influence of the setting of functional event(Heriberto Milard in the book of the application rules)</div>
                </div>
                <div className="cadre desc">
                    <div class="header">Particulier</div>
                    <div class="content">
                        <ul>
                            <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée  </li>
                            <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification </li>
                            <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour   </li>
                            <li>Le lorem ipsum est, en  utilisée à titre </li>
                        </ul>
                    </div>
                    <button class="footer">
                        s'inscrire
                    </button>
                </div>
                <div className="cadre desc">
                <div class="header">Etablissement Scolaire</div>
                    <div class="content">
                        <div>
                            <ul>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée  </li>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification </li>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour   </li>
                                <li>Le lorem ipsum est, en  utilisée à titre </li>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour   </li>
                                <li>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour   </li>
                            </ul>
                        </div>
                        
                    </div>
                    <button class="footer">
                        Contactez-nous
                    </button>
                </div>
            </div>

            <div className="vide"></div>
        </Container>
        </>
    )
}