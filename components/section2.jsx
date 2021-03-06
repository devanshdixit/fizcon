/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Section2.module.css"

export default function Section2() {
    return (
        <div className="container-fluid" style={{overflow:"hidden"}}>
            <div className="container" style={{ paddingTop: "10%", paddingBottom: "10%" }}>
                <div className={styles.title}>Our Feature</div>
                <div className="row pt-4 mt-4">
                    <div className="col-md-4">
                        <div className={styles.box} style={{ position: "relative", padding: "40px 50px", borderRadius: "10px" }}>
                            <div className={styles.iconbox}>
                                <span className={styles.icon}>
                                    <img src="/images/section2/trophy.png" className="img-fluid" alt="" style={{ height: "30px" }} />
                                </span>
                            </div>
                            <h4 className={styles.iconboxtitle}>Experience</h4>
                            <div className={styles.text}>Meet the experts from the tech and design world you follow online.lorem temporibus id. integandi</div>
                            <div className={styles.linkbox}><a href="#">Read More</a></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.box} style={{ position: "relative", padding: "40px 50px", borderRadius: "10px" }}>
                            <div className={styles.iconbox}>
                                <span className={styles.icon} style={{ background: "linear-gradient(to bottom, rgba(138,0,255,1) 0%,rgba(75,30,206,1) 100%)" }}>
                                    <img src="/images/section2/startup.png" className="img-fluid" alt="" style={{ height: "30px" }} />
                                </span>
                            </div>
                            <h4 className={styles.iconboxtitle}>Networking</h4>
                            <div className={styles.text}>Connect with and exchange ideas with designers from all over the world.Party Intimate cocktail party</div>
                            <div className={styles.linkbox}><a href="#">Read More</a></div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className={styles.box} style={{ position: "relative", padding: "40px 50px", borderRadius: "10px" }}>
                            <div className={styles.iconbox}>
                                <span className={styles.icon} style={{ background: "linear-gradient(to bottom, rgba(242,4,135,1) 0%,rgba(162,0,89,1) 100%)" }}>
                                    <img src="/images/section2/medal.png" className="img-fluid" alt="" style={{ height: "30px" }} />
                                </span>
                            </div>
                            <h4 className={styles.iconboxtitle}>Party</h4>
                            <div className={styles.text}>Intimate cocktail party watching the sunset over San Francisco Bay.Lorem emporibus id. In intege salutandi</div>
                            <div className={styles.linkbox}><a href="#">Read More</a></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}