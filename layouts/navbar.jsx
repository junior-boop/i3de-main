import Image from "next/image";
import Container from "../composants/container";
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from "react";
import Link from "next/link";


export default function NavBar(){
    const [visible, setVisible] = useState(false)
    const [scroll, setScroll] = useState('absolute')
    const [color, setColor] = useState('')
    const {scrollY} = useScroll()
    

    useEffect(() => {
        return scrollY.onChange((a) => {
            a > 0 ? setScroll('fixed') : setScroll('absolute')
        })
    }, [scroll])
    useEffect(() => {
        return scrollY.onChange((a) => {
            a > 0 ? setColor('color') : setColor('')
        })
    }, [])




    const handleVisibility = () => setVisible(!visible)
    

    const DonVisible = () => {
        if(typeof window !== 'undefined'){
            if(window.location.pathname !== '/dons'){
                return (
                    <Link  href={'/inscription'}>
                        <button>S'inscrire</button>
                    </Link>
                )
            } else {
                return null
            }
        }
    }

    

    
    return(
        <nav className={color} style =  {{ position : scroll}}>
        <div className="container-fluid">
            <Container cName={'d-flex'}>
                <div className="logo">
                    <div>
                        <img src="./assets/icon/i3de_logo.png" width= {85}  alt="logo i3de" />
                    </div>
                </div>
                <div className="icon-right d-flex">
                    {
                        DonVisible()
                    }
                    <motion.div className="menu"
                        whileTap={{scale : 0.9}}
                        transition = {{ type : 'spring', stiffness : 200, damping : 6 }}
                    >
                        <Image src = {'/icon_burgeur.svg'} width= {28} height = {28}  onClick = {handleVisibility} />
                    </motion.div>
                </div>
                <div className="nav-overlay"
                    data-visible = {visible}
                    
                >
                    <div style={{ display : "flex", width : 'auto'}}>
                    <div className="cover" onClick={handleVisibility} layout = {'size'} transition = {{ type : 'spring', stiffness : 700, damping : 70}} ></div>
                    <div className="nav-content"
                        data-visible = {visible} 
                    >
                        <div className="vide">
                            <div className="close_btn close">
                                <div className=" icone"
                                     onClick = {handleVisibility}
                                >
                                    <div>
                                        <Image src="/assets/icon/icon_close.png" width= {28} height = {28} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li onClick={handleVisibility} ><Link href="/">Accueil</Link></li>
                                <li onClick={handleVisibility}><Link href="/ressource">Ressources</Link></li>
                                <li onClick={handleVisibility}><Link href="/actualites">Actualités</Link></li>
                                <li onClick={handleVisibility}><Link href="/contact-us">Contactez-nous</Link></li>
                               
                                    <button style={{border : '3px solid var(--bg-color-orange)', borderRadius : 10, padding : '7px 20px', backgroundColor : 'transparent', margin : '12px 0', color : 'var(--bg-color-orange-rouge)', fontWeight :'700'}}>
                                        <Link href={'/inscription'} >
                                            Inscrivez-vous
                                        </Link>
                                    </button>
                            </ul>
                        </div>
                        <div>
                            <div className="content">
                                <div>
                                    <Image src="/assets/icon/logo-cadre.png" width= {100} height = {100} alt="" />
                                </div>
                                <div>
                                    <h4 class="text-gradient">Impression 3D <br/> pour l'Education</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    </nav>
    )
}

