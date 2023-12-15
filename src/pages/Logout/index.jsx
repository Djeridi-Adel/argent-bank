import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getToken } from "../../features/Token/token";
import { Navigate } from "react-router-dom";




function Logout() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getToken(0));

        localStorage.removeItem("token");
        sessionStorage.removeItem("token")
    });
    

    return <Navigate to="/" /> 
}

export default Logout;