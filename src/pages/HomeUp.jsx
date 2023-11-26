import { useLoaderData } from "react-router-dom";
import UpMealCard from "../components/UpMealCard";

const HomeUp = () => {
    const data = useLoaderData([]);

    const filterItem = data.filter(item => item.type === "upcoming")
    return (
        <div className='mt-32 max-w-7xl mx-auto'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {/* navbar upcoming meal  */}
                {filterItem?.map((item) => (
                    <UpMealCard key={item._id} item={item} ></UpMealCard>
                ))}
            </div>
        </div>
    );
};

export default HomeUp;