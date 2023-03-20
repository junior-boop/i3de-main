import Container from "../../composants/container";
import { useEffect, useState } from "react";
import Link from "next/link";
import { BxsLike, CiNotification, IcOutlineAdd, MaterialSymbolsCloudDownloadRounded, MdiShare, RiSearchLine } from "../../composants/icons";



export default function NewRessource(){
    const [open, setOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(1)
    const [openNotification, setOpenNotification] = useState(false)

    const handleCurrentImage = (id) => {
        setOpen(!open)
        setCurrentImage(id)
    }
    
    return(
        <>
            <div className="vide"></div>
            <section id = 'ressource'>
                <Container>
                    
                </Container>
            </section>
            
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

export function NotificationView({open}){
    return(
        <div className="notificationView" data-open = {open}>
            <div className="notificationHeader">
                <span>Les Notifications</span>
            </div>
            <div className="notificationContent">
                <div className="contentVide">
                    <span>Notification vide</span>
                </div>
            </div>
        </div>
    )
}


