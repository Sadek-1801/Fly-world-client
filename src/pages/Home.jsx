import AllTouristSpot from "../components/AllTouristSpot";
import Countries from "../components/Countries";
import Header from "../components/Header";
import Suggestion from "../components/Suggestion";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Suggestion></Suggestion>
            <Countries></Countries>
            <AllTouristSpot></AllTouristSpot>
            <h3>this is home</h3>
        </div>
    );
};

export default Home;