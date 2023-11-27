
import { useLoaderData, useParams } from "react-router-dom";

const DetailsPage = () => {


    const data = useLoaderData([])
    const { id } = useParams()
    // console.log(id, data);
    const filterItem = data.find(item => item._id === id)
  
    console.log(filterItem);
    const { _id, name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = filterItem || {}
   
    return (
        <div className="mt-32 p-8 max-w-7xl mx-auto">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src="https://daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{price}.</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsPage;