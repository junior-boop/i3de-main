import Container from "../../composants/container";
import Bannier from "../../layouts/bannier";
import Titre from '../../composants/titre'
import { useEffect, useState } from "react";
import Link from "next/link";


export const data = [
    {
        id : 1,
        url : '/assets/images/photo-1.png'
    },
    {
        id : 2,
        url : '/assets/images/photo-2.jpg'
    },
    {
        id : 3,
        url : '/assets/images/photo-3.jpg'
    },
    {
        id : 4,
        url : '/assets/images/photo-4.jpg'
    },
    {
        id : 5,
        url : '/assets/images/photo-5.jpg'
    },
    {
        id : 6,
        url : '/assets/images/photo-6.jpg'
    },
    {
        id : 7,
        url : '/assets/images/photo-7.jpeg'
    },
    {
        id : 8,
        url : '/assets/images/photo-8.jpg'
    }
]

export default function Ressource(){
    const [open, setOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(1)

    const handleCurrentImage = (id) => {
        setOpen(!open)
        setCurrentImage(id)
    }
    
    return(
        <>
            <div className="vide"></div>
            <Bannier name={'Ressources'} />
            <section style={{ padding : '7rem 0'}}>
            <Container>
                <Titre titre={'Nouvelles Images'} />
                <div className="row nouveau">
                    {data.map(({id, url}) => <ImageItem key={id} image={url} id={id} onClick = {() => handleCurrentImage(id)} />)}
                </div>
                <div className="gallerie">
                <Titre titre={'Galerie'} />
                <Gallerie data={data} id = {1} />
                </div>
            </Container>
            </section>
            <Viewer data={data} imageId = {currentImage} open = {open} onClick = {() => setOpen(!open)} />
        </>
    )
}



export function ImageItem({image, onClick, id}){
    
    return(
        <div className="col-6 col-md-3 d-flex mb-4 justify-content-center" onClick={onClick}>
            <div className="col-12 p-0" style={{backgroundImage : `url(${image})`, backgroundPosition : 'center', backgroundSize : 'cover', aspectRatio : 1, backgroundColor : "silver", borderRadius : 12, cursor : 'pointer'}}>
                {id === 8 ? <div className="h2" style={{width : '100%', height : '100%', backgroundColor : '#fff9', borderRadius : 12, display : "flex", alignItems : 'center', justifyContent : 'center'}}>+ {data.length - 6 <= 10 ? `0${data.length - 6}` : data.length - 6}</div> : null}    
            </div>   
        </div>
    )
}
// function ImageGallerie({image}){
//     return(
//         <div className="col-6 col-md-3 d-flex mb-4 justify-content-center">
//             <div className="col-12" style={{backgroundImage : `url(${image})`, backgroundPosition : 'center', backgroundSize : 'cover', aspectRatio : 1, backgroundColor : "silver", borderRadius : 12}}></div>   
//         </div>
//     )
// }

export function Viewer({onClick, open, data, imageId }){
    // Etat
    const [currentImage, setCurrentImage] = useState('')
    const [currentPosition, setCurrentPosition] = useState(imageId) 
    

    useEffect(() => {
        data.forEach(({id, url}) => {
            if(id === imageId){
                setCurrentImage(url)
                setCurrentPosition(id)
            }
       })
    }, [imageId])

    useEffect(() => {
        data.forEach(({id, url}) => {
            if(id === currentPosition){
                setCurrentImage(url)
            }
       })
    }, [currentPosition])

    // Comportement
    const SetCurrentPosition = (idi) =>{
        data.forEach(({id, url}) => {
            if(id === idi){
                setCurrentImage(url)
                setCurrentPosition(id)
            }
       })
    }
    

    const leftHandleBtn = () => {
        if(currentPosition <= 1 ){
            setCurrentPosition(data.length)
        } else {
            setCurrentPosition(currentPosition - 1)
        }
    }

    console.log(currentPosition, data.length)
    const rightHandleBtn = () => {
        if(currentPosition > data.length-1){
            setCurrentPosition(1)
        } else {
            setCurrentPosition(currentPosition + 1)
        }
    }
    
    const Image = data.map(({id, url}) => <div key={id} className="thumbail" style={{ backgroundImage : `url(${url})`, border : id === currentPosition ? '3px solid red': 'none'}} onClick = {() => SetCurrentPosition(id)}/>)
    
    return(
        <div className="viewer justify-content-center"  style = {{ display : open ? 'flex' : 'none'}}>
                <div style={{position : 'absolute', top : 0, left : 0, width : "100%", height : '100vh',zIndex : 1005}} onClick = {onClick}  />
                <div className="screen" style={{zIndex : 1010}}>
                    <div className="viewerImage">
                        <img src={currentImage} height = {'100%'} alt="" />
                        <div className="leftbtn">
                            <img src="/assets/icon/icon_left.png" width={"100%"} alt="left arrow icon" onClick={() => leftHandleBtn()} />
                        </div>
                        <div className="rightbtn">
                            <img src="/assets/icon/icon_right.png" width={"100%"} alt="right arrow icon" onClick={() => rightHandleBtn()} />
                        </div>
                    </div>
                    <div className="controller">
                        {Image}
                    </div>
                </div>
        </div>
    )
}

function Gallerie({data, id}){

    const imageLength = () => data.length <= 10 ? '00' : data.length

    return (
        <a href={`/ressource/${id}`} onClick = {() => console.log('je fonctionne')}>
            <div className="gallerie row">
                <div className="images col-12 col-md-5">
                    <ImageGallerie />
                </div>
                <div className="desc col-12 col-md-7 pt-4 pl-md-4">
                    <p style={{opacity : 0.6}}>La periode de publication</p>
                    {/* <h3>Le titre de l'album</h3>
                    <h4>nombre total d'image  : </h4> */}
                </div>
                
            </div>
        </a>
    )
}


function ImageGallerie() {
    const images = (data) => {
        let Arr = []
        for(let i = 0 ; i < 6; i++){
             let div = <div style={{height : 166, width : 200 / (i+1), backgroundColor : 'silver', backgroundImage : `url(${data[i].url})`, backgroundRepeat : 'no-repeat', backgroundPosition : 'center', backgroundSize : 'cover'}}/>
             Arr.push(div)
        }

        return Arr
    }
    return(
        <div className="d-flex" style={{ position: 'relative',overflow : 'hidden', borderRadius : 16, width : '100%'}}>
            {images(data)}
            <div style={{position : "absolute", top : 0, right : 0, width : 100, height : '100%', backgroundImage : 'linear-gradient(90deg, transparent 0%, white 80%)', display : "flex", alignItems : "center", justifyContent : 'flex-end', paddingRight : 10}}>
                <div className="h2" style={{color : 'silver'}}>+ {data.length - 6 <= 10 ? `0${data.length - 6}` : data.length - 6}</div>
            </div>
        </div>
    )
}