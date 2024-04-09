import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Auth Provider/AuthProvider";
import { useContext } from "react";
import PropTypes from 'prop-types'; // ES6
import { useLocation } from 'react-router-dom';


const PrivetRoute = ({children}) => {
const {user,loading } = useContext(AuthContext);
const location = useLocation();
console.log(location.pathname);

if(loading){
    return <div className=" flex justify-center p-48"> <span className="loading loading-spinner  w-40 h-40 "></span> </div>
}


if(user){
    return(
       <>{children}</>
    )

}
return <Navigate state={location.pathname} to={'/login'}></Navigate>


};

export default PrivetRoute;
PrivetRoute.propTypes={
    children: PropTypes.node.isRequired,
}