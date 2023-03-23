import Container from "../../composants/container";
import { RiGoogleFill } from "../../composants/icons";
import { useContext, useEffect } from "react";
import Global_context from '../../context/global_context'

export default function Login(){

    const { googleSignIn } = useContext(Global_context)


    const handleGoogleSignIn  = async () => {
        try{
            await googleSignIn()
        } catch (error) {
            console.log(error)
        }
    }
    

    return(
        <>
            <div id="login">
                
                <Container style={{ display : 'flex', alignItems : 'flex-start', justifyContent : 'center'}}>
                <div className="login">
                        <div style={{ marginBottom : 24, }}>
                            <h1 style={{ textAlign : 'center'}}>
                                S{"'"}inscrire 
                            </h1>
                            <h3> en tant que particulier</h3>
                        </div>
                        <Login_Space />
                        <div className="separation">
                            <hr />
                            <span>OU</span>
                            <hr />
                        </div>

                        <div className="login_btn">
                            <button onClick={handleGoogleSignIn}>
                                    <div className="icon">
                                    <RiGoogleFill style = {{ width : '2rem', height : '2rem' }} />
                                    </div>
                                    <div className="text">
                                        Se connecter avec Google
                                    </div>
                            </button>
                        </div>
                        <div style={{ fontWeight : 500, padding: '18px 0' }}>
                            Si vous avez déjà un compte,<span className="click_ici">  cliquez ici </span>
                        </div>
                </div>
                </Container>
            </div>
        </>
    )
}

const Login_Space = () => {
    return (
         <div className="login_space">
            <form>
                <div className="champ">                    
                    <input type="email" name="email" placeholder="Votre Adresse e-mail" />
                </div>
                <div className="champ">                    
                    <input type="tel" name="telephone" placeholder="Votre numero de telephone" />
                </div>
                <div className="champ">                    
                    <input type="password" name="password" placeholder="Votre mot de passe" />
                </div>
            </form>
         </div>
    )
}