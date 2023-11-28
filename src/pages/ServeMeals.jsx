import { useLoaderData } from "react-router-dom";
import ServeMealTable from "../components/ServeMealTable";


const ServeMeals = () => {
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
                            <th>Order Email</th>
                            <th>Delivery status</th>
                            <th></th>
                          
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {data?.map((item, index) => (
                            <ServeMealTable key={item._id} item={item} index={index + 1}></ServeMealTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ServeMeals;