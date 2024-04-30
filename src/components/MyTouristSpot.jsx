import { CiEdit } from "react-icons/ci";
import { TiDelete } from "react-icons/ti";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import Swal from "sweetalert2";
const MyTouristSpot = ({ mySpot, item, setItem }) => {
    console.log(typeof setItem)
    const { tourist_spot, location, travel_time, _id } = mySpot;
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://web-tourism-server.vercel.app/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffee has been deleted.',
                                'success'
                            )
                            const remaining = item.filter(cof => cof._id !== _id);
                            setItem(remaining);
                        }
                    })

            }
        })
    }
    return (
        <tr className="text-center hover">
            <th className="p-3 text-xl font-semibold text-left md:pl-20">{tourist_spot}</th>
            <th className="p-3 text-xl font-semibold">{location}</th>
            <th className="p-3 text-xl font-semibold">{travel_time}</th>
            <th className="p-3 text-xl font-semibold"><Link to={`/touristSpot/update/${_id}`} className="bg-first text-white btn btn-circle text-3xl"><CiEdit /></Link></th>
            <th className="p-3 text-center"><Link onClick={() => handleDelete(_id)} className="bg-first text-3xl text-white btn btn-circle"><TiDelete />
            </Link></th>
        </tr>
    );
};
MyTouristSpot.propTypes = {
    mySpot: PropTypes.object,
    item: PropTypes.array,
    setItem: PropTypes.func
}

export default MyTouristSpot;