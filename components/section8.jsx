/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react'
import styles from '../styles/Section8.module.css'

export default function Section8() {
    const [btn1, setbtn1] = useState(true);
    const [btn2, setbtn2] = useState(false);
    const [btn3, setbtn3] = useState(false);
    const [btn4, setbtn4] = useState(false);
    const [btn5, setbtn5] = useState(false);
    const [btn6, setbtn6] = useState(false);
    const win = typeof window;
    const [width, setWidth] = useState(win.innerWidth);

    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });
    return (
        <section className={styles.speakers}>
            <span className={styles.floattext}>Event Speak</span>
            <div className={styles.autocontainer}>
                <div className={styles.sectitle}>
                    <h2>Event Speakers</h2>
                </div>
                <div className="speaker-tabs tabs-box">
                    <div className="row">
                        <div className="thumb-column col-lg-6 col-md-12 col-sm-12 order-2">
                            {width <1000 ?  "":
                            <ul className="tab-buttons clearfix">
                                <li className={styles.tabbtn1} data-tab="#speaker-1" onClick={() => { setbtn1(true); setbtn2(false); setbtn3(false); setbtn4(false); setbtn5(false); setbtn6(false); }}><div className="thumb"><img src="images/section7/speaker-thumb-1.png" alt="" /></div></li>
                                <li className={styles.tabbtn2} data-tab="#speaker-2" onClick={() => { setbtn1(false); setbtn2(true); setbtn3(false); setbtn4(false); setbtn5(false); setbtn6(false); }}><div className="thumb"><img src="images/section7/speaker-thumb-2.png" alt="" /></div></li>
                                <li className={styles.tabbtn3} data-tab="#speaker-3" onClick={() => { setbtn1(false); setbtn2(false); setbtn3(true); setbtn4(false); setbtn5(false); setbtn6(false); }}><div className="thumb"><img src="images/section7/speaker-thumb-3.png" alt="" /></div></li>
                                <li className={styles.tabbtn4} data-tab="#speaker-4" onClick={() => { setbtn1(false); setbtn2(false); setbtn3(false); setbtn4(true); setbtn5(false); setbtn6(false); }}><div className="thumb"><img src="images/section7/speaker-thumb-4.png" alt="" /></div></li>
                                <li className={styles.tabbtn5} data-tab="#speaker-5" onClick={() => { setbtn1(false); setbtn2(false); setbtn3(false); setbtn4(false); setbtn5(true); setbtn6(false); }}><div className="thumb"><img src="images/section7/speaker-thumb-5.png" alt="" /></div></li>
                                <li className={styles.tabbtn6} data-tab="#speaker-6" onClick={() => { setbtn1(false); setbtn2(false); setbtn3(false); setbtn4(false); setbtn5(false); setbtn6(true); }}><div className="thumb"><img src="images/section7/speaker-thumb-6.png" alt="" /></div></li>
                            </ul> }
                        </div>
                        <div className="content-column col-lg-6 col-md-12 col-sm-12" style={{ position: "relative" }}>

                            <div className={styles.tabscontent}>
                                {btn1 ? <div className="tab" id="speaker-1">
                                    <div className="content">
                                        <div className="speaker-block text-center">
                                            <div className="inner-box">
                                                <div className="image-box" style={{ marginBottom: "40px" }}>
                                                    <figure className="image"><img src="/images/section7/speaker.png" className="iumg-fluid" alt="" /></figure>
                                                </div>
                                                <div className="lower-content">
                                                    <div className={styles.infobox}>
                                                        <h3 className="name">Esther Varnell</h3>
                                                        <span className="designation">MARKETING MANAGER</span>
                                                    </div>
                                                    <div className={styles.text}>Saperet tibique delicatissimi per et, laudem<br /> propriae cotidieuo. Ea agam postu</div>
                                                    <div className="row" style={{ marginLeft: "auto", width: "300px", marginRight: "auto" }}>
                                                        <div className="col"><a href="#"><img src="/images/social/instagram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                        <div className="col"><a href="#"><img src="/images/social/linkedin.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                        <div className="col"><a href="#"><img src="/images/social/telegram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                        <div className="col"><a href="#"><img src="/images/social/twitter.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "1px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> : ""}

                                {btn2 ?
                                    <div className="tab" id="speaker-1">
                                        <div className="content">
                                            <div className="speaker-block text-center">
                                                <div className="inner-box">
                                                    <div className="image-box" style={{ marginBottom: "40px" }}>
                                                        <figure className="image"><img src="/images/section7/speaker.png" alt="" /></figure>
                                                    </div>
                                                    <div className="lower-content">
                                                        <div className={styles.infobox}>
                                                            <h3 className="name">Dawid Malan</h3>
                                                            <span className="designation">MARKETING MANAGER</span>
                                                        </div>
                                                        <div className={styles.text}>Saperet tibique delicatissimi per et, laudem<br /> propriae cotidieuo. Ea agam postu</div>
                                                        <div className="row" style={{ marginLeft: "auto", width: "300px", marginRight: "auto" }}>
                                                            <div className="col"><a href="#"><img src="/images/social/instagram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/linkedin.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/telegram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/twitter.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "1px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""}

                                {btn3 ?
                                    <div className="tab" id="speaker-1">
                                        <div className="content">
                                            <div className="speaker-block text-center">
                                                <div className="inner-box">
                                                    <div className="image-box" style={{ marginBottom: "40px" }}>
                                                        <figure className="image"><img src="/images/section7/speaker.png" className="iumg-fluid" alt="" /></figure>
                                                    </div>
                                                    <div className="lower-content">
                                                        <div className={styles.infobox}>
                                                            <h3 className="name">Asuncion Degrazia</h3>
                                                            <span className="designation">MARKETING MANAGER</span>
                                                        </div>
                                                        <div className={styles.text}>Saperet tibique delicatissimi per et, laudem<br /> propriae cotidieuo. Ea agam postu</div>
                                                        <div className="row" style={{ marginLeft: "auto", width: "300px", marginRight: "auto" }}>
                                                            <div className="col"><a href="#"><img src="/images/social/instagram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/linkedin.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/telegram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/twitter.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "1px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""}

                                {btn4 ?
                                    <div className="tab" id="speaker-1">
                                        <div className="content">
                                            <div className="speaker-block text-center">
                                                <div className="inner-box">
                                                    <div className="image-box" style={{ marginBottom: "40px" }}>
                                                        <figure className="image"><img src="/images/section7/speaker.png" alt="" className="iumg-fluid" /></figure>
                                                    </div>
                                                    <div className="lower-content">
                                                        <div className={styles.infobox}>
                                                            <h3 className="name">Otha Shoji</h3>
                                                            <span className="designation">MARKETING MANAGER</span>
                                                        </div>
                                                        <div className={styles.text}>Saperet tibique delicatissimi per et, laudem<br /> propriae cotidieuo. Ea agam postu</div>
                                                        <div className="row" style={{ marginLeft: "auto", width: "300px", marginRight: "auto" }}>
                                                            <div className="col"><a href="#"><img src="/images/social/instagram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/linkedin.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/telegram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/twitter.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "1px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""}

                                {btn5 ?
                                    <div className="tab" id="speaker-1">
                                        <div className="content">
                                            <div className="speaker-block text-center">
                                                <div className="inner-box">
                                                    <div className="image-box" style={{ marginBottom: "40px" }}>
                                                        <figure className="image"><img src="/images/section7/speaker.png" className="iumg-fluid" alt="" /></figure>
                                                    </div>
                                                    <div className="lower-content">
                                                        <div className={styles.infobox}>
                                                            <h3 className="name">Junko Kazmer</h3>
                                                            <span className="designation">MARKETING MANAGER</span>
                                                        </div>
                                                        <div className={styles.text}>Saperet tibique delicatissimi per et, laudem<br /> propriae cotidieuo. Ea agam postu</div>
                                                        <div className="row" style={{ marginLeft: "auto", width: "300px", marginRight: "auto" }}>
                                                            <div className="col"><a href="#"><img src="/images/social/instagram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/linkedin.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/telegram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/twitter.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "1px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""}

                                {btn6 ?
                                    <div className="tab" id="speaker-1">
                                        <div className="content">
                                            <div className="speaker-block text-center">
                                                <div className="inner-box">
                                                    <div className="image-box" style={{ marginBottom: "40px" }}>
                                                        <figure className="image"><img src="/images/section7/speaker.png" className="iumg-fluid" alt="" /></figure>
                                                    </div>
                                                    <div className="lower-content">
                                                        <div className={styles.infobox}>
                                                            <h3 className="name">Ghislaine Ho</h3>
                                                            <span className="designation">MARKETING MANAGER</span>
                                                        </div>
                                                        <div className={styles.text}>Saperet tibique delicatissimi per et, laudem<br /> propriae cotidieuo. Ea agam postu</div>
                                                        <div className="row" style={{ marginLeft: "auto", width: "300px", marginRight: "auto" }}>
                                                            <div className="col"><a href="#"><img src="/images/social/instagram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/linkedin.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/telegram.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "17px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                            <div className="col"><a href="#"><img src="/images/social/twitter.svg" style={{ backgroundColor: "rgb(18,17,74)", borderRadius: "1px", width: "2em", marginRight: ".5rem" }} alt="" /></a></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> : ""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}