import Container from "../../composants/container";
import { Bannier_second } from "../../layouts/bannier";
import { useEffect, useState, useContext } from "react";
import Link from "next/link";
import Global_context from "../../context/global_context";
import { BxsLike, CiNotification, IcOutlineAdd, MaterialSymbolsCloudDownloadRounded, MdiShare, RiSearchLine } from "../../composants/icons";
import { useRouter } from "next/router";
import { collection, ref,  getDocs } from 'firebase/firestore'


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
    const [openNotification, setOpenNotification] = useState(false)
    const [dataRessource, setDataRessource] = useState([])

    const { Database } = useContext(Global_context)

    const handleCurrentImage = (id) => {
        setOpen(!open)
        setCurrentImage(id)
    }

    useEffect(() => {
        if(Database !== null) {
            console.log('je fonctionne')
            const databaseRef = collection(Database, 'realisations/')
            
            const getInfos = async () => {
                const docSnap = await getDocs(databaseRef)
                docSnap.docs.forEach(el => {
                    setDataRessource(Element => [...Element, {data : el.data(), id : el.id} ])
                })
            }

            getInfos()
        }
    }, [Database])
    
    return(
        <>
            <div className="vide"></div>
            <Bannier_second name={'Ressources'} style={{display : 'flex', alignItems : 'center'}}>
                <div className="outils_creation_ressource">
                    <Link href={'/ressource/new'}>
                        <button className="icon">
                            <IcOutlineAdd style = {{ width : 24, height : 24 }} />
                        </button>
                    </Link>
                    <button className="icon" onClick={() => setOpenNotification(!openNotification)}>
                        <CiNotification style = {{ width : 24, height : 24 }}/>
                        <div className="pince">
                            0
                        </div>
                    </button>
                    <NotificationView open={openNotification} />
                </div>
            </Bannier_second>
            <section id = 'ressource'>
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

                        <div className="user">
                        <h5 style = {{marginBottom : 12}}>Mon Compte</h5>
                            <div>
                                <ListElement titre = 'Actions' />
                                <ListElement titre = 'Préferences'/>
                                <ListElement titre = 'Réalisations' />
                            </div>

                        </div>

                    </div>
                    <div className="column">
                        {dataRessource.map(({id, data}) => <ImageItem key={id} data = {data} id={id} onClick = {() => handleCurrentImage(id)} />)}
                    </div>
                
                </div>
            </Container>
            </section>
            
        </>
    )
}



export function ImageItem({data, onClick, id}){
    const { categorie, createdAt, createdBy, images, description, titre } = data
    const imagesFormated = JSON.parse(images)

    console.log(imagesFormated)
    return(
        <div className="ImageItem" onClick={onClick}>
            <div className="col-12 p-0 image" style={{ cursor : 'pointer', position : 'relative', overflow : 'hidden'}}>
                <img src={imagesFormated[0].image} width = '100%' />  
                <div className="little_menu">
                    <Button icon={<BxsLike style = {{ width : 20, hieght : 20}} />} />
                    <Button icon={<MaterialSymbolsCloudDownloadRounded style = {{ width : 20, hieght : 20}} />}/>
                </div> 
            </div> 
            <div className="descrition">
                <div className="title">
                    {titre}
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


