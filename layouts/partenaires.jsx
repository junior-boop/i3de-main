import Container from "../composants/container";

export default function Partenaire(){
    return(
        <div id="partenaire">
            <Container>
               <div className="w-100 text-center titre py-5">
                Partenaires
               </div>
               <div className="partenaire d-flex justify-content-center">
                    <Items>
                        <img src="./assets/prototype/Logo_caysti.svg" height={'100%'}/>
                    </Items>
                    <Items>
                        <img src="./assets/prototype/Manlab_logo.png" height = {'100%'} alt="" />
                    </Items>
               </div>
               <div className="w-100 text-center h2  py-5">
               Ils nous soutiennent
               </div>
               <div className="partenaire row justify-content-center">
                    <Items>
                        <img src="./assets/prototype/auf.png" height={'100%'}/>
                    </Items>
                    <Items>
                        <img src="./assets/prototype/obreal.jpeg" height = {'100%'} alt="" />
                    </Items>
                    <Items>
                        <img src="./assets/prototype/logo.svg" height = {'100%'} alt="" />
                    </Items>
                    <Items>
                        <img src="./assets/prototype/aau.png" height = {'100%'} alt="" />
                    </Items>
                    <Items>
                        <img src="./assets/prototype/reifac.png" height = {'100%'} alt="" />
                    </Items>
               </div>
            </Container>
        </div>
    )
}
function Items({children}){
    return(
        <div className="items">
            <div className="content">
                {children}
            </div>
        </div>
    )
}