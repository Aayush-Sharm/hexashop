import { Outlet, Navigate } from "react-router-dom";

const Protectedroute=()=>{
    const token = true
    if (token) {
       return(<Outlet></Outlet>) 
    }else{
       return (<Navigate to={"/login"}/>)
    }
};
export default Protectedroute;