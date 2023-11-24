import {  useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";


const PrivateRoute = ({children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return (
            <div className="flex justify-center items-center">
                <span className="loading loading-spinner text-warning"></span>
            </div>
        );
    }

    if(user){
        return children ;
    }
    Swal.fire("Error!", "You have login first next checkout ", "error");

    // Navigate to the login page
    return <Navigate state={location.pathname} to="/login" replace />;

  
};

export default PrivateRoute;