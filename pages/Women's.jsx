// import Footer from "../components/Footer";
import Header from "../components/Header";
import { Link } from "react-router-dom";
const Womens = () => {
    return (
        <>
            <Header />
            <section className="section" id="women">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="section-heading">
                                <h2>Women's Latest</h2>
                                <span>
                                    Details to details is what makes Hexashop different from the other
                                    themes.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-eye" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-shopping-cart" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/women-01.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>New Green Jacket</h4>
                                    <span>$75.00</span>
                                    <ul className="stars">
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-eye" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-shopping-cart" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/women-02.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>Classic Dress</h4>
                                    <span>$45.00</span>
                                    <ul className="stars">
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="item">
                                <div className="thumb">
                                    <div className="hover-content">
                                        <ul>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-eye" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-star" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="single-product.html">
                                                    <i className="fa fa-shopping-cart" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <img src="assets/images/women-03.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>Spring Collection</h4>
                                    <span>$130.00</span>
                                    <ul className="stars">
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa fa-star" />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="first-item">
                                <div className="logo">
                                    <img
                                        src="assets/images/white-logo.png"
                                        alt="hexashop ecommerce templatemo"
                                    />
                                </div>
                                <ul>
                                    <li>
                                        <Link to="#">
                                            16501 Collins Ave, Sunny Isles Beach, FL 33160, United States
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">hexashop@company.com</Link>
                                    </li>
                                    <li>
                                        <Link to="#">010-020-0340</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <h4>Shopping &amp; Categories</h4>
                            <ul>
                                <li>
                                    <Link to="#">Men’s Shopping</Link>
                                </li>
                                <li>
                                    <Link to="#">Women’s Shopping</Link>
                                </li>
                                <li>
                                    <Link to="#">Kid's Shopping</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Useful Links</h4>
                            <ul>
                                <li>
                                    <Link to="#">Homepage</Link>
                                </li>
                                <li>
                                    <Link to="#">About Us</Link>
                                </li>
                                <li>
                                    <Link to="#">Help</Link>
                                </li>
                                <li>
                                    <Link to="#">Contact Us</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-3">
                            <h4>Help &amp; Information</h4>
                            <ul>
                                <li>
                                    <Link to="#">Help</Link>
                                </li>
                                <li>
                                    <Link to="#">FAQ's</Link>
                                </li>
                                <li>
                                    <Link to="#">Shipping</Link>
                                </li>
                                <li>
                                    <Link to="#">Tracking ID</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-12">
                            <div className="under-footer">
                                <p>
                                    Copyright © 2025 HexaShop Co.
                                    <br />
                                    {" "}
                                    <Link
                                        to="https://templatemo.com"
                                        target="_parent"
                                        title="free css templates"
                                    >
                                        
                                    </Link>
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
            </footer>
        </>

    )
};
export default Womens;