
import { Link } from "react-router-dom";
import StarRatings from "react-star-ratings";



const FutureMealCard = ({ item }) => {
    const { _id, name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = item || {}

    const convertedRating = parseInt(rating, 10);
    // console.log(rating);
    return (
        <div>
            <div className="shadow hover:shadow-2xl transition-all rounded-sm ">
                <figure><img src={ photo} alt="Shoes" /></figure>
                <div className="p-5 space-y-4">
                    <h2 className="card-title">{mealTitle}</h2>
                    <p className="text-black text-md font-semibold">Price ${price}</p>


                    <div className="flex justify-between">


                        <StarRatings
                            rating={convertedRating}
                            starDimension="30px"
                            starSpacing="1px"
                            className="text-red-600 bg-red-500"
                            starRatedColor="#EB631C"
                        />

                        <Link to={`/v1/details/${_id}`} className="btn btn-sm btn-outline border-orange-300 hover:bg-orange-600">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FutureMealCard;