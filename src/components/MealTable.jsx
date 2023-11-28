import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";

const MealTable = ({ item, index }) => {
    // console.log(item);
    const {_id, name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = item || {}


    return (
        <tr>
            <td>{index}</td>
            <td>{mealTitle}</td>
            <td>{price}</td>
            <td>00</td>
            <td>00</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><button className="btn btn-sm text-red-400"><AiTwotoneDelete /></button></td>
            <td><Link to={`/dashboard/update/${_id}`} className="btn btn-sm text-green-500"><GrUpdate /></Link></td>
            <td><Link to={`/dashboard/dashMealDetails/${_id}`} className="btn btn-sm text-blue-400"><GrView /></Link></td>
            {/* <Link to={`/v1/productionMealDetails/${_id}`} className="btn btn-primary">Details</Link> */}
        </tr>
    );
};

export default MealTable;