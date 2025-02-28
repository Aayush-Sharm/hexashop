import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";
import Mens from "../pages/Men's";
import Womens from "../pages/Women's";
import Kids from "../pages/Kid's";
import Product from "../pages/Product";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Dashboard from "../admin/Dashboard";
import SideBar from "../components/SideBar";
import Users from "../admin/Users";
import ProductInventory from "../admin/ProductInventory";
import Orders from "../admin/Orders";
import CustomTables from "../admin/CustomTable";


const Routing = () => {
    const token = localStorage.getItem("token");

    return (
        <BrowserRouter>
            <Routes>
                {!token ? (
                    <>
                        <Route path="/" element={<Navigate to="/login" />} />
                        <Route path="/login" element={<SignIn />} />
                        <Route path="/sign-up" element={<SignUp />} />
                        <Route path="*" element={<Navigate to="/login" />} />
                    </>
                ) : (
                    <>
                        <Route path="/login" element={<Navigate to="/home" />} />
                        <Route path="/" element={<Navigate to="/home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/sign-up" element={<Navigate to="/home" />} />        
                        <Route path="/mens" element={<Mens />} />
                        <Route path="/womens" element={<Womens />} />
                        <Route path="/kids" element={<Kids />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/admin" element={<SideBar />}>
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="users" element={<Users />} />
                            <Route path="productinventory" element={<ProductInventory />} />
                            <Route path="orders" element={<Orders />} />
                            <Route path="customtables" element={<CustomTables />} />
                        </Route>
                    </>
                )}
            <Route path="*" element={<Navigate to="/home" />} />
            </Routes>
        
        </BrowserRouter>

    );
};

export default Routing;
