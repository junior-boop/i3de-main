import { useState } from "react";
import { data, Viewer} from ".";
import Container from "../../composants/container";
import Titre from "../../composants/titre";

export default function RessourcesId(){

    const [open, setOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(1)

    const handleCurrentImage = (id) => {
        setOpen(!open)
        setCurrentImage(id)
    }

    return(
        <Container>
                <Titre titre={'Nouvelles Images'} />
                <div className="row nouveau">
                    {data.map(({id, url}) => <ImageItem key={id} image={url} id={id} onClick = {() => handleCurrentImage(id)} />)}
                </div>
                <Viewer data={data} imageId = {currentImage} open = {open} onClick = {() => setOpen(!open)} />
        </Container>
    )
}
function ImageItem({image, onClick}){
    const la08iemeImage = () =>{

    }
    return(
        <div className="col-6 col-md-3 d-flex mb-4 justify-content-center" onClick={onClick}>
            <div className="col-12 p-0" style={{backgroundImage : `url(${image})`, backgroundPosition : 'center', backgroundSize : 'cover', aspectRatio : 1, backgroundColor : "silver", borderRadius : 12, cursor : 'pointer'}}>
                {/* <div className="h2" style={{width : '100%', height : '100%', backgroundColor : '#fff9', borderRadius : 12, display : "flex", alignItems : 'center', justifyContent : 'center'}}>+ {data.length - 6 <= 10 ? `0${data.length - 6}` : data.length - 6}</div>    */}
            </div>   
        </div>
    )
}