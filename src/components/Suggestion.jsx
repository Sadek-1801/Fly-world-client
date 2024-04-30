import message from "../assets/icons8-message.gif"
import location from "../assets/icons8-location.gif"
import calendar from "../assets/icons8-calendar.gif"
import { AttentionSeeker, Slide } from "react-awesome-reveal";

const Suggestion = () => {
  
    return (
        <section className="py-6 dark:bg-gray-100 md:mt-8">
            <div className="text-center">
                <Slide damping={0.1} duration={1000}delay={400} direction="down"><h3 className="text-first tracking-wider text-center text-2xl mt-6 mb-4  sm:mb-6">3 Steps for a perfect trip!</h3></Slide>
                <Slide damping={0.1} duration={1000}  direction="down">
                <h1 className="text-5xl text-second font-bold leading-none sm:text-6xl dark:text-default-600">
                    Find Travel Perfection
                </h1>
                <p className="tracking-wide text-center text-lg mt-6 mb-4 sm:mb-6">Stop dreaming, start exploring. Find your ideal travel match!</p>
                </Slide>
            </div>
            <div className="container flex flex-col justify-center p-4 mx-auto">
                <div className="grid gap-6 mb-8 lg:grid-cols-3">
                    <div className="flex flex-col px-8 py-4 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0  dark:bg-default-600 dark:text-gray-50"><AttentionSeeker bounce ><img src={message} alt="" /></AttentionSeeker>
                        </div>
                        <Slide damping={0.5} duration={1000} direction="up" delay={500}>
                        <h1 className="text-2xl font-semibold text-second">Tell Us What You Want?</h1>
                        <p className="text-lg">
                            Craft your dream vacation! Whether it is relaxation on a beach, exploration of ancient ruins, or adventure in the wild, we will help you find it.
                        </p>
                        </Slide>
                    </div>
                    <div className="flex flex-col px-8 py-4 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0  dark:bg-default-600 dark:text-gray-50 "><AttentionSeeker bounce><img className="h-16 w-16" src={location} alt="" /></AttentionSeeker>
                        </div>
                        <Slide damping={0.5} duration={1000} direction="up" delay={500}>
                        <h1 className="text-2xl font-semibold text-second">Share Your Travel Location</h1>
                        <p className="text-lg ">
                            The world awaits!  Tell us where you have always wanted to go, or pick a place that sparks your curiosity. We will show you what makes it special.
                        </p>
                        </Slide>
                    </div>
                    <div className="flex flex-col px-8 py-4 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0  dark:bg-default-600 dark:text-gray-50"><AttentionSeeker bounce ><img src={calendar} alt="" /></AttentionSeeker>
                        </div>
                        <Slide damping={0.5} duration={1000} direction="up" delay={500}>
                        <h1 className="text-2xl font-semibold text-second">Share Your Preference</h1>
                        <p className="text-lg">
                            Travel your way!  Are you seeking luxury experiences or budget-friendly adventures? Do you crave relaxation or an adrenaline rush? We cater to all styles.
                        </p>
                        </Slide>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Suggestion;