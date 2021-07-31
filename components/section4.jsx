/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Section4.module.css'

export default function Section4() {
    return (
        <section className="container-fluid text-white pt-4 pb-4" style={{ position:"relative", backgroundColor: "#12114A" }}>
            <div className="container pt-4 pb-4 mt-4 mb-4">
                <h1 className={styles.head}>Pricing Plan</h1>
                <span className={styles.floattext}>Pricing Plan</span>
                <div className="row pt-4" style={{marginTop:"10%"}}>
                    <div className="col-md-4" style={{ margin: "0px", padding: "0px" }}>
                        <div className={styles.pricecard}>
                            <div className={styles.price}>$100</div>
                            <figure className="image"><img src="/images/section4/day-pass.png" alt="" /></figure>
                            <h4 className={styles.title}>Day Pass</h4>
                            <ul className="list-group">
                                <li className="list-group-item border-0">One Day Conference Ticket</li>
                                <li className="list-group-item border-0">Coffee-break &amp; Networking</li>
                                <li className="list-group-item border-0">Lunch and Networking</li>
                                <li className="list-group-item border-0">Certificate, Plugins &amp; ebook</li>
                            </ul>
                            <div className={styles.btnbox}>
                                <a href="contact.html" className="theme-btn">Get Ticket</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ margin: "0px", padding: "0px" }}>
                        <div className={styles.pricecard}>
                            <div className={styles.price}>$300</div>
                            <figure className="image"><img src="/images/section4/day-pass.png" alt="" /></figure>
                            <h4 className={styles.title}>Day Pass</h4>
                            <ul className="list-group">
                                <li className="list-group-item border-0">One Day Conference Ticket</li>
                                <li className="list-group-item border-0">Coffee-break &amp; Networking</li>
                                <li className="list-group-item border-0">Lunch and Networking</li>
                                <li className="list-group-item border-0">Certificate, Plugins &amp; ebook</li>
                            </ul>
                            <div className={styles.btnbox}>
                                <a href="contact.html" className="theme-btn">Get Ticket</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4" style={{ margin: "0px", padding: "0px" }}>
                        <div className={styles.pricecard} >
                            <div className={styles.price}>$400</div>
                            <figure className="image"><img src="/images/section4/day-pass.png" alt="" /></figure>
                            <h4 className={styles.title}>Day Pass</h4>
                            <ul className="list-group">
                                <li className="list-group-item border-0">One Day Conference Ticket</li>
                                <li className="list-group-item border-0">Coffee-break &amp; Networking</li>
                                <li className="list-group-item border-0">Lunch and Networking</li>
                                <li className="list-group-item border-0">Certificate, Plugins &amp; ebook</li>
                            </ul>
                            <div className={styles.btnbox}>
                                <a href="contact.html" className="theme-btn">Get Ticket</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}