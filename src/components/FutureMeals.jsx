import { Link } from "react-router-dom";
import FutureMealCard from "./FutureMealCard";
import { useEffect, useState } from "react";
import Title from "./Title";
import { PiBowlFood } from "react-icons/pi";

const FutureMeals = () => {
    const [meals, setMeals] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        fetch('https://final-assignment-12s.vercel.app/v1/meals')
            .then(res => res.json())
            .then(data => {
                setMeals(data)
                setFilteredMeals(data)

                const categories = [...new Set(data.map(val => val.category))];
                setMenuItems(categories);
            })

            .catch(error => console.error('Error fetching meals:', error));
    }, []);


    const filterItem = (cat) => {

        if (cat === "All") {
            setFilteredMeals(meals); // Reset to show all jobs
        } else {
            const newItem = meals?.filter((newval) => newval.category === cat);
            setFilteredMeals(newItem);
        }
    }


    

    return (
        <div className="max-w-7xl mx-auto p-2 pt-10">
            <Title heading={'All Future Meals'}></Title>
            {/* category btn */}
            <div className="md:flex justify-center items-center my-8 gap-4">
                <button onClick={() => filterItem("All")} className="btn button1 text-white shadow bg-orange-600  rounded">
                    <PiBowlFood /> All
                </button>
                {menuItems?.map((val) => (
                    <Link
                        className="py-2 button1 px-4 text-white shadow bg-orange-500 btn rounded "
                        onClick={() => filterItem(val)} key={val}>
                        <PiBowlFood />{val}
                    </Link>
                ))}

            </div>




            {/* card  */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {filteredMeals?.slice(0, 4).map(item => (
                    <FutureMealCard key={item._id} item={item}></FutureMealCard>
                ))}
            </div>
            <div className="flex justify-center items-center gap-5 mt-5 ">
                <Link to={'/meals'} className="btn  btn-sm button1">Ready Meals</Link>
                <Link to={'/upcommingMeals'} className="btn btn-sm  button1">Upcomming Meals</Link>
            </div>
           
        </div>
    );
};

export default FutureMeals;
