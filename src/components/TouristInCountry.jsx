import { Link, useLoaderData, useParams } from "react-router-dom";
import TouristSpotCard from "./TouristSpotCard";


const TouristInCountry = () => {
    const country = useLoaderData()
    const {name} = useParams()
    console.log(name)
    if (country.length < 1) {
        return <div className="flex flex-col justify-center items-center"><h1 className="text-4xl text-center font-bold">No Data Added. Please Add Some Data First</h1>

        <Link to={'/addTourist'} className="btn bg-first text-white text-2xl font-semibold">Add Some Data</Link>
        </div>
    }
    return (
        <>
        <div className="flex flex-col justify-center items-center my-12">
        <h1 className="text-4xl text-center font-bold uppercase">Country Name : {name}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                country.map((touristSpot) => <TouristSpotCard 
                key={touristSpot._id}
                touristSpot={touristSpot} 
                >
                </TouristSpotCard>
            
            )
            }
        </div>
        </>
    );
};

export default TouristInCountry;