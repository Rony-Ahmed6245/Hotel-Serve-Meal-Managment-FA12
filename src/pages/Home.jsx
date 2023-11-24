import Banner from "../components/Banner";
import Footer from "../components/Footer";

import MemberShip from "../components/MemberShip";
import Show from "../components/Show";
import Slider from "../components/Slider";





const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Show></Show>
           <MemberShip></MemberShip>
           <Slider></Slider>
           <Footer></Footer>
        </div>
    );
};

export default Home;