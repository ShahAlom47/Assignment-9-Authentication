
import Banner from "./Banner";
import Estates from "./Estates";
import { Helmet} from 'react-helmet-async';


const Home = () => {
    return (
        <div>
                <Helmet>
                <title>Dream House/Home</title>
                </Helmet>
           
            <Banner></Banner>
            <Estates></Estates>
            
        </div>
    );
};

export default Home;