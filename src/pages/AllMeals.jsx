import { useLoaderData } from "react-router-dom";
import MealTable from "../components/MealTable";


const AllMeals = () => {
    const data = useLoaderData([]);
    console.log(data);

    return (
        <div>
            <div className="overflow-x-auto p-8">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-500 text-white">
                            <th></th>
                            <th>Meal title</th>
                            <th>Number of Like</th>
                            <th>Number of Review</th>
                            <th>Distributor Name</th>
                            <th>Distributor Email</th>
                            <th>Meal delete</th>
                            <th>Meal update</th>
                            <th>Meal view</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {data.map((item, index) => (
                            <MealTable key={item._id} item={item} index={index + 1}></MealTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllMeals;