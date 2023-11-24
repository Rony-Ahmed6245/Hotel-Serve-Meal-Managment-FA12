import { NavLink, Outlet } from "react-router-dom";
import { MdOutlineTextsms } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";
import { GiHotMeal, GiMeal } from "react-icons/gi";
import { IoHomeOutline } from "react-icons/io5";
import { PiBowlFoodLight } from "react-icons/pi";
import { IoMdLogIn } from "react-icons/io";
import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Avatar } from "keep-react";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowRoundForward } from "react-icons/io";


const Mainlayout = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const { user, logOut } = useContext(AuthContext)

    const handelLogout = () => {
        logOut()
            .then(result => {
                // console.log(result);
                swal("Success", "Logout successfully", "success")
                return
            })
            .catch(err => {
                swal("Error", "Logout not successfully", "Error")
            })
    }

    const menu = <>
        <div className="flex justify-center items-center">
            <li className="text-orange-500"><NavLink to='/' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-black" : ""
            }><IoHomeOutline />
                Home</NavLink></li>
            <li className="text-orange-500"><NavLink to='/meals' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-black" : ""
            }><GiMeal />Meals</NavLink></li>
            <li className="text-orange-500"><NavLink to='/upcommingMeals' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? " text-black" : ""
            }><GiHotMeal />
                Upcomming Meals</NavLink></li>
            <li className="text-orange-500"><NavLink to='/notificaton' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  text-black" : ""
            }><MdOutlineTextsms />Notification</NavLink></li>
            <li className="text-orange-500"><NavLink to='/dashboard' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "  text-black" : ""
            }><MdOutlineDashboard />Dashboard
            </NavLink></li>

            {/* login logout  */}






            {/* condition user profile  */}

            {
                user ? <>
                    <li className="relative">
                        <div
                            onClick={() => setShowDropdown(!showDropdown)}
                            className="cursor-pointer"
                        >
                            <Avatar
                                shape="circle"
                                size="md"
                                status="online"
                                statusPosition="bottom-left"
                                img={user?.photoURL}
                            />
                        </div>

                        {/* Dropdown menu */}
                        {showDropdown && (
                            <ul className="absolute top-14 right-0 bg-white border w-[200px] rounded-md shadow-md p-2 transition-all ">
                                <li className="text-orange-500">
                                    <NavLink to="/dashboard/userProfile"><CgProfile />Profile<IoIosArrowRoundForward /></NavLink>
                                </li>
                                <li className="text-orange-500">
                                    <span className="font-semibold">{user?.displayName ? user.displayName : "MR. XYZ"}</span>
                                </li>
                                <li className=" border rounded text-white bg-orange-600 "><NavLink onClick={handelLogout} className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "  " : ""
                                }><IoMdLogIn />Logout
                                </NavLink>
                                </li>
                            </ul>
                        )}
                    </li>



                </> : <>
                    <li className="text-white border rounded bg-orange-600"><NavLink to='/login' className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "  text-black" : ""
                    }><IoMdLogIn />Join
                    </NavLink>
                    </li>
                </>
            }



        </div>

    </>


    return (
        <div>

            {/* navbar navbar components  */}
            <div className="drawer ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="w-full navbar rounded-full mt-2 fixed z-10  py-4 px-8 bg-white  ">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                            </label>
                        </div>
                        <div className="flex-1 px-2 mx-2 text-2xl "><PiBowlFoodLight className="text-4xl text-orange-600" />
                            Serve <span className="text-4xl font-bold ">M</span>eaL</div>
                        <div className="flex-none hidden lg:block">
                            <ul className="menu menu-horizontal">
                                {/* Navbar menu content here */}
                                {
                                    menu
                                }
                            </ul>
                        </div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-2/3 min-h-full bg-white mt-20">
                        {/* Sidebar content here */}
                        {menu}
                    </ul>
                </div>
            </div>



        </div>
    );
};

export default Mainlayout;