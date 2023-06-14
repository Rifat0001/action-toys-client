import { useContext } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
const Private = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (user?.email) {
        return children;
    }
    if (loading) {
        return <div className='flex justify-center my-10 mt-60'><BounceLoader color="#4a07da" size={100} /></div>
    }
    return (
        <Navigate state={{ from: location }} to="/login" replace></Navigate>
    );
};

export default Private;



