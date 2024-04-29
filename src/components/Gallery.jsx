import image1 from "../assets/01.jpg"
import image2 from "../assets/02.jpg"
import image3 from "../assets/03.jpg"
import image4 from "../assets/05.jpg"
import image5 from "../assets/ali-maah-zyOeEm4NsPM-unsplash.jpg"
import image6 from "../assets/06.jpg"
import image7 from "../assets/07.jpg"
import image8 from "../assets/alexey-artyukh-DLf3uwkRNPA-unsplash.jpg"
import image9 from "../assets/jacek-dylag-SPpsFbCaN2A-unsplash.jpg"
import image10 from "../assets/ammie-ngo-vcu-OZBxxRk-unsplash.jpg"
import image11 from "../assets/03.jpg"
import image12 from "../assets/06.jpg"
import { Zoom } from "react-awesome-reveal"
const Gallery = () => {
    return (
        <section className="py-6 bg-gray-100 text-gray-900">
            <h1 className="text-center text-4xl text-second font-bold my-8">Fly World Gallery</h1>
            <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                <Zoom duration={800} fraction={0.2} ><img src={image1} alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image2} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image3} /></Zoom>
                
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image10} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image4} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image6} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image7} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image8} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image5} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image9} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image11} /></Zoom>
                <Zoom duration={800} fraction={0.2}><img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src={image12} /></Zoom>
            </div>
        </section>
    );
};

export default Gallery;