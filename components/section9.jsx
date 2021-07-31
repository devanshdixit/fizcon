/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Section9.module.css'


export default function Section9() {
    return (
        <section className={styles.topicssection}>
            <div className="container">
                <span className={styles.floattext}>Events topics</span>
                <div className="anim-icons">
                    <span className="icon icon-circle-5 wow zoomIn animated" style={{ visibility: "visibl", animationName: "zoomIn" }}></span>
                    <span className="icon icon-circle-6 wow zoomIn animated" data-wow-delay="400ms" style={{ visibility: "visible", animationDelay: "400ms", animationName: "zoomIn" }}></span>
                    <span className="icon icon-circle-7 wow zoomIn animated" data-wow-delay="800ms" style={{ visibility: "visible", animationDelay: "800ms", animationName: "zoomIn" }}></span>
                    <span className="icon icon-wave-line wow slideInRight animated" style={{ visibility: "visible", animationName: "slideInRight" }}></span>
                </div>
                <div className="auto-container">
                    <div className={styles.sectitle}>
                        <h2>Topics</h2>
                    </div>
                    <div className="row">
                        <div className="left-column col-lg-3 col-md-6 col-sm-12">
                            <div className="inner-column">
                                <ul className={styles.topiclist1}>
                                    <li className=""><a href="#">Project Introduction <span className="icon fa fa-chevron-right"></span></a></li>
                                    <li><a href="#">Research &amp; Concept <span className="icon fa fa-chevron-right"></span></a></li>
                                    <li><a href="#">Wireframing <span className="icon fa fa-chevron-right"></span></a></li>
                                    <li><a href="#">Testing <span className="icon fa fa-chevron-right"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="right-column col-lg-3 col-md-6 col-sm-12 order-3">
                            <div className="inner-column">
                                <ul className={styles.topiclist1}>
                                    <li><a href="#">Design <span className="icon fa fa-chevron-right"></span></a></li>
                                    <li><a href="#">Implementation recommendations <span className="icon fa fa-chevron-right"></span></a></li>
                                    <li><a href="#">Project Termination<span className="icon fa fa-chevron-right"></span></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="center-column col-lg-6 col-md-12 col-sm-12">
                            <div className={styles.innercolumn}>
                                <figure className={styles.image} style={{ visibility: "visible", animationName: "zoomInDown" }}><img className="img-fluid" src="images/section9/topic-girl.png" alt="" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}