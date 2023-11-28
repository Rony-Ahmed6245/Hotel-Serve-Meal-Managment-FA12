import { useLoaderData } from "react-router-dom";
import ManageUserTable from "../components/ManageUserTable";


const ManageUsers = () => {
     const data = useLoaderData([]);
    //  console.log(data);
    return (
        <div>
              <div className="overflow-x-auto p-8">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr className="bg-orange-500 text-white">
                            <th></th>
                            <th>User Name</th>
                            <th>User Email</th>
                            <th>Make admin</th>
                            <th>Subscription</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody>
                        {data?.map((item, index) => (
                            <ManageUserTable key={item._id} item={item} index={index + 1}></ManageUserTable>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;