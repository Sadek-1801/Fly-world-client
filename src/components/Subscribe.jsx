import image from "../assets/03.jpg"
import React, { useState } from "react";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    Input,
    Textarea,
} from "@material-tailwind/react";


const Subscribe = () => {
    const [open, setOpen] = useState(false);
    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);
    const myStyle = {
        backgroundImage: `url(${image})`,
        backgroundPosition: 'center center',
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
    };
    return (
        <div className="w-full dark:bg-gray-500 rounded-md" style={myStyle}>
            <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:p-10 space-y-5">
                <h1 className="text-5xl antialiased font-semibold leading-none text-center dark:text-gray-800 text-first">Join Our Newsletter</h1>
                <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-800">Find out about events and other news</p>

                <div className="flex flex-row">
                    <input type="text" placeholder="example@email.com" className="w-3/5 p-3 rounded-l-lg sm:w-2/3" />
                    <button type="button" className="w-2/5 p-3 hover:border hover:border-first hover:opacity-80 text-first font-semibold rounded-r-lg sm:w-1/3 dark:bg-default-600 dark:text-gray-50">Subscribe</button>
                </div>
                <React.Fragment>
                    <Button className="bg-first" onClick={openDrawer}>Your Feedback!</Button>
                    <Drawer open={open} onClose={closeDrawer}>
                        <div className="flex items-center justify-between px-4 pb-2">
                            <Typography variant="h5" color="blue-gray">
                                Contact Us
                            </Typography>
                            <IconButton variant="text" color="blue-gray" onClick={closeDrawer}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </IconButton>
                        </div>
                        <div className="mb-5 px-4">
                            <Typography variant="small" color="gray" className="font-normal ">
                                Write the message and then click button.
                            </Typography>
                        </div>
                        <form className="flex flex-col gap-6 p-4">
                            <Typography variant="h6" color="blue-gray" className="-mb-3">
                                Your Email
                            </Typography>
                            <Input type="email" label="Email" />
                            <Input label="Subject" />
                            <Textarea rows={6} label="Message" />
                            <Button>Send Message</Button>
                        </form>
                    </Drawer>
                </React.Fragment>
            </div>
        </div>
    );
};

export default Subscribe;