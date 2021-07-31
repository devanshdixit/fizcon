/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Section5.module.css"

export default function Section5() {
    return (
        <div className="container pb-4 pt-4">
            <div className="container pb-4 mt-4 mt-4 mb-4">
                <h1 className={styles.head}>Latest News</h1>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <div className={styles.cardbox} >
                        <div className={styles.innerbox}>
                            <div className={styles.imagebox}><img src="images/section5/news-1.jpg" className="img-fluid"  alt="" />
                            </div>
                            <div className="lower-content">
                                <div className={styles.infobox}>
                                    <span className={styles.date}>19- JAN- 2019</span>
                                    <span className="author">Jamie Ashbrook</span>
                                </div>
                                <h4 className={styles.h4}><a href="blog-single.html">Why Lead Generation Is Key For Business Growth.</a></h4>
                                <div className="text" style={{marginBottom:'35px'}}>Te probo omnis clita mea. In suas singulis consectetuer sed, vim fugit homero labores </div>
                                <div className={styles.linkbox}><a href="blog-single.html"><span className="fa fa-angle-right"></span>Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.cardbox} >
                        <div className={styles.innerbox}>
                            <div className={styles.imagebox}><img src="images/section5/news-2.jpg" className="img-fluid"  alt="" />
                            </div>
                            <div className="lower-content">
                                <div className={styles.infobox}>
                                    <span className={styles.date}>19- JAN- 2019</span>
                                    <span className="author">Jamie Ashbrook</span>
                                </div>
                                <h4 className={styles.h4}><a href="blog-single.html">How To Increase In-App Purchases In 2019.</a></h4>
                                <div className="text" style={{marginBottom:'35px'}}>Te probo omnis clita mea. In suas singulis consectetuer sed, vim fugit homero labores </div>
                                <div className={styles.linkbox}><a href="blog-single.html"><span className="fa fa-angle-right"></span>Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className={styles.cardbox} >
                        <div className={styles.innerbox}>
                            <div className={styles.imagebox}><img src="images/section5/news-3.jpg" className="img-fluid"  alt="" />
                            </div>
                            <div className="lower-content">
                                <div className={styles.infobox}>
                                    <span className={styles.date}>19- JAN- 2019</span>
                                    <span className="author">Jamie Ashbrook</span>
                                </div>
                                <h4 className={styles.h4}><a href="blog-single.html">Voxburner Launches Youth Trends Report 2018.</a></h4>
                                <div className="text" style={{marginBottom:'35px'}}>Te probo omnis clita mea. In suas singulis consectetuer sed, vim fugit homero labores </div>
                                <div className={styles.linkbox}><a href="blog-single.html"><span className="fa fa-angle-right"></span>Read More</a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}