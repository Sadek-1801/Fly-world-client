import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCard = () => {
    const { id } = useParams()
    const [touristSpot, setTouristSpot] = useState([])
    useEffect(() => {
        fetch(`https://web-tourism-server.vercel.app/touristSpot/${id}`)
        .then(res => res.json())
        .then(data => setTouristSpot(data))
    }, [id])

    const {average_cost, description, image, location, total_visit, tourist_spot, travel_time, country, season } = touristSpot;
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => {
        const { average_cost, description, image, location, total_visit, tourist_spot, travel_time, country, season } = data;
        const upDateallData = { average_cost, description, image, location, total_visit, tourist_spot, travel_time, country, season }
        fetch(`https://web-tourism-server.vercel.app/updateTouristSpot/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(upDateallData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <section className="p-6 bg-gray-100 text-gray-900 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleSubmit(onSubmit)} className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Personal Inormation</p>
                        <p className="text-xs">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci fuga autem eum!</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">

                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Image URL</label>
                            <input defaultValue={image} id="firstname" type="text" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("image")} />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Tourists Spot Name</label>
                            <input defaultValue={tourist_spot} id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("tourist_spot")} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">Location</label>
                            <input defaultValue={location} id="state" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("location")} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="address" className="text-sm">Country</label>
                            <select defaultValue={country} className="select w-full rounded-md border-gray-300 focus:ring-default-600" {...register("country")}>
                                <option disabled>Pick your Country</option>
                                <option value="bangladesh">Bangladesh</option>
                                <option value="thailand">Thailand</option>
                                <option value="indonesia">Indonesia</option>
                                <option value="malaysia">Malaysia</option>
                                <option value="vietnam">Vietnam</option>
                                <option value="cambodia">Cambodia</option>
                            </select>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="address" className="text-sm">Season</label>
                            <select defaultValue={season} className="select w-full rounded-md focus:ring" {...register("season")}>
                                <option disabled>Pick your Country</option>
                                <option value="summer">Summer</option>
                                <option value="winter">Winter</option>
                            </select>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Short Description</label>
                            <input defaultValue={description} id="address" type="text" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("description")} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">Average Cost</label>
                            <input defaultValue={average_cost} id="state" type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("average_cost")} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">Travel Time</label>
                            <input defaultValue={travel_time} id="zip" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("travel_time")} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">Total Visit Per Year</label>
                            <input defaultValue={total_visit} id="zip" type="text" placeholder="Total Visit Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("total_visit")} />
                        </div>
                        <input type="submit" value="Update Tourist Spot" className="bg-first text-white cursor-pointer col-span-full px-4 py-2 border rounded-md dark:border-gray-800 font-bold" />
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default UpdateCard;