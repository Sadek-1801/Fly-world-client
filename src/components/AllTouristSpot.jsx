import { Link, useLoaderData } from "react-router-dom";
import TouristSpotCard from "../components/TouristSpotCard";
import { FaSort, FaSortAmountDown, FaSortAmountDownAlt } from "react-icons/fa";
import { useState } from "react";

const AllTouristSpot = () => {
    const touristSpots = useLoaderData();
    const [sortedSpots, setSortedSpots] = useState([...touristSpots])


    const sortTouristSpotsDsc = () => {
            const copiedSpots = [...touristSpots];
            copiedSpots.sort((a, b) => parseInt(b.average_cost) - parseInt(a.average_cost));
            setSortedSpots(copiedSpots);
      };
    const sortTouristSpotsAsc = () => {
            const copiedSpots = [...touristSpots];
            copiedSpots.sort((a, b) => parseInt(a.average_cost) - parseInt(b.average_cost));
            setSortedSpots(copiedSpots);
      };

    return (
        <div >
            <div className="flex items-center justify-center my-6 md:my-10">
            <details className="dropdown">
                <summary className="m-1 btn bg-first text-2xl text-white font-semibold w-36">Sort<FaSort /></summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-40">
                    <li><Link onClick={sortTouristSpotsDsc}><FaSortAmountDown /> High to Low</Link></li>
                    <li><Link onClick={sortTouristSpotsAsc}><FaSortAmountDownAlt />Low to High</Link></li>
                </ul>
            </details>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                sortedSpots.map((touristSpot) => <TouristSpotCard 
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