import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFile, faHouse, faUser} from '@fortawesome/free-solid-svg-icons';
import { faFirstOrder } from "@fortawesome/free-brands-svg-icons";

export const SideBarData = [
    { name: "Dashboard" },
    { name: "Users" },
    { name: "Product" },
    { name: "Product report" },
    { name: "Order" },
];

const Sidebar = () => {
    return (
        <>
            {/* Header */}
            <div className="admin-box">
                <div className="admin-left">
                    <div className="admin-logo">
                        <h1>Hexashop</h1>
                    </div>
                    <ul>
                        <li><Link to="dashboard"><FontAwesomeIcon icon={faHouse} />Dashboard</Link></li>
                        <li><Link to="users"><FontAwesomeIcon icon={faUser} />Users</Link></li>
                        <li><Link to="productinventory"><FontAwesomeIcon icon={faFile} />Product Reports</Link></li>
                        <li><Link to="orders"><FontAwesomeIcon icon={faFirstOrder} />Orders</Link></li>
                    </ul>
                </div>
                <div className="admin-right">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
