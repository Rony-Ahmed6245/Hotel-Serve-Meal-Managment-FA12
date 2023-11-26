import { useLoaderData } from "react-router-dom";
import ProductionMeal from "../components/ProductionMeal";
import { useState } from "react";
import { Pagination } from "keep-react";

const ITEMS_PER_PAGE = 8; 
const Meals = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const data = useLoaderData([]);

    // Calculate the total number of pages
    const totalItems = data.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return (
        <div className="mt-32 max-w-7xl mx-auto p-4">
            <div className="flex justify-between items-center">
                <h1 className="text-xl font-bold text-orange-500 my-10">Total Production meals: {totalItems}</h1>
                <input onChange={(e) => setSearch(e.target.value)} type="text" name="text" className="input1 " placeholder="Type something here...."></input>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {totalItems === 0 ? (
                    <div>
                        <h1 className="text-center text-2xl">No job found </h1>
                    </div>
                ) : (
                    data
                        ?.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                        .filter((item) => {
                            return search.toLocaleLowerCase() === "" ? item : item.mealTitle.toLocaleLowerCase().includes(search)
                        })
                        .map(item => (
                            <ProductionMeal key={item._id} item={item}></ProductionMeal>
                        ))
                )}
            </div>
            <div className="flex justify-center items-center mt-10">
                <Pagination
                    currentPage={currentPage}
                    onPageChange={(val) => setCurrentPage(val)}
                    totalPages={totalPages}
                    iconWithOutText
                    prevNextShape="roundSquare"
                />
            </div>
        </div>
    );
};

export default Meals;
