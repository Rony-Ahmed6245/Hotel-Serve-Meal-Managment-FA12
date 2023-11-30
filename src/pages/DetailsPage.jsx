
import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
const DetailsPage = () => {
    const { user } = useContext(AuthContext)
    console.log(user);

    const data = useLoaderData([])
    // console.log(data);
    const { id } = useParams()
    // console.log(id, data);
    const filterItem = data.find(item => item._id === id)

    // console.log(filterItem);
    const { _id, name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = filterItem || {}
    const convertedRating = parseInt(rating, 10);



    const handelRequestMealUser = (mealTitle) => {
        const email = user.email;
        const fromData = { mealTitle, email };
        console.log(fromData);
    
        Swal.fire({
            title: "Are you sure?",
            text: "Meal request send",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, request it!"
        })
        .then((result) => {
            if (result.isConfirmed) {
                // Make the POST request only if the user confirms
                fetch("https://final-assignment-12s.vercel.app/v1/userMealRequest", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(fromData),
                })
                .then((res) => res.json())
                .then((data) => {
                    // Handle the response if needed
                    Swal.fire({
                        title: "Meal Requested!",
                        text: "Your meal request has been sent.",
                        icon: "success"
                    });
                })
                .catch((error) => {
                    console.error('Error requesting meal:', error);
                    Swal.fire({
                        title: "Error",
                        text: "Error requesting meal.",
                        icon: "error"
                    });
                });
            }
        });
    };
    




    const handelRequest = () => {
        Swal.fire("Login Fast to send Meal Request");
    }



    return (
        <div className=" md:p-20 p-3  ">


            <div className="md:w-8/12 mx-auto w-full  bg-base-100 ">
                <figure><img className="" src={photo} alt="Shoes" /></figure>

            </div>

            <div className="card mx-auto md:w-8/12 w-full lg:card-side bg-base-100 ">

                <div className="card-body">
                    <h2 className="card-title text-3xl uppercase">{mealTitle}</h2>
                    <h2 className="card-title">Distributor by {name}</h2>
                    <h1 className="text-sm ">Posting Date:{currentDate}</h1>
                    <h1 className="text-sm ">Price ${price}</h1>
                    <p className="text-justify">{dsc}</p>
                    <p className="text-justify">{ing}</p>

                    <div className="divider"></div>
                    <div className="card-actions justify-between">
                        <StarRatings
                            rating={convertedRating}
                            starDimension="30px"
                            starSpacing="1px"
                            className="text-red-600 bg-red-500"
                            starRatedColor="#EB631C"
                        />
                        <div className="flex gap-2">
                            <button className="btn  button1 outline-none">Like</button>
                            {
                                user ?
                                    <button onClick={() => handelRequestMealUser(mealTitle)} className="btn button1  outline-none">Request</button>
                                    :
                                    <button onClick={handelRequest} className="btn  btn-error text-white outline-none">Request</button>
                            }

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;