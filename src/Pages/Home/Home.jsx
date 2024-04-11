
import Banner from "./Banner";
import Estates from "./Estates";
import { Helmet} from 'react-helmet-async';
import Faq from "./Faq";


const Home = () => {
    return (
        <div>
                <Helmet>
                <title>Dream House/Home</title>
                </Helmet>
           
            <Banner></Banner>
            <Estates></Estates>
            <Faq></Faq>
            
        </div>
    );
};

export default Home;