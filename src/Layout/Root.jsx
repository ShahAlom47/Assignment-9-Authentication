import { Outlet  } from "react-router-dom";
import Footer from "../Shared Component/Footer";

const Root = () => {
    return (
        <div className=" max-w-7xl m-auto">
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Root;