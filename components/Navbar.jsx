/* eslint-disable @next/next/no-img-element */
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <header className="main-header">

            <div className={styles.headerupper}>
                <div className={styles.outercontainer}>
                    <div className="clearfix">
                        <div className={styles.logobox}>
                            <div className={styles.logo}><a href="index.html"><img src="/images/logo.png" alt="" title="" /></a></div>
                        </div>
                        <div className={styles.navouter}>
                            <nav className="main-menu navbar-expand-md" style={{position: "static",float: "left"}}>
                                {/* <div className="navbar-header">
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                </div> */}
                                <div className="navbar-collapse collapse scroll-nav clearfix" id="navbarSupportedContent">
                                    <ul className={styles.navul}>
                                        <li className="current dropdown">
                                            <a href="#">Home</a>
                                            <ul>
                                                <li><a href="index.html">Home page 01</a></li>
                                                <li><a href="index-2.html">Home page 02</a></li>
                                                <li><a href="index-3.html">Home page 03</a></li>
                                                <li><a href="index-4.html">Home page 04</a></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                                        <li className="dropdown"><a href="#">About</a>
                                            <ul>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="pricing.html">Pricing</a></li>
                                                <li><a href="login.html">login</a></li>
                                                <li><a href="sign-up.html">Sign Up</a></li>
                                                <li><a href="coming-soon.html">Coming Soon</a></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                                        <li className="dropdown has-mega-menu"><a href="#">Pages</a>
                                            <div className="mega-menu">
                                                <div className="mega-menu-bar row no-gutters">
                                                    <div className="column col-lg-3 col-md-3 col-sm-12">
                                                        <ul>
                                                            <li><i className="flaticon-avatar"></i><a href="index.html">Home page 01</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="index-2.html">Home page 02</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="index-3.html">Home page 03</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="index-4.html">Home page 04</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column col-lg-3 col-md-3 col-sm-12">
                                                        <ul>
                                                            <li><i className="flaticon-avatar"></i><a href="about.html">About</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="pricing.html">Pricing</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="login.html">login</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="sign-up.html">Sign Up</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="coming-soon.html">Coming Soon</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column col-lg-3 col-md-3 col-sm-12">
                                                        <ul>
                                                            <li><i className="flaticon-avatar"></i><a href="blog.html">Blog</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="blog-single.html">Blog Single</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="speakers.html">Speakers</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="schedule.html">Schedule</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="error-page.html">404 Page</a></li>
                                                        </ul>
                                                    </div>
                                                    <div className="column col-lg-3 col-md-3 col-sm-12">
                                                        <ul>
                                                            <li><i className="flaticon-avatar"></i><a href="event-venue.html">Event Venue</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="project.html">Project</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="shop.html">Shop</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="shop-single.html">Shop Single</a></li>
                                                            <li><i className="flaticon-avatar"></i><a href="contact.html">Contact</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                                        <li><a href="speakers.html">Speakers</a></li>
                                        <li><a href="schedule.html">Schedule</a></li>
                                        <li className="dropdown"><a href="#">Blog</a>
                                            <ul>
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="blog-single.html">Blog Single</a></li>
                                            </ul>
                                            <div className="dropdown-btn"><span className="fa fa-angle-down"></span></div></li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                                
                            </nav>
                            <div className={styles.btnbox}>
                                <a href="contact.html" className="theme-btn btn-style-one">Buy Tickets</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}