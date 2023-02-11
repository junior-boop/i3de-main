import Image from "next/image";
import Container from "../composants/container";

export default function Testimony(){
    return (
        <section id="testimony">
            <Container>
                <div className="h1 w-100 text-center py-5"> Ils en parlent </div>
                <div className="row" style={{justifyContent : "center", gap : 12}}>
                <Testy />
                <Testy />
                <Testy />
                </div>
            </Container>
        </section>
    )
}


function Testy(){
    return(
        <div className="testimony" >
            <div className="m-auto mt-5 col-10 col-md-12 d-flex justify-content-center">
                <ImageTesty />
            </div>
            <div className="m-auto col-10 col-md-10 d-flex justify-content-center p-0">
                <div className="" style={{fontSize : 18, marginTop : 12, textAlign : "center"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nisi laborum, earum molestias amet maxime inventore repellat facere cum praesentium.
                    
                    <div style={{fontSize : 18, fontWeight : '600', marginTop : '12px'}}>
                        Daniel Seppo Eke
                    </div>
                    <div>CEO of GenuisOfDigital</div>
                </div>

            </div>
        </div>
    )
}

function ImageTesty(){
    return(
        <div className="blockImage" style={{padding : '0 12px'}}>
            <div className="image">
                <div className="img" style={{backgroundImage : 'url(/assets/images/portrait.webp)', backgroundSize : 'cover', width : 100}}/>
            </div>
            
        </div>
    )
}

const quote = {display : "inline-block", fontSize : 36, fontWeight : 700, position : 'relative', height : 20}