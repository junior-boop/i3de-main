export default function Footer(){
    return (
        <>
            <section className="info_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>
                            Technique d'impression 3D
                        </h5>
                        <ul>
                            <li>
                                Fused deposition modeling (FDM)
                            </li>
                            <li>
                                Stereolithography Apparatus (SLA)
                            </li>
                            <li>
                                Continuous Liquid Interface Production (CLIP)
                            </li>
                            <li>
                                Frittage Selective Laser Sintering (SLS)
                            </li>
                            <li>
                            Selective Laser Melting (SLM)
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>
                            Autres domaines d'application dans l'I3D 
                        </h5>
                        <ul>
                            <li>
                                L'Aeronautique
                            </li>
                            <li>
                                Construction
                            </li>
                            <li>
                                l'industrie automobile
                            </li>
                            <li>
                                la mode
                            </li>
                            <li>
                                la nourriture
                            </li>
                            <li>
                            les Etudes scientifiques
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>
                        Materiaux pour I3D
                        </h5>
                        <ul>
                            <li>
                                les plastiques
                            </li>
                            <li>
                            les metaux
                            </li>
                            <li>
                                la ceramique
                            </li>
                            <li>
                                tissu humain (ou cuire de vache)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>

            <section className="container-fluid footer_section bg-special">
                <p className="color-white px-3">
                    Copyright &copy; 2022 All Rights Reserved By <a className="color-white" href="https://html.design/">CAYSTI Corp</a>
                </p>
            </section>
        </>
    )
}