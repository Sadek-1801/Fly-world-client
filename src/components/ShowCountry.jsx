import PropTypes from "prop-types"
import { Link } from "react-router-dom";
const ShowCountry = ({ country }) => {
    const { country_name, country_image, short_description } = country;
    return (
        <Link to={`/country/${country_name}`} className="max-w-sm mx-auto transition border-2 p-2 hover:scale-105 border-opacity-30 border-second hover:border-first  group hover:no-underline focus:no-underline">
            <img src={country_image} alt="" className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
            <div className="mt-6 mb-2">
                <h2 className="text-xl font-semibold tracking-wide">{country_name}</h2>
            </div>
            <p className="dark:text-gray-800">{short_description}</p>
        </Link>
    );
};
ShowCountry.propTypes = {
    country: PropTypes.object
}

export default ShowCountry;