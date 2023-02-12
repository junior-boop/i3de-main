import Container from "../composants/container";

export default function Cible(){
    return(
        <section id="cible" className="mt-5">
            <div className="titre color-white w-100 text-center py-5">
                Notre cible
            </div>
            <Container>
                <div className="cible">
                    <Calque>
                        bonjour
                    </Calque>
                    <Calque>
                        bonjour
                    </Calque>
                    <Calque>
                        bonjour
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