import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import { GrView } from "react-icons/gr";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

const MealTable = ({ item, index, onDelete }) => {
  const { _id, mealTitle, price, name, email, type } = item || {};


  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    // Show a confirmation dialog using SweetAlert2
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        setIsDeleting(true);

        try {
          const response = await fetch(`http://localhost:5000/v1/meals/${_id}`, {
            method: "DELETE",
          });

          if (response.ok) {
            onDelete(_id); // Update the state in the parent component
            Swal.fire({
              title: "Deleted!",

              text: "Your file has been deleted.",
              icon: "success"
            });
          } else {
            console.error('Failed to delete the meal.');
            Swal.fire({
              title: "Error",
              text: "Failed to delete the meal.",
              icon: "error"
            });
          }
        } catch (error) {
          console.error('Error deleting meal:', error);
          Swal.fire({
            title: "Error",
            text: "Error deleting meal.",
            icon: "error"
          });
        } finally {
          setIsDeleting(false);
        }
      }
    });
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{mealTitle}</td>
      <td>{price}</td>
      <td className=" uppercase">{type=== 'upcoming'?<h1 className="text-orange-500">Upcoming</h1> :<h1 className="text-lime-700">Regular</h1> }</td>
      <td>00</td>
      <td>00</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>
        <button
          className={`btn btn-sm text-red-400 ${isDeleting ? 'disabled' : ''}`}
          onClick={handleDelete}
          disabled={isDeleting}
        >
          <AiTwotoneDelete />
        </button>
      </td>
      <td><Link to={`/dashboard/update/${_id}`} className="btn btn-sm text-green-500"><GrUpdate /></Link></td>
      <td><Link to={`/dashboard/dashMealDetails/${_id}`} className="btn btn-sm text-blue-400"><GrView /></Link></td>
    </tr>
  );
};

export default MealTable;
