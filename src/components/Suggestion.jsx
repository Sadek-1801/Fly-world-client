
const Suggestion = () => {
    return (
        <section className="py-6 dark:bg-gray-100">
            <div className="text-center">
                <h3 className="text-first tracking-wider text-center text-2xl mt-6 mb-4  sm:mb-6">3 Steps for a perfect trip!</h3>
                <h1 className="text-5xl text-second font-bold leading-none sm:text-6xl dark:text-default-600">
                    Find Travel Perfection
                </h1>
                <p className="tracking-wide text-center text-lg mt-6 mb-4 sm:mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, qui.</p>
            </div>
            <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 sm:grid-cols-2">
                    <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?1" />
                    <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?2" />
                    <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?3" />
                    <img className="object-cover w-full dark:bg-gray-500 aspect-square" src="https://source.unsplash.com/random/300x300/?4" />
                </div>
            </div>
        </section>
    );
};

export default Suggestion;