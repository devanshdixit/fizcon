/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Section3.module.css"

export default function Section3() {
    return (
        <div className="container">
            <div className="row mb-4 pb-4">
                <div className="col-md-4 order-lg-2 pb-4" style={{ padding: "110px 0 175px" }}>
                    <div className="container">
                        <div className={styles.head}>Design & Development Events</div>
                        <div className={styles.title}>Pixel Pioneers Belfast 2019</div>
                        <div className={styles.text}>
                            Pixel Pioneers, a one-day conference for web and UX designers and front-end developers, will take place on the 23rd of November 2019 in Belfast.
                        </div>
                        <div className={styles.button}>Regsiter Now</div>
                    </div>
                </div>
                <div className="col-md-8 order-lg-1">
                    <div className={styles.backimage} style={{ padding: "110px 0 175px" }}>
                        <div className="container">
                            <div className="" style={{ maxWidth: "260px", margin: "0 auto" }}>
                                <div className={styles.infobox}>
                                    <div className="row">
                                        <div className="col-3 ">
                                            <div className={styles.icon}>
                                                <img src="/images/section3/locate.PNG" alt="" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.textrow}>The National Gallery London, Belfast</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.infobox}>
                                    <div className="row">
                                        <div className="col-3">
                                            <div className={styles.icon}>
                                                <img src="/images/section3/calendar.PNG" alt="" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.textrow} style={{ fontWeight: "800", fontSize: "32px" }}>23/11/2018</div>
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.infobox}>
                                    <div className="row">
                                        <div className="col-3">
                                            <div className={styles.icon}>
                                                <img src="/images/section3/clock.PNG" alt="" />
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className={styles.textrow} style={{ fontWeight: "800", fontSize: "20px" }}> 8:00 am 5:00 pm</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}