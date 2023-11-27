import { Link } from "react-router-dom";


const ProductionMeal = ({ item }) => {
    console.log(item);
    const {_id, name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = item || {}
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{mealTitle}</h2>
                    <p>{price}</p>
                    <div className="card-actions justify-end">
                    <Link to={`/v1/productionMealDetails/${_id}`} className="btn btn-primary">Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionMeal;