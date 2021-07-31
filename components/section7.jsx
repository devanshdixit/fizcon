/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Section7.module.css'

export default function Section7() {
    return (
        <section className={styles.sections} style={{overflow:"hidden"}}>
            <div className="container">
                <h1 className={styles.h1s}>Event Highlight</h1>
                <div className="row">
                    <div className="shedule-column col-lg-5 col-md-12 col-sm-12">
                        <div className={styles.listtabs}>
                            <div className="row container" style={{ marginTop: '30PX' }}>
                                <div className="col">
                                    <div className={styles.eventtab1}>1</div>
                                </div>
                                <div className="col">
                                    <div className={styles.eventtab1}>2</div>
                                </div>
                                <div className="col">
                                    <div className={styles.eventtab1}>3</div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.innercolumn}>
                            <div className="" style={{ maxWidth: "300PX" }}>
                                <h3 className={styles.day}>DAY 1</h3>
                                <span className={styles.date}>7th January, Wednesday </span>
                                <div className={styles.text}>Ut quo decore libris erroribus, vel ne omnium invidunt, ut eos dicat aeque intellegat. Diam tota omnesque vim ad, sea et prim </div>
                                <div className={styles.linkbox}><a href="schedule.html"><span className="fa fa-angle-right"></span> More Details</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="author-column col-lg-7 col-sm-12 col-sm-12">
                        <div className="inner-column">
                            <div className="row">
                                <div className="author-block col-lg-6 col-md-6 col-sm-12">
                                    <div className={styles.innerbox}>
                                        <div className={styles.thumb}>
                                            <img src="images/section7/author-thumb-1.png" alt="" />
                                            <span className={styles.name}>Dominika</span>
                                        </div>
                                        <div className={styles.info}>
                                            <h5 className="title"><a href="#">Big Data &amp; Analytics</a></h5>
                                            <span className="date">10:00am, 7 jan 2019</span>
                                        </div>
                                        <div className="text">Ut quo decore libris erroribus, vel ne omnium invidunt, ut eos dicat aeque int elle gat. Diam tota omnesqu Sed liber accumsan appemp prodesset. </div>
                                    </div>
                                </div>

                                <div className="author-block col-lg-6 col-md-6 col-sm-12">
                                    <div className={styles.innerbox}>
                                        <div className={styles.thumb}>
                                            <img src="images/section7/author-thumb-2.png" alt="" />
                                            <span className="name">Dominika</span>
                                        </div>
                                        <div className={styles.info}>
                                            <h5 className="title"><a href="#">Mobile 360 MENA</a></h5>
                                            <span className={styles.name}>11:00am, 7 jan 2019</span>
                                        </div>
                                        <div className="text">Ut quo decore libris erroribus, vel ne omnium invidunt, ut eos dicat aeque int elle gat. Diam tota omnesqu Sed liber accumsan appemp prodesset. </div>
                                    </div>
                                </div>

                                <div className="author-block col-lg-6 col-md-6 col-sm-12">
                                    <div className={styles.innerbox}>
                                        <div className={styles.thumb}>
                                            <img src="images/section7/author-thumb-3.png" alt="" />
                                            <span className="name">Dominika</span>
                                        </div>
                                        <div className={styles.info}>
                                            <h5 className="title"><a href="#">DAM San Diego</a></h5>
                                            <span className={styles.name}>12:00am, 7 jan 2019</span>
                                        </div>
                                        <div className="text">Ut quo decore libris erroribus, vel ne omnium invidunt, ut eos dicat aeque int elle gat. Diam tota omnesqu Sed liber accumsan appemp prodesset. </div>
                                    </div>
                                </div>

                                <div className="author-block col-lg-6 col-md-6 col-sm-12">
                                    <div className={styles.innerbox}>
                                        <div className={styles.thumb}>
                                            <img src="images/section7/author-thumb-4.png" alt="" />
                                            <span className="name">Dominika</span>
                                        </div>
                                        <div className={styles.info}>
                                            <h5 className="title"><a href="#">Mobile UX London</a></h5>
                                            <span className={styles.name}>9:00am, 7 jan 2019</span>
                                        </div>
                                        <div className="text">Ut quo decore libris erroribus, vel ne omnium invidunt, ut eos dicat aeque int elle gat. Diam tota omnesqu Sed liber accumsan appemp prodesset. </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}