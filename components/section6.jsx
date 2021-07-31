/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Section6.module.css'

export default function Section6() {
    return (
        <section className={styles.section}>
            <span className={styles.floattext}>Our Sponsor</span>
            <div className="container">
                <h1 className={styles.head}>Our Sponsors</h1>
                <div className="d-flex flex-wrap justify-content-center">
                    <div className={styles.clientlogo}>
                        <figure className="image">
                            <a href="#"><img src="images/section6/1.png" alt="" /></a>
                        </figure>
                    </div>
                    <div className={styles.clientlogo}>
                        <figure className="image">
                            <a href="#"><img src="images/section6/2.png" alt="" /></a>
                        </figure>
                    </div>
                    <div className={styles.clientlogo}>
                        <figure className="image">
                            <a href="#"><img src="images/section6/3.png" alt="" /></a>
                        </figure>
                    </div>
                    <div className={styles.clientlogo}>
                        <figure className="image">
                            <a href="#"><img src="images/section6/4.png" alt="" /></a>
                        </figure>
                    </div>
                    <div className={styles.clientlogo}>
                        <figure className="image">
                            <a href="#"><img src="images/section6/5.png" alt="" /></a>
                        </figure>
                    </div>
                    <div className={styles.clientlogo}>
                        <figure className="image">
                            <a href="#"><img src="images/section6/6.png" alt="" /></a>
                        </figure>
                    </div>
                    <div className={styles.clientlogo}>
                        <figure className="image">
                            <a href="#"><img src="images/section6/7.png" alt="" /></a>
                        </figure>
                    </div>
                </div>
                <div className={styles.btnbox}>BECOME A SPONSOR</div>
            </div>
            
        </section>
    )
}