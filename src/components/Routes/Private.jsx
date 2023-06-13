import { useContext } from "react";
import BounceLoader from "react-spinners/BounceLoader";
import { AuthContext } from "../Provider/AuthProvider";
const Private = () => {
    const { loading } = useContext(AuthContext);
    if (loading) {
        return <div className='flex justify-center my-10 mt-60'><BounceLoader color="#4a07da" size={100} /></div>
    }
    return (
        <div>

        </div>
    );
};

export default Private;