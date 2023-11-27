import { NavLink, Outlet} from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { VscGitPullRequestNewChanges } from "react-icons/vsc";
import { MdReviews } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { MdManageAccounts } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { SiVirustotal } from "react-icons/si";
import { MdPreview } from "react-icons/md";
import { GiFoodTruck } from "react-icons/gi";
import { PiBowlFoodLight } from "react-icons/pi";
import { CgMenuRound } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email);
   
    const finddata =  user.email === 'admin55@gmail.com';

    console.log(finddata.email);

    const dashboardMenu = (
        <>
            <li className=' md:text-white text-orange-500'><NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "underline" : ""
            }><IoHomeOutline />
                Go Home</NavLink></li>
            <div className="divider"></div>

            {finddata ? (
                <>
                    {/* admin dashboard  */}
                    <h1 className="text-lg underline font-semibold md:text-white text-orange-500 text-center">Admin Dashboard</h1>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/adminProfile' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><RiAdminLine />
                        Admin Profile</NavLink></li>

                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/manageUsers' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><MdManageAccounts />
                        Manage Users</NavLink></li>
                    <li className=' text-white'><NavLink to='/dashboard/addMeal' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><IoMdAddCircleOutline />
                        Add meal</NavLink></li>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/allMeals' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><SiVirustotal />
                        All meals</NavLink></li>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/allReviews' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><MdPreview />
                        All reviews</NavLink></li>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/serveMeals' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><GiFoodTruck />
                        Serve meals</NavLink></li>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/upcomingMeals' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><PiBowlFoodLight />
                        Upcoming meals</NavLink></li>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><IoSettingsOutline />
                        Analysis</NavLink></li>
                </>
            ) : (
                <>
                    <h1 className="text-lg underline font-semibold text-white text-center">User Dashboard</h1>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/userProfile' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><CgProfile />
                        My Profile</NavLink></li>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/requestedMeals' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }> <VscGitPullRequestNewChanges />
                        Requested Meals
                    </NavLink></li>
                    <li className=' md:text-white text-orange-500'><NavLink to='/dashboard/myReviews' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "underline" : ""
                    }><MdReviews />
                        My Reviews</NavLink></li>
                    <div className="divider"></div>
                </>
            )}
        </>
    );

    return (
        <div>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* Page content here */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className=" fixed right-0 top-[50%] text-4xl outline-none border-none text-orange-600 drawer-button lg:hidden"><CgMenuRound />
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 md:w-80 z-30 w-3/4 min-h-full md:bg-orange-600 bg-white text-base-content">
                        {/* Sidebar content here */}
                        {dashboardMenu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
