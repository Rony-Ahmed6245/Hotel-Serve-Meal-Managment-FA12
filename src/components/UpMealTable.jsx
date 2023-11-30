
import { useState } from "react";
import Swal from "sweetalert2";


const UpMealTable = ({ item, index }) => {
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);
    const { _id, name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = item || {}




    const handelProductionMeal = (name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate) => {

        const data = { name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate };
        // console.log(data);
        setIsButtonDisabled(false);
        fetch("https://final-assignment-12s.vercel.app/v1/production", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire("Meal Production successfully");
            })
            .finally(() => {
                setIsButtonDisabled(true); // Enable the button after the request is complete
            });
    }

    return (

        <tr>
            <td>{index}</td>
            <td>{mealTitle}</td>
            <td>00</td>
            <td>{name}</td>
            <td>{email}</td>
            <td><button onClick={() => handelProductionMeal( name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate)}
             className="btn btn-sm text-red-400"
             disabled={isButtonDisabled}
             >Production</button></td>
        </tr>

    );
};

export default UpMealTable;