import Container from "../composants/container";

export default function Partenaire(){
    return(
        <div id="partenaire">
            <Container>
               <div className="w-100 text-center titre py-5">
                Partenaires
               </div>
               <div className="d-flex justify-content-center">
                    <Items>
                        <img src="./assets/prototype/Logo_caysti.svg" height={'100%'}/>
                    </Items>
                    <Items>
                        <img src="./assets/prototype/Manlab_logo.png" height = {'100%'} alt="" />
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