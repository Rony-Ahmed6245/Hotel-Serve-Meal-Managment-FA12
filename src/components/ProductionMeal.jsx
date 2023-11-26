

const ProductionMeal = ({ item }) => {
    console.log(item);
    const { name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = item || {}
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{mealTitle}</h2>
                    <p>{dsc}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">View detail</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductionMeal;