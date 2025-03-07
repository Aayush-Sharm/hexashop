import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
const About = () => {
    return (
        <>
        
            <Header />
            <div className="page-heading about-page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>About Our Company</h2>
                                <span>Awesome, clean &amp; creative HTML5 Template</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
                {/* ***** About Area Starts ***** */}
                <div className="about-us">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="left-image">
                                    <img src="assets/images/about-left-image.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="right-content">
                                    <h4>About Us &amp; Our Skills</h4>
                                    <span>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod kon tempor incididunt ut labore.
                                    </span>
                                    <div className="quote">
                                        <i className="fa fa-quote-left" />
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                            eiuski smod kon tempor incididunt ut labore.
                                        </p>
                                    </div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod kon tempor incididunt ut labore et dolore magna aliqua ut
                                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                                        nisi ut aliquip.
                                    </p>
                                    <ul>
                                        <li>
                                           <Link to="#">
                                                <i className="fa fa-facebook" />
                                           </Link>
                                        </li>
                                        <li>
                                           <Link to="#">
                                                <i className="fa fa-twitter" />
                                           </Link>
                                        </li>
                                        <li>
                                           <Link to="#">
                                                <i className="fa fa-linkedin" />
                                           </Link>
                                        </li>
                                        <li>
                                           <Link to="#">
                                                <i className="fa fa-behance" />
                                           </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** About Area Ends ***** */}
                {/* ***** Our Team Area Starts ***** */}
                <section className="our-team">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2>Our Amazing Team</h2>
                                    <span>
                                        Details to details is what makes Hexashop different from the other
                                        themes.
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="team-item">
                                    <div className="thumb">
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <ul>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-facebook" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-twitter" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-linkedin" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-behance" />
                                                       </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <img src="assets/images/team-member-01.jpg" alt="men-01" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Ragnar Lodbrok</h4>
                                        <span>Product Caretaker</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="team-item">
                                    <div className="thumb">
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <ul>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-facebook" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-twitter" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-linkedin" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-behance" />
                                                       </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <img src="assets/images/team-member-02.jpg" alt="men=02" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Ragnar Lodbrok</h4>
                                        <span>Product Caretaker</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="team-item">
                                    <div className="thumb">
                                        <div className="hover-effect">
                                            <div className="inner-content">
                                                <ul>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-facebook" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-twitter" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-linkedin" />
                                                       </Link>
                                                    </li>
                                                    <li>
                                                       <Link to="#">
                                                            <i className="fa fa-behance" />
                                                       </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <img src="assets/images/team-member-03.jpg" alt="" />
                                    </div>
                                    <div className="down-content">
                                        <h4>Ragnar Lodbrok</h4>
                                        <span>Product Caretaker</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Our Team Area Ends ***** */}
                {/* ***** Services Area Starts ***** */}
                <section className="our-services">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-heading">
                                    <h2>Our Services</h2>
                                    <span>
                                        Details to details is what makes Hexashop different from the other
                                        themes.
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item">
                                    <h4>Synther Vaporware</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do
                                        eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
                                    </p>
                                    <img src="assets/images/service-01.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item">
                                    <h4>Locavore Squidward</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do
                                        eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
                                    </p>
                                    <img src="assets/images/service-02.jpg" alt="" />
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="service-item">
                                    <h4>Health Gothfam</h4>
                                    <p>
                                        Lorem ipsum dolor sit amet, consecteturti adipiscing elit, sed do
                                        eiusmod temp incididunt ut labore, et dolore quis ipsum suspend.
                                    </p>
                                    <img src="assets/images/service-03.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* ***** Services Area Ends ***** */}
                {/* ***** Subscribe Area Starts ***** */}
                <div className="subscribe">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="section-heading">
                                    <h2>By Subscribing To Our Newsletter You Can Get 30% Off</h2>
                                    <span>
                                        Details to details is what makes Hexashop different from the other
                                        themes.
                                    </span>
                                </div>
                                <form id="subscribe" action="" method="get">
                                    <div className="row">
                                        <div className="col-lg-5">
                                            <fieldset>
                                                <input
                                                    name="name"
                                                    type="text"
                                                    id="name"
                                                    placeholder="Your Name"
                                                    required=""
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-5">
                                            <fieldset>
                                                <input
                                                    name="email"
                                                    type="text"
                                                    id="email"
                                                    pattern="[^ @]*@[^ @]*"
                                                    placeholder="Your Email Address"
                                                    required=""
                                                />
                                            </fieldset>
                                        </div>
                                        <div className="col-lg-2">
                                            <fieldset>
                                                <button
                                                    type="submit"
                                                    id="form-submit"
                                                    className="main-dark-button"
                                                >
                                                    <i className="fa fa-paper-plane" />
                                                </button>
                                            </fieldset>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-4">
                                <div className="row">
                                    <div className="col-6">
                                        <ul>
                                            <li>
                                                Store Location:
                                                <br />
                                                <span>Sunny Isles Beach, FL 33160, United States</span>
                                            </li>
                                            <li>
                                                Phone:
                                                <br />
                                                <span>010-020-0340</span>
                                            </li>
                                            <li>
                                                Office Location:
                                                <br />
                                                <span>North Miami Beach</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul>
                                            <li>
                                                Work Hours:
                                                <br />
                                                <span>07:30 AM - 9:30 PM Daily</span>
                                            </li>
                                            <li>
                                                Email:
                                                <br />
                                                <span>info@company.com</span>
                                            </li>
                                            <li>
                                                Social Media:
                                                <br />
                                                <span>
                                                   <Link to="#">Facebook</Link>,<Link to="#">Instagram</Link>,{" "}
                                                   <Link to="#">Behance</Link>,<Link to="#">Linkedin</Link>
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ***** Subscribe Area Ends ***** */}
            </>
            <Footer />
        </>
    )
};
export default About;