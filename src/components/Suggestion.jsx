
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
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-default-600 dark:text-gray-50">1</div>
                        <p className="text-2xl font-semibold">
                            <b>Nulla.</b>Nostrum, corrupti blanditiis. Illum, architecto?
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-default-600 dark:text-gray-50">2</div>
                        <p className="text-2xl font-semibold">
                            <b>Accusantium.</b>Vitae saepe atque neque sunt eius dolor veniam alias debitis?
                        </p>
                    </div>
                    <div className="flex flex-col p-8 space-y-4 rounded-md dark:bg-gray-50">
                        <div className="flex items-center justify-center flex-shrink-0 w-12 h-12 text-xl font-bold rounded-full dark:bg-default-600 dark:text-gray-50">3</div>
                        <p className="text-2xl font-semibold">
                            <b>Maxime.</b>Expedita temporibus culpa reprehenderit doloribus consectetur odio!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Suggestion;