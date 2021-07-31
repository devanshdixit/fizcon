/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Section10.module.css'

export default function Section10() {
    return (
        <section className={styles.locationsection}>

            <span className={styles.floattext}>Get Directio</span>
            <div className="container">
                <div className="anim-icons">
                    <span className="icon icon-dots wow zoomIn animated" style={{ visibility: "visible", animationName: "zoomIn" }}></span>
                    <span className="icon icon-dots-2"></span>
                    <span className="icon icon-lines"></span>
                </div>
                <div className="container">
                    <div className={styles.sectitle}>
                        <h2>Locations</h2>
                    </div>
                    <div className="row">

                        <div className="blocks-column col-lg-4 col-md-12 col-sm-12">
                            <div className="inner-column">

                                <div className={styles.locationblock} style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                    <div className="inner-box">
                                        <div className="row">
                                            <div className="col"><h4 className={styles.head}><a href="#">Conference Location</a></h4></div>
                                            <div className="col">
                                                <div className={styles.imgbox}><img className={styles.image} height="50px" width="50px" src="/images/section10/1.PNG" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className={styles.text}>Washington State Convention Center 705 Pike Street ,Seattle, WA 98101 Phone: 206-694-5000</div>
                                    </div>
                                </div>

                                <div className={styles.locationblock} style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                    <div className="inner-box">
                                        <div className="row">
                                            <div className="col"><h4 className={styles.head}><a href="#">Hotel Information</a></h4></div>
                                            <div className="col">
                                                <div className={styles.imgbox}><img className={styles.image} height="50px" width="50px" src="/images/section10/2.PNG" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className={styles.text}>Washington State Convention Center 705 Pike Street ,Seattle, WA 98101 Phone: 206-694-5000</div>
                                    </div>
                                </div>

                                <div className={styles.locationblock} style={{ visibility: "visible", animationName: "fadeInUp" }}>
                                    <div className="inner-box">
                                        <div className="row">
                                            <div className="col"><h4 className={styles.head}><a href="#">Airport Information</a></h4></div>
                                            <div className="col">
                                                <div className={styles.imgbox}><img className={styles.image} height="50px" width="50px" src="/images/section10/3.PNG" alt="" /></div>
                                            </div>
                                        </div>
                                        <div className={styles.text}>Washington State Convention Center 705 Pike Street ,Seattle, WA 98101 Phone: 206-694-5000</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="map-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column wow fadeInRight animated" style={{ visibility: "visible", animationName: "fadeInRight" }}>
                                <div className="image-box">
                                    <figure className="image"><img src="images/section10/location-image.jpg" alt="" /></figure></div>
                                <div className="map-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}