import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import RequstMealTable from "../components/RequstMealTable";


const RequestedMeals = () => {
    const {user} = useContext(AuthContext);
    // console.log(user);
    const data = useLoaderData([]);
    // console.log(data);

    const filterData = data.filter(item =>item.email === user.email)
    console.log(filterData);


    return (
        <div>
             <div className="overflow-x-auto p-8">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-500 text-white">
                            <th></th>
                            <th>Meal title</th>
                            <th>Like</th>
                            <th>Reviews</th>
                            <th>Status</th>
                            <th>Meal Cancel</th>
                            
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {filterData?.map((item, index) => (
                            <RequstMealTable key={item._id} item={item} index={index + 1}></RequstMealTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RequestedMeals;