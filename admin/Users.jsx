import AddUser from "../components/Form/usersForm/AddUsers";
import { useEffect, useState } from "react";
import CustomDataTable from "../components/customTable/CustomDataTable";
import { getAllUsers } from "../apiServices/ApiServices";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faEdit, faEye, faTrashCan, } from '@fortawesome/free-solid-svg-icons';
import ViewUser from "../components/Form/usersForm/ViewUser";
import EditUser from "../components/Form/usersForm/EditUser";
import DeleteUser from "../components/Form/usersForm/DeleteUser";

const Users = () => {
    const [openUserForm, setOpenUserForm] = useState(false);
    const [viewUserForm, setviewUserForm] = useState(false);
    const [editUserForm, seteditUserForm] = useState(false);
    const [deleteUserForm, setdeleteUserForm] = useState(false);
    const[userData, setUserData] = useState([])

    const[viewUserData,setViewUserData] = useState({})
    const OpenAddUserForm = () => {
        setOpenUserForm(true);
    };
    const OpenViewUserForm = (viewData) => {
        setViewUserData(viewData)
        setviewUserForm(true);
    };
    const OpenEditUserForm = () => {
        seteditUserForm(true);
    };
    const OpenDeleteUserForm = () => {
        setdeleteUserForm(true);
    };
    

    useEffect(()=>{
        getAllUsers().then((res)=>{
            setUserData(res?.data)
        })
    },[])
   
    const columns = [
        {
            name: "Name",
            selector: row => row.name,
            sortable: true
        },
        {
            name: "User Name", 
            selector: row => row.username,
            sortable: true
        },
        {
            name: "Email",
            selector: row => row.email,
            sortable: true
        },
        {
            name: "Action",
            selector: row => (
                <>
                <div className="action-icon-btn">
                    <FontAwesomeIcon icon={faEye} onClick={() => OpenViewUserForm(row)}/> 
                    <FontAwesomeIcon icon={faEdit} onClick={() => OpenEditUserForm()}/> 
                    <FontAwesomeIcon icon={faTrashCan} onClick={() => OpenDeleteUserForm()}/> 
                </div>
                </>
            )
            
        },
    ];
        return (
        <>
            <h1>Users Page</h1>
            <div className="btn-area">
                <button className="add-btn" onClick={OpenAddUserForm}>Add User</button>
            </div>
            <CustomDataTable columns={columns} data={userData} />
            <AddUser openUserForm={openUserForm} setOpenUserForm={setOpenUserForm} />
            <ViewUser viewUserData={viewUserData} viewUserForm={viewUserForm} setviewUserForm={setviewUserForm} />
            <EditUser editUserForm={editUserForm} seteditUserForm={seteditUserForm} />
            <DeleteUser deleteUserForm={deleteUserForm} setdeleteUserForm={setdeleteUserForm}/>
        </>
    );
};

export default Users;
