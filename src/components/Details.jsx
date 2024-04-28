import { Link, useLoaderData } from "react-router-dom";
import AuthHooks from "../hooks/AuthHooks";
import { IoMdArrowRoundBack } from "react-icons/io";

const Details = () => {
    const touristSpotDetails = useLoaderData();
    const { user } = AuthHooks()
    const { image, tourist_spot, location, average_cost, travel_time, season, total_visit, description, name, email, country } = touristSpotDetails;
    return (
        <section className="dark:bg-gray-100 dark:text-gray-800">
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-default-600 dark:text-gray-50">
                    <div className="flex space-x-2 sm:space-x-4">

                        <div className="space-y-2">
                            <p className="text-3xl font-bold leading-snug text-second">{tourist_spot}, {location}</p>
                            <h2 className="text-3xl font-semibold uppercase">{country}</h2>
                            <p className="leading-snug">{description}</p>

                        </div>

                    </div>
                    <div className="flex space-x-2 sm:space-x-4 justify-self-start items-center md:ml-8 mt-0">
                        <ul className="flex-1 mb-6 text-gray-600">
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <span>Travel Duration: {travel_time}</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <span className='capitalize'>Seasonality: {season}</span>
                            </li>
                            <li className="flex mb-2 space-x-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                </svg>
                                <span>Visitor Per Year: {total_visit}</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <div>
                                    <img src={user?.photoURL} alt="" className="object-cover w-12 h-12 rounded-full bg-gray-500" />
                                </div>
                                <div>
                                    <h4 className="font-bold">{name}</h4>
                                    <span className="text-xs text-gray-600">{email}</span>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2 text-yellow-500">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current">
                                    <path d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
                                </svg>
                                <span className="text-xl font-bold">4.5</span>
                            </div>
                        </div>
                    </div>
                    <Link to={"/touristSpot"} className="btn bg-first text-white font-semibold"><IoMdArrowRoundBack />Back to All Tourist Spot</Link>
                </div>
                <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100 relative">
                    <div className='text-2xl absolute btn md:top-20 md:right-14 border-first bg-white text-second font-bold hover:bg-first hover:scale-105 cursor-default'>Average Cost: $ {average_cost}</div>
                    <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
                        <img src={image} alt="" className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Details;