export default function Mission(){
    return (
        <section id="presentation">
            <div className="container">
            <div className="titre color-white w-100 text-center my-4">
                    Notre Mission
                </div>
                <div className="col-12 col-md-6 text-center">
                    <div className="h3 color-white"> I3DE est une initiative qui a pour vocation de créer une industrie locale qui renforce le capital humain et facilite l’accès à des outils (technologies et méthodes) innovants basés sur l’impression 3D au service des secteurs économiques de croissance et de l’éducation en particulier.</div>
                </div>
            </div>
            <div className="modele container">
                <video  src="/background_Large.mp4"  width={'100%'} controls = {false} type = {'video/mp4'} autoplay ></video>
            </div>
            <div className="white-gradient"></div>
        </section>
    )
}