import Head from "next/head";
import Titre from "../../composants/titre";
import Bannier from "../../layouts/bannier";
import { BlogAlaUneSpace, BlogNewSection, BlogPlus } from "../../layouts/BlogComportment";
import Bloglist from "../../layouts/Bloglist";
import Recents from "../../layouts/blogRecent";
import Style from '../../styles/style-e.module.css'

export default function Actualite (){
    return(
        <>
            <Head>
                <title>Actualite | I3DE </title>
            </Head>
            <Bannier name={"Actualités"} />
            <div className={Style.container}>
            <Titre titre={'Recents'} />
            <div className={Style.heade}>
                <BlogAlaUneSpace />
                <BlogNewSection />
            </div>
            <Titre titre={"Plus d'articles"} />
            <BlogPlus />
            </div>
        </>
    )
}