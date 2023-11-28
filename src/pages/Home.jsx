import Banner from "../components/Banner";
import Footer from "../components/Footer";
import MemberShip from "../components/MemberShip";
import Show from "../components/Show";
import Slider from "../components/Slider";
import FutureMeals from "../components/FutureMeals";





const Home = () => {
    // const data = useLoaderData();
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Show></Show>
            <FutureMeals></FutureMeals>
            <MemberShip></MemberShip>
            <Slider></Slider>
            <Footer></Footer>
        </div>
    );
};

export default Home;