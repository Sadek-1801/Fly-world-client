import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";
import AuthHooks from "../hooks/AuthHooks";

const AddTouristSpot = () => {
    const { register, handleSubmit } = useForm()
    const navigate = useNavigate()
    const {user} = AuthHooks()
    const onSubmit = (data) => {
        const { average_cost, description, email, image, location, name, total_visit, tourist_spot, travel_time, season, country
        } = data
        const userEmail = email.toLowerCase();
        const userName = name.toLowerCase();
        const allData = { average_cost, description, userEmail, image, location, userName, total_visit, tourist_spot, travel_time, country, season }
        console.log(allData)
        fetch('https://web-tourism-server.vercel.app/touristSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    toast.success("Tourist Spot Added Succefully")
                    Navigate('/')
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
                            <label htmlFor="firstname" className="text-sm">Name</label>
                            <input defaultValue={user?.displayName} id="firstname" type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("name", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Email</label>
                            <input defaultValue={user?.email} id="lastname" type="text" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("email", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="firstname" className="text-sm">Image URL</label>
                            <input id="firstname" type="text" placeholder="Image URL" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("image", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Tourists Spot Name</label>
                            <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("tourist_spot", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">Location</label>
                            <input id="state" type="text" placeholder="Location" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("location", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="address" className="text-sm">Country</label>
                            <select className="select w-full rounded-md border-gray-300 focus:ring-default-600" {...register("lcountry", { required: true })}>
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
                            <select className="select w-full rounded-md focus:ring" {...register("season", { required: true })}>
                                <option disabled>Your Favered Season</option>
                                <option value="summer">Summer</option>
                                <option value="winter">Winter</option>
                            </select>
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="address" className="text-sm">Short Description</label>
                            <input id="address" type="text" placeholder="Short Description" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("description", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="state" className="text-sm">Average Cost</label>
                            <input id="state" type="text" placeholder="Average Cost" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("average_cost", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">Travel Time</label>
                            <input id="zip" type="text" placeholder="Travel Time" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("travel_time", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label htmlFor="zip" className="text-sm">Total Visit Per Year</label>
                            <input id="zip" type="text" placeholder="Total Visit Per Year" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("total_visit", { required: true })} />
                        </div>

                        <input type="submit" value="Add Tourist Spot" className="bg-first text-white cursor-pointer col-span-full px-4 py-2 border rounded-md dark:border-gray-800 font-bold" />
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddTouristSpot;