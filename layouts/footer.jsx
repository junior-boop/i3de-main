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
                                Frittage Sélective Laser Sintering (SLS)
                            </li>
                            <li>
                            Selective Laser Melting (SLM)
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>
                            Autres domaines d'application dans l'I3DE
                        </h5>
                        <ul>
                            <li>
                                L'Aéronautique
                            </li>
                            <li>
                                La Construction
                            </li>
                            <li>
                                L'industrie automobile
                            </li>
                            <li>
                                La mode
                            </li>
                            <li>
                                La nourriture
                            </li>
                            <li>
                            Les Études scientifiques
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>
                        Matériaux pour I3DE
                        </h5>
                        <ul>
                            <li>
                                Les plastiques
                            </li>
                            <li>
                                Les métaux
                            </li>
                            <li>
                                La céramique
                            </li>
                            <li>
                                Tissu humain (ou cuire de vache)
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            </section>

            <section className="footer_section bg-special">
                <p className="color-white px-3">
                    Copyright &copy; 2022 All Rights Reserved By <a className="color-white" href="https://html.design/">CAYSTI Corp</a>
                </p>
            </section>
        </>
    )
}