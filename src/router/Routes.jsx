import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layouts/Mainlayout";
import ErroePage from "../pages/ErroePage";
import Home from "../pages/Home";
import Meals from "../pages/Meals";
import Notification from "../pages/Notification";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import UserProfile from "../pages/UserProfile";
import RequestedMeals from "../pages/RequestedMeals";
import MyReviews from "../pages/MyReviews";
import AdminProfile from "../pages/AdminProfile";
import ManageUsers from "../pages/ManageUsers";
import Addmeal from "../pages/Addmeal";
import AllMeals from "../pages/AllMeals";
import AllReviews from "../pages/AllReviews";
import ServeMeals from "../pages/ServeMeals";
import Payment from "../pages/Payment";
import DashboardHome from "../pages/DashboardHome";
import PrivateRoute from "./PrivateRoute";
import UpcomingMeal from "../pages/UpcomingMeal";
import HomeUp from "../pages/HomeUp";



export const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErroePage></ErroePage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch("http://localhost:5000/v1/paymentCard"),
            },
            {
                path: '/meals',
                element: <Meals></Meals>,
            },
            {
                path: '/upcommingMeals',
                element: <HomeUp></HomeUp>,
            },
            {
                path: '/notificaton',
                element: <Notification></Notification>,
            },
            {
                path: '/payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute> ,
                
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>,
    },
    {
        path: '/register',
        element: <Register></Register>,
    },
    {
        path: '/dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute> ,
        children: [
        //    user profile routes
        {
            path:'/dashboard',
            element:<DashboardHome></DashboardHome>,
            loader:  () =>  fetch('http://localhost:5000/v1/meals'),
        },
        {
            path:'userProfile',
            element:<UserProfile></UserProfile>,
        },
        {
            path:'requestedMeals',
            element:<RequestedMeals></RequestedMeals>,
        },
        {
            path:'myReviews',
            element:<MyReviews></MyReviews>,
        },
        // admin profile routes
        {
            path:'adminProfile',
            element:<AdminProfile></AdminProfile>,
            loader:  () =>  fetch('http://localhost:5000/v1/meals'),
        },
        {
            path:'manageUsers',
            element:<ManageUsers></ManageUsers>,
        },
        {
            path:'addMeal',
            element:<Addmeal></Addmeal>,
        },
        {
            path:'allMeals',
            element:<AllMeals></AllMeals>,
            loader:  () =>  fetch('http://localhost:5000/v1/meals'),
        },
        {
            path:'allReviews',
            element:<AllReviews></AllReviews>,
        },
        {
            path:'serveMeals',
            element:<ServeMeals></ServeMeals>,
        },
        {
            path:'upcomingMeals',
            element:<UpcomingMeal></UpcomingMeal>,
            loader:  () =>  fetch('http://localhost:5000/v1/meals'),
        }
        ]
    }

])