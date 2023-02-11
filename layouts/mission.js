export default function Mission(){
    return (
        <section id="presentation">
            <div className="container">
            <div className="titre color-white w-100 text-center my-4">
                    Notre Mission
                </div>
                <div className="col-12 col-md-6 text-center">
                    <div className="h3 color-white"> Contribuer à l'amélioration de la qualité des apprentissages dans l'enseignement secondaire</div>
                </div>
            </div>
            <div className="modele container">
                <video  src="/background_Large.mp4"  width={'100%'} controls = {false} type = {'video/mp4'} autoplay ></video>
            </div>
            <div className="white-gradient"></div>
        </section>
    )
}