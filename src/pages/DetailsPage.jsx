
import { useLoaderData, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
const DetailsPage = () => {


    const data = useLoaderData([])
    const { id } = useParams()
    // console.log(id, data);
    const filterItem = data.find(item => item._id === id)

    console.log(filterItem);
    const { _id, name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = filterItem || {}
    const convertedRating = parseInt(rating, 10);
    return (
        <div className="mt-20  md:p-20 p-3  ">


            <div className="md:w-8/12 mx-auto w-full  bg-base-100 ">
                <figure><img className="" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>

            </div>

            <div className="card mx-auto md:w-8/12 w-full lg:card-side bg-base-100 ">

                <div className="card-body">
                    <h2 className="card-title text-3xl uppercase">{mealTitle}</h2>
                    <h2 className="card-title">Distributor by {name}</h2>
                    <h1 className="text-sm ">Posting Date:{currentDate}</h1>
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
                            <button className="btn button1  outline-none">Request</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;