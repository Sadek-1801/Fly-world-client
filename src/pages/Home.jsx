import AllTouristSpot from "../components/AllTouristSpot";
import Countries from "../components/Countries";
import Gallery from "../components/Gallery";
import Header from "../components/Header";
import Subscribe from "../components/Subscribe";
import Suggestion from "../components/Suggestion";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Suggestion></Suggestion>
            <Countries></Countries>
            <AllTouristSpot></AllTouristSpot>
            <div className="md:my-10">
            <Gallery></Gallery>
            </div>
            <div className="my-10"><Subscribe></Subscribe></div>
            <h3>this is home</h3>
        </div>
    );
};

export default Home;