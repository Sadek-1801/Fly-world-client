import { useForm } from "react-hook-form";
import toast from "react-hot-toast";


const AddCountries = () => {
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        const { country_name, country_image, short_description
        } = data
        console.log(data)
        const allData = {country_name, country_image, short_description}
        console.log(allData)
        fetch('http://localhost:5000/country', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(allData)
        })
            .then(res => res.json())
            .then(data => {
                if(data.insertedId){
                    toast.success("Country Added Succefully")
                }
            })
            reset()
    }

    return (
        <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
            <form onSubmit={handleSubmit(onSubmit)} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                    <div className="space-y-2 col-span-full lg:col-span-1">
                        <p className="font-medium">Country Name</p>
                        <p className="text-xs">With a short Description</p>
                    </div>
                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="username" className="text-sm">Username</label>
                            <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" {...register("country_name", { required: true })}/>
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label htmlFor="image" className="text-sm">Image URL</label>
                            <input id="image" type="text" placeholder="https://" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" {...register("country_image", { required: true })} />
                        </div>
                        <div className="col-span-full">
                            <label htmlFor="description" className="text-sm">description</label>
                            <textarea id="description" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-default-600 dark:border-gray-300" {...register("short_description", { required: true })}></textarea>
                        </div>
                        <div className="col-span-full">
                            <button type="button " className="btn bg-first text-white px-4 py-2 border rounded-md dark:border-gray-800">Add</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </section>
    );
};

export default AddCountries;