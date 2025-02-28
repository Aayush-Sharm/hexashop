import { useEffect, useState } from "react";
import CustomDataTable from "../components/customTable/CustomDataTable";
import { getAllOrders } from "../apiServices/ApiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faEye, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import AddOrder from "../components/Form/order/AddOrder";
import ViewOrder from "../components/Form/order/ViewOrder";
import EditOrder from "../components/Form/order/EditOrder";
import DeleteOrder from "../components/Form/order/DeleteOrder";


const Orders = () => {
    const [openOrderForm, setOpenOrderForm] = useState(false);
    const [viewOrderForm, setviewOrderForm] = useState(false);
    const [editOrderForm, seteditOrderForm] = useState(false);
    const [deleteOrderForm, setdeleteOrderForm] = useState(false);
    const[OrderData, setOrderData] = useState([])

    const[viewOrderData,setViewOrderData] = useState({})
    const OpenAddOrderForm = () => {
        setOpenOrderForm(true);
    };
    const OpenViewOrderForm = (viewData) => {
        setViewOrderData(viewData)
        setviewOrderForm(true);
    };
    const OpenEditOrderForm = () => {
        seteditOrderForm(true);
    };
    const OpenDeleteOrderForm = () => {
        setdeleteOrderForm(true);
    };
    

    useEffect(()=>{
        getAllOrders().then((res)=>{
            setOrderData(res?.data)
        })
    },[])
   
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
                    <FontAwesomeIcon icon={faEye} onClick={() => OpenViewOrderForm(row)}/>
                    <FontAwesomeIcon icon={faEdit} onClick={() => OpenEditOrderForm()}/>
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => OpenDeleteOrderForm()}/>
                </div>
            )
        },
    ];
        return (
        <>
            <h1>Orders Page</h1>
            <div className="btn-area">
                <button className="add-btn" onClick={OpenAddOrderForm}>Add Order</button>
            </div>
            <CustomDataTable columns={columns} data={OrderData} />
            <AddOrder openOrderForm={openOrderForm} setOpenOrderForm={setOpenOrderForm} />
            <ViewOrder viewOrderData={viewOrderData} viewOrderForm={viewOrderForm} setviewOrderForm={setviewOrderForm} />
            <EditOrder editOrderForm={editOrderForm} seteditOrderForm={seteditOrderForm} />
            <DeleteOrder deleteOrderForm={deleteOrderForm} setdeleteOrderForm={setdeleteOrderForm}/>  
        </>
    );
};

export default Orders;
