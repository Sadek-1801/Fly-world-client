import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
const MyTouristSpot = ({ mySpot }) => {
    const { tourist_spot, location, travel_time, _id } = mySpot;
    return (
        <tr className="text-center hover">
            <th className="p-3 text-xl font-semibold text-left md:pl-20">{tourist_spot}</th>
            <th className="p-3 text-xl font-semibold">{location}</th>
            <th className="p-3 text-xl font-semibold">{travel_time}</th>
            <th className="p-3 text-xl font-semibold"><Link to={`/touristSpot/${_id}`} className="bg-first text-white btn btn-circle text-3xl"><CiEdit /></Link></th>
            <th className="p-3 text-center"><Link to={`/touristSpot/${_id}`}  className="bg-first text-3xl text-white btn btn-circle"><TiDelete />
            </Link></th>
        </tr>
    );
};
MyTouristSpot.propTypes = {
    mySpot: PropTypes.object
}

export default MyTouristSpot;