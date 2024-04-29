import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div className="p-3 md:max-w-4xl lg:max-w-7xl mx-auto bg-[#FDFDFD]">
            <div className="mb-10">
            <Nav></Nav>
            </div>
            <Outlet />
            <Footer></Footer>
        </div>
    );
};

export default Root;