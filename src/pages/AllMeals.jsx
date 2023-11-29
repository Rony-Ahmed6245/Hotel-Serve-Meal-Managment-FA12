import { useLoaderData } from "react-router-dom";
import MealTable from "../components/MealTable";
import { useState } from "react";
import { useEffect } from "react";


const AllMeals = () => {
    const data = useLoaderData([]);
    const [meals, setMeals] = useState([]);
    // console.log(data);
    const fetchMeals = async () => {
        try {
          const response = await fetch('http://localhost:5000/v1/meals');
          const data = await response.json();
          setMeals(data);
        } catch (error) {
          console.error('Error fetching meals:', error);
        }
      };
    
      // Function to handle deletion and update state
      const handleDelete = (mealId) => {
        setMeals((prevMeals) => prevMeals.filter((meal) => meal._id !== mealId));
      };
      useEffect(() => {
        // Fetch meals when the component mounts
        fetchMeals();
      }, []);

    return (
        <div>
            <div className="overflow-x-auto p-8">
            <marquee className='bg-orange-500 text-white -mb-2 uppercase' direction="">All meals ready for delete update and view </marquee>
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-500 text-white">
                            <th></th>
                            <th>Meal title</th>
                            <th>Price</th>
                            <th>Type</th>
                            <th>Like</th>
                            <th>Review</th>
                            <th>Distributor Name</th>
                            <th>Distributor Email</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {meals?.map((item, index) => (
                            <MealTable key={item._id} item={item} index={index + 1} onDelete={handleDelete}></MealTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllMeals;