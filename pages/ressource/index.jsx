import Container from "../../composants/container";
import Bannier from "../../layouts/bannier";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BxsLike, MaterialSymbolsCloudDownloadRounded, MdiShare, RiSearchLine } from "../../composants/icons";
import { useRouter } from "next/router";


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
            <section id = 'ressource' style={{ padding : '6rem 0'}}>
            <Container>
                <div className="ressource">
                    <div className="option">
                        <h3> Recherche </h3>
                        <InputSearch placeholder={'Rechercher un article'} />
                        <h5 style = {{marginBottom : 12}}>Filtre</h5>
                        <div>
                            <ListElement titre = 'Tous les éléments' />
                            <ListElement titre = 'Fiches pédagogique'/>
                            <ListElement titre = 'Modèles 3D' />
                            <ListElement titre = 'Quelques exemples' />
                        </div>
                    </div>
                    <div className="column">
                        {data.map(({id, url}) => <ImageItem key={id} image={url} id={id} onClick = {() => handleCurrentImage(id)} />)}
                    </div>
                
                </div>
            </Container>
            </section>
            <Viewer data={data} imageId = {currentImage} open = {open} onClick = {() => setOpen(!open)} />
        </>
    )
}



export function ImageItem({image, onClick, id}){
    
    return(
        <div className="ImageItem" onClick={onClick}>
            <div className="col-12 p-0 image" style={{ cursor : 'pointer', position : 'relative', overflow : 'hidden'}}>
                <img src={image} width = '100%' />  
                <div className="little_menu">
                    <Button icon={<BxsLike style = {{ width : 20, hieght : 20}} />} />
                    <Button icon={<MaterialSymbolsCloudDownloadRounded style = {{ width : 20, hieght : 20}} />}/>
                </div> 
            </div> 
            <div className="descrition">
                <div className="title">
                    Le titre de la realisation
                </div>
                <div className="icon">
                    <MdiShare style = {{ width : 24, hieght : 24}} />
                </div>
            </div>  
        </div>
    )
}

function Button({onClick, icon}){
    return(
        <div className="action" onClick={onClick}>
            {icon}
        </div>
    )
}

function ListElement({titre}){
    const route = useRouter()

    console.log(route)
    return(
        <div className="listeElement">
           {titre}
        </div>
    )
} 

function InputSearch({ value, onChange, placeholder}){
    return(
        <div className="inputBase">
            <input type="text" value={value} onChange={onChange} placeholder={placeholder} />
            <div className="icon">
                <RiSearchLine style = {{ width : 20, hieght : 20, color : 'white'}}/>
            </div>
        </div>
    )
}

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


