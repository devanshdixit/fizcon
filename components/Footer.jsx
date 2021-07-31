/* eslint-disable @next/next/no-img-element */
import styles from "../styles/Footer.module.css"

const Footer = () => {
    return (
        <footer className={styles.footercontainermain} style={{ backgroundColor: "#12114A" }}>
            <div className="main-footer">

                <div className={styles.autocontainer}>
                    <div className={styles.sectitle}>
                        <span className={styles.title}>Get The Latest Offers</span>
                        <h2>Subscribe To Newsletter</h2>
                    </div>

                    <div className={styles.newsletterform}>
                        <form method="post" action="blog.html">
                            <div className={styles.formgroup}>
                                <input type="email" name="field-name" value="" placeholder="email@gmail.com" required="" />
                                <button type="submit" className={styles.btnthree}>Send</button>
                            </div>
                        </form>
                    </div>

                    <div className={styles.sociallinks}>
                        <ul>
                            <li><a href="#"><img src="/images/social/instagram.svg" height="30px" width="50px" alt="" /></a></li>
                            <li><a href="#"><img src="/images/social/linkedin.svg" alt="" /></a></li>
                            <li><a href="#"><img src="/images/social/telegram.svg" alt="" /></a></li>
                            <li><a href="#"><img src="/images/social/twitter.svg" alt="" /></a></li>
                            <li><a href="#"><img src="/images/social/youtube.svg"  height="30px" width="50px"  alt="" /></a></li>
                        </ul>
                    </div>

                    <div className={styles.footernav}>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Tickets</a></li>
                            <li><a href="#">Schedule</a></li>
                            <li><a href="#">Venue</a></li>
                        </ul>
                    </div>

                    <div className={styles.copyright}>Copyright © 2019. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer