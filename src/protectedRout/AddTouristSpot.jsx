import { Option, Select } from "@material-tailwind/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddTouristSpot = () => {
    const [country, setCountry] = useState("");
    const [season, setSeason] = useState("");
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const { average_cost, description,email, image,location,name, total_visit,tourist_spot,travel_time,
        } = data
        const allData = {average_cost, description, email, image, location, name, total_visit, tourist_spot, travel_time, country, season}
        console.log(allData)
        fetch('http://localhost:5000/touristSpot', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success("Tourist Spot Added Succefully")
                }
            })
            reset()
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
                            <input id="firstname" type="text" placeholder="Name" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("name", { required: true })} />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="lastname" className="text-sm">Email</label>
                            <input id="lastname" type="text" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 text-gray-900 border-gray-300 focus:ring-default-600" {...register("email", { required: true })} />
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
                            <Select
                                label="Country"
                                variant="standard"
                                value={country}
                                onChange={(val) => setCountry(val)}
                            >
                                <Option value="bangladesh">Bangladesh</Option>
                                <Option value="thailand">Thailand</Option>
                                <Option value="indonesia">Indonesia</Option>
                                <Option value="malaysia">Malaysia</Option>
                                <Option value="vietnam">Vietnam</Option>
                                <Option value="combodia">Combodia</Option>
                            </Select>
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <Select
                                label="Season"
                                variant="standard"
                                value={country}
                                onChange={(val) => setSeason(val)}
                            >
                                <Option value="summer">Summer</Option>
                                <Option value="winter">Winter</Option>
                            </Select>
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