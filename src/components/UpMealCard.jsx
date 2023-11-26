import { useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";


const UpMealCard = ({ item }) => {
    const [isLiked, setIsLiked] = useState(false);

    const handleLikeToggle = () => {
        setIsLiked(!isLiked);
    };

    const { name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate } = item || {}
    return (
        <div>
            <div className="card card-side  shadow border-orange-400 border-2 ">
                <figure><img className="md:w-[200px] w-[100px]" src={photo} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="text-2xl uppercase font-bold">{mealTitle}</h2>
                    <p className="text-md text-gray-400">{ing}</p>
                    <div className="flex justify-between items-center">
                        <h1 className="text-xl text-orange-500 font-bold">${price}</h1>
                        <button onClick={handleLikeToggle} className="bg-orange-500 text-3xl text-white px-4 py-1 rounded btn">{isLiked ? <BiDislike />
                            : <BiLike />}</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpMealCard;