import PropTypes from 'prop-types';
import {  Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';

const TouristSpotCard = ({ touristSpot }) => {
    const {_id, image, tourist_spot, location, average_cost, travel_time, season, total_visit, country } = touristSpot;
    
    return (
        <Zoom cascade fraction={0.1} damping={1.2} duration={1200}>
            <div className="max-w-xs rounded-md shadow-md dark:bg-gray-50 dark:text-gray-800 mx-auto relative">
            
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
            <div className='absolute btn top-4 border-none bg-first text-white  font-semibold -rotate-45 opacity-70 hover:opacity-100 hover:bg-first hover:scale-105'>$: {average_cost}</div>
            <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                    <h2 className="text-xl font-semibold tracking-wide text-second">{location}, <span className='uppercase'>{country}</span></h2>
                    <h2 className="text-2xl font-semibold tracking-wide text-second">{tourist_spot} </h2>
                    <ul className="flex-1 mb-6 text-gray-600">
                        <li className="flex mb-2 space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-default-600">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Travel Duration: {travel_time}</span>
                        </li>
                        <li className="flex mb-2 space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-default-600">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className='capitalize'>Seasonality: {season}</span>
                        </li>
                        <li className="flex mb-2 space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6 text-default-600">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span>Visitor Per Year: {total_visit}</span>
                        </li>
                    </ul>
                </div>
                <Link to={`/touristSpot/${_id}`}>
                <button className='btn bg-first text-white font-semibold text-lg hover:scale-110'>View Details</button>
                </Link>
            </div>
            
        </div>
        </Zoom>
    );
};
TouristSpotCard.propTypes = {
    touristSpot: PropTypes.object
}
export default TouristSpotCard;