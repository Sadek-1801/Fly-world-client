import message from "../assets/icons8-message.gif"
import location from "../assets/icons8-location.gif"
import calendar from "../assets/icons8-calendar.gif"

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
                <div className="grid gap-6 my-16 lg:grid-cols-3">
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0  dark:bg-default-600 dark:text-gray-50"><img src={message} alt="" />
                        </div>
                        <h1 className="text-3xl font-semibold text-second">Tell Us What You Want?</h1>
                        <p className="text-2xl font-semibold">
                        Craft your dream vacation! Whether it is relaxation on a beach, exploration of ancient ruins, or adventure in the wild, we will help you find it.
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                    <div className="flex items-center justify-center flex-shrink-0  dark:bg-default-600 dark:text-gray-50"><img src={location} alt="" />
                        </div>
                        <h1 className="text-3xl font-semibold text-second">Share Your Travel Location</h1>
                        <p className="text-2xl font-semibold">
                        The world awaits!  Tell us where you have always wanted to go, or pick a place that sparks your curiosity. We will show you what makes it special.
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                    <div className="flex items-center justify-center flex-shrink-0  dark:bg-default-600 dark:text-gray-50"><img src={calendar} alt="" />
                        </div>
                        <h1 className="text-3xl font-semibold text-second">Share Your Preference</h1>
                        <p className="text-2xl font-semibold">
                        Travel your way!  Are you seeking luxury experiences or budget-friendly adventures? Do you crave relaxation or an adrenaline rush? We cater to all styles.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Suggestion;