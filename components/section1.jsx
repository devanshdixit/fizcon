/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import styles from '../styles/Section1.module.css'

export default function Section1() {
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
        <div>
            <Carousel variant="light" touch={false} style={{transition:"all 300ms ease"}}>
                <Carousel.Item>
                    <div className={styles.slide1}>
                        <div className="container">
                            {width < 1000 ?
                                 
                                <div className="container text-center" style={{ paddingTop: "20%", paddingBottom: "20%" }}>
                                    <div className={styles.slide1head}>Product<br /> Marketing Summit</div>
                                    <div className={styles.slide1text}>Product Marketing Summit 2020 will take place on 5-6 January in New York.</div>
                                    <div className={styles.button}>Buy Ticket</div>
                                </div>: <div className="row "  style={{paddingTop:"10%",paddingBottom:"11%"}}>
                                    <div className="col">
                                        <div className={styles.hidebox}>
                                            <img
                                                className="img-fluid"
                                                src="/images/section1/user-2.png"
                                                alt="First slide"
                                            />
                                        </div>
                                    </div>
                                    <div className="col text-white mt-auto mb-auto" >
                                        <div className={styles.slide1head}>Product<br /> Marketing Summit</div>
                                        <div className={styles.slide1text}>Product Marketing Summit 2020 will take place on 5-6 January in New York.</div>
                                        <div className={styles.button}>Buy Ticket</div>
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className={styles.slide2}>
                        <div className="container">
                            {width < 1000 ?
                             <div className="container text-center" style={{ paddingTop: "20%", paddingBottom: "20%" }}>
                             <div className={styles.slide1head}>Product<br /> Marketing Summit</div>
                             <div className={styles.slide1text}>Product Marketing Summit 2020 will take place on 5-6 January in New York.</div>
                             <div className={styles.button}>Buy Ticket</div>
                         </div> :
                                <div className="row" style={{paddingTop:"10%",paddingBottom:"10%"}}>
                                    <div className="col text-white mt-auto mb-auto">
                                        <div className={styles.slide1head}>Product<br /> Marketing Summit</div>
                                        <div className={styles.slide1text}>Product Marketing Summit 2020 will take place on 5-6 January in New York.</div>
                                        <div className={styles.button}>Buy Ticket</div>
                                    </div>
                                    <div className="col">
                                        <div className={styles.hidebox}>
                                            <img
                                                className="img-fluid"
                                                src="/images/section1/user.png"
                                                alt="First slide"
                                            />
                                        </div>
                                    </div>
                                </div> 
                               
                            }
                        </div>
                    </div>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}