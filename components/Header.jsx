import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <header className="header-area header-sticky">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="main-nav">
                                {/* ***** Logo Start ***** */}
                                <Link to="index.html" className="logo">
                                    <img src="assets/images/logo.png"  alt=""/>
                                </Link>
                                {/* ***** Logo End ***** */}
                                {/* ***** Menu Start ***** */}
                                <ul className="nav">
                                    <li className="scroll-to-section">
                                        <Link to="/home">
                                            Home
                                        </Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/mens">Men's</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/womens">Women's</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/kids">Kid's</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/product">Products</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/about">About-Us</Link>
                                    </li>
                                    <li className="scroll-to-section">
                                        <Link to="/contact">Contact-Us</Link>
                                    </li>
                                </ul>
                                <Link className="menu-trigger">
                                    <span>Menu</span>
                                </Link>
                                {/* ***** Menu End ***** */}
                            </nav>
                        </div>
                    </div>
                </div>
            </header>

        </>

    )
};
export default Header;