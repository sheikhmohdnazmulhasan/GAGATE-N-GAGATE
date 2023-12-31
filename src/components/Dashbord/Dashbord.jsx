import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
    return (
        // Create a container with flex layout and space between its items
        <div className="flex justify-between mx-10">
            {/* Left side of the dashboard */}
            <div className="card card-side bg-base-100 shadow-xl w-96">
                <figure>
                    {/* Display an image */}
                    <img src="https://i.ibb.co/16nthx9/photo-1635805737707-575885ab0820.jpg" alt="Movie" />
                </figure>
                <div className="card-body">
                    {/* Create navigation links for different dashboard sections */}
                    <NavLink to="/dashbord/profile">
                        <button className="text-white py-1 px-5 w-full bg-violet-500 rounded-md">Profile</button>
                    </NavLink>
                    <NavLink to="/dashbord/edit-profile">
                        <button className="text-white py-1 w-full px-5 bg-violet-500 rounded-md">Edit</button>
                    </NavLink>
                    <NavLink to="/dashbord/blog">
                        <button className="text-white py-1 w-full px-5 bg-violet-500 rounded-md">Blog</button>
                    </NavLink>
                </div>
            </div>
            {/* Right side of the dashboard */}
            <div className="">
                {/* Render the content of child routes */}
                <Outlet />
            </div>
        </div>
    );
};

export default Dashbord;
