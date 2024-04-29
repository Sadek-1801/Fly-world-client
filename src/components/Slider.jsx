// Import Swiper React components

// Import Swiper styles
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <>
      <div className="flex-1 mt-10 md:mt-0 w-full md:w-auto">
        <p className="text-xl font-semibold text-first">Explore The World</p>
        <h1 className="text-5xl text-second font-bold leading-none sm:text-6xl">
          <span className="dark:text-gray-50 dark:bg-default-600 ">Its a Big World Out</span> There, Go and Explore
        </h1>
        <p className="mt-6 mb-8 text-lg sm:mb-12">Dictum aliquam porta in condimentum ac integer
          <br className="hidden md:inline lg:hidden" />turpis pulvinar, est scelerisque ligula sem
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <Link to={'/touristSpot'} className="btn bg-first text-white px-8 py-3 text-lg font-semibold rounded dark:bg-default-600 dark:text-gray-50">Explore Places</Link>
        </div>
      </div>

    </>
  );
}
export default Slider;
