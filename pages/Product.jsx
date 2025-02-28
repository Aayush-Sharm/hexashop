import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <>
        

            <Header />
            <div className="page-heading" id="top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="inner-content">
                                <h2>Single Product Page</h2>
                                <span>Awesome &amp; Creative HTML CSS layout by TemplateMo</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section" id="products">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="section-heading">
                                <h2>Our Latest Products</h2>
                                <span>Check out all of our products.</span>
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
                                    <img src="assets/images/men-01.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>Classic Spring</h4>
                                    <span>$120.00</span>
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
                                    <img src="assets/images/men-02.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>Air Force 1 X</h4>
                                    <span>$90.00</span>
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
                                    <img src="assets/images/men-03.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>Love Nana ‘20</h4>
                                    <span>$150.00</span>
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
                                    <img src="assets/images/kid-01.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>School Collection</h4>
                                    <span>$80.00</span>
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
                                    <img src="assets/images/kid-02.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>Summer Cap</h4>
                                    <span>$12.00</span>
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
                                    <img src="assets/images/kid-03.jpg" alt="" />
                                </div>
                                <div className="down-content">
                                    <h4>Classic Kid</h4>
                                    <span>$30.00</span>
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
                        <div className="col-lg-12">
                            <div className="pagination">
                                <ul>
                                    <li>
                                        <Link to="#">1</Link>
                                    </li>
                                    <li className="active">
                                        <Link to="#">2</Link>
                                    </li>
                                    <li>
                                        <Link to="#">3</Link>
                                    </li>
                                    <li>
                                        <Link to="#">4</Link>
                                    </li>
                                    <li>
                                        <Link to="#">&gt;</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Footer />
        </>
    )
};
export default Product;