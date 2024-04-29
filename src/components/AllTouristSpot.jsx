import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";

const AllTouristSpot = () => {
    const touristSpots = useLoaderData();

    return (
        <div >
            <div className="flex flex-col items-center justify-center my-6 md:my-16">
                <h3 className="text-2xl text-first font-medium">TOP PICKS</h3>
                <h1 className="text-5xl text-center font-bold sm:text-6xl text-second">Best Tour Packeges</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                touristSpots.map((touristSpot) => <TouristSpotCard 
                key={touristSpot._id}
                touristSpot={touristSpot} 
                >
                </TouristSpotCard>
            
            )
            }
            </div>
        </div>
    );
};

export default AllTouristSpot;