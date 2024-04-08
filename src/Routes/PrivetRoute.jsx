import { Navigate } from "react-router-dom";
import { AuthContext } from "../Auth Provider/AuthProvider";
import { useContext } from "react";
const PrivetRoute = ({children}) => {
const {user } = useContext(AuthContext);



if(user){
    return(
       <>{children}</>
    )

}
return <Navigate to={'/login'}></Navigate>


};

export default PrivetRoute;