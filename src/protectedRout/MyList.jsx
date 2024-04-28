import { useEffect, useState } from "react";
import AuthHooks from "../hooks/AuthHooks";
import MyTouristSpot from "../components/MyTouristSpot";

const MyList = () => {
    const { user } = AuthHooks();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/touristSpots/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [user]);
    const TABLE_HEAD = ["Spot Name", "Location", "Time", "Edit", "Delete"];
    return (
        <div>
            <div className="container p-2 mx-auto sm:p-4 dark:text-gray-800">
                <h2 className="mb-4 text-center text-4xl font-semibold leading-tight">My Tourist Spot List</h2>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead className="dark:bg-gray-300">
                            <tr className="text-center font-body text-2xl text-second">
                                {
                                    TABLE_HEAD.map((tableHead, idx) =>
                                        <th key={idx} className="p-3">{tableHead}</th>)
                                }
                            </tr>
                        </thead>
                        <tbody>
                            {
                                item.map((mySpot) => <MyTouristSpot key={mySpot._id} mySpot={mySpot}></MyTouristSpot>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>

            {/* <Card className="h-full w-full overflow-scroll">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ tourist_spot, location, travel_time, _id }, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                            return (
                                <tr key={tourist_spot}>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {tourist_spot}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {location}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {travel_time}
                                        </Typography>
                                    </td>
                                    <td className={classes}>
                                        <Link to={`/touristSpot/${_id}`} className="bg-first text-white btn btn-circle text-3xl"><CiEdit /></Link>
                                    </td>
                                    <td className={classes}>
                                        
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </Card> */}
        </div>
    );
};

export default MyList;