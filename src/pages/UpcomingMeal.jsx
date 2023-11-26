import { useLoaderData } from "react-router-dom";
import UpMealTable from "../components/UpMealTable";


const UpcomingMeal = () => {
    const data = useLoaderData([]);

    const filterItem = data.filter(item => item.type === "upcoming")

    console.log(data);

    return (
        <div>
            <div>
                <div className="overflow-x-auto p-8">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr className="bg-orange-500 text-white">
                                <th></th>
                                <th>Meal title</th>
                                <th>Number of Like</th>
                                <th>Distributor Name</th>
                                <th>Distributor Email</th>
                                <th>Production Meal</th>
                                
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody>
                            {filterItem?.map((item, index) => (
                                <UpMealTable key={item._id} item={item} index={index + 1}></UpMealTable>  
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UpcomingMeal;