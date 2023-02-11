import Image from 'next/image'
import Link from 'next/link'
import Titre from '../../composants/titre'
import Style from '../../styles/style-e.module.css'

export default function Blog() {
    return (
            <div className={Style.container}>

                <div className="row">
                    <div className="col-md-8 blog-content pe-5">
                        <div>
                            <Titre titre={'le titre de l\'article'} />
                        </div>
                        <div className= 'col-12 p-0 mb-4'>
                            <img src={'/assets/images/diapo-2.jpg'} width = {"100%"} alt = 'diapo' />
                        </div>
                        <p style={{color : '#888', fontWeight : '500', marginBottom : 12}}>Publier le : 11 decembre 2022</p>
                        
                        <p style={{color : 'black', fontWeight : '600', marginBottom : 12, fontSize : 18}}>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                        <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></blockquote>

                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>

                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>

                        <blockquote><p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p></blockquote>

                        <p>The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>

                        <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>


                        <div className="py-5">
                            <p>Categories:  <a href="#">Design</a>, <a href="#">Events</a>  Tags: <a href="#">#html</a>, <a href="#">#trends</a></p>
                        </div>


                        

                    </div>
                    <div className="col-md-4 sidebar">
                        <div className="sidebar-box">
                            <form action="#" className="search-form">
                                <div className="form-group">
                                    <span className="icon fa fa-search"></span>
                                    <input type="text" className="form-control" placeholder="Type a keyword and hit enter" />
                                </div>
                            </form>
                        </div>
                        <div className="sidebar-box">
                            <div className="categories">
                                <h3>Categories</h3>
                                <li><a href="#">Creatives <span>(12)</span></a></li>
                                <li><a href="#">News <span>(22)</span></a></li>
                                <li><a href="#">Design <span>(37)</span></a></li>
                                <li><a href="#">HTML <span>(42)</span></a></li>
                                <li><a href="#">Web Development <span>(14)</span></a></li>
                            </div>
                        </div>
                        

                        <div className="sidebar-box">
                            <h3 className="text-black">Paragraph</h3>
                            <p>When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                        </div>
                        

                        <div className="sidebar-box">
                            <div className="categories">
                                <h3>Publications Similaires</h3>
                                <LittleItem id = {12} />
                                <LittleItem  id = {15}/>
                                <LittleItem  id = {132}/>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}


const LittleItem = ({id}) => {

    return (
        <Link href = {`/actualites/${id}`} >
            <div className='row m-0 mb-3'>
                <div style={{ width : 75, aspectRatio : '1', backgroundImage : `url('https://media.gqmagazine.fr/photos/62d924d13a5500ded9072a6d/16:9/w_2560%2Cc_limit/GettyImages-1029518538.jpg')`, borderRadius : 7, backgroundPosition : 'center', backgroundRepeat : 'no-repeat', backgroundSize : 'cover' }}></div>
                <div style={{ paddingLeft : 12, position : 'relative',  width : '75%' }}>
                    <div style={{ fontSize : 16, fontWeight : '600'}}>Le titre de l article, un article que je vais chercher apres</div>
                    <div style={{position : 'absolute', bottom : 0}}> publier le : 11 / 12 /2022</div>
                </div>
            </div>
        </Link>
    )
}