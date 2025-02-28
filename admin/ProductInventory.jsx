import CustomDataTable from "../components/customTable/CustomDataTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faEye, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import { getAllProduct } from "../apiServices/ApiServices";
import AddProducts from "../components/Form/usersForm/ProductForm/AddProducts.jsx";
import ViewProduct from "../components/Form/usersForm/ProductForm/ViewProduct.jsx";
import EditProduct from "../components/Form/usersForm/ProductForm/EditProduct.jsx";
import DeleteProduct from "../components/Form/usersForm/ProductForm/DeleteProduct.jsx";

const ProductInventory = () => {

    const [openProductForm, setOpenProductForm] = useState(false);
    const [viewProductForm, setviewProductForm] = useState(false);
    const [editProductForm, seteditProductForm] = useState(false);
    const [deleteProductForm, setdeleteProductForm] = useState(false);
    const [productData, setProductData] = useState([]);
    
    const[viewProductData,setViewProductData] = useState({})
    const OpenAddProductForm = () => {
        setOpenProductForm(true);
    };

    const handleView = (viewProduct) => {
        setViewProductData(viewProduct);
        setviewProductForm(true);
    };

    const handleEdit = () => {
        seteditProductForm(true);
    };

    const handleDelete = () => {
        setdeleteProductForm(true);
    };

    useEffect(() => {
        getAllProduct().then((res) => {
            setProductData(res?.data);
        });
    }, []);

    const columns = [
        {
            name: "Id",
            selector: row => row.id,
            sortable: true
        },
        {
            name: "Title",
            selector: row => row.title,
            sortable: true
        },
        {
            name: "Action",
            selector: row => (
                <div className="action-icon-btn">
                    <FontAwesomeIcon icon={faEye} onClick={() => handleView(row)} />
                    <FontAwesomeIcon icon={faEdit} onClick={() => handleEdit()} />
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => handleDelete()} />
                </div>
            )
        },
    ];

    return (
        <div className="right-container">
            <h1>Product Inventory</h1>
            <div className="btn-area">
                <button className="add-btn" onClick={OpenAddProductForm}>Add Product</button>
            </div>
            <CustomDataTable columns={columns} data={productData} />
            <AddProducts openProductForm={openProductForm} setOpenProductForm={setOpenProductForm} />
            <ViewProduct viewProductData={viewProductData} viewProductForm={viewProductForm} setviewProductForm={setviewProductForm}/>
            <EditProduct editProductForm={editProductForm} seteditProductForm={seteditProductForm}/>
            <DeleteProduct deleteProductForm={deleteProductForm} setdeleteProductForm={setdeleteProductForm}/>
        </div>
    );
};

export default ProductInventory;
