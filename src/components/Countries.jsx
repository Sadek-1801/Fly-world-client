import { useEffect, useState } from "react";
import ShowCountry from "./ShowCountry";

const Countries = () => {
    // const countries = useLoaderData()
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://web-tourism-server.vercel.app/country")
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                countries.map((country) => <ShowCountry 
                key={country._id} 
                country={country}
                >
                </ShowCountry>
            
            )
            }
            </div>
    );
};

export default Countries;