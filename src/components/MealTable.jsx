import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { GrView } from "react-icons/gr";

const MealTable = ({ item, index }) => {
    // console.log(item);
    const { name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = item || {}


    return (
        <tr>
            <td>{index}</td>
            <td>{mealTitle}</td>
            <td>00</td>
            <td>00</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><button className="btn btn-sm text-red-400"><AiTwotoneDelete /></button></td>
            <td><button className="btn btn-sm text-red-400"><GrUpdate /></button></td>
            <td><button className="btn btn-sm text-red-400"><GrView /></button></td>

        </tr>
    );
};

export default MealTable;