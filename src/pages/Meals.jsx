import { useLoaderData } from "react-router-dom";
import ProductionMeal from "../components/ProductionMeal";
import { useState } from "react";
import { Pagination } from "keep-react";

const ITEMS_PER_PAGE = 8;

const Meals = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState('');
    const [priceRange, setPriceRange] = useState(null);
    const data = useLoaderData([]);

    // Filter data based on search and price range
    const filteredData = data.filter((item) => {
        const isTitleMatch = search.toLowerCase() === "" || item.mealTitle.toLowerCase().includes(search);
        const isPriceMatch = !priceRange || (
            (priceRange === '0-100' && item.price >= 0 && item.price <= 100) ||
            (priceRange === '101-200' && item.price >= 101 && item.price <= 200)
            // Add more conditions for other price ranges if needed
        );
        return isTitleMatch && isPriceMatch;
    });

    // Calculate the total number of pages
    const totalItems = filteredData.length;
    const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

    return (
        <div className=" max-w-7xl mx-auto p-4">
            {/* Search and Price Range Filters */}
            <h1 className="text-center md:text-2xl text-md font-semibold text-gray-500 ">---Ready for your meals <span className="text-orange-600">({data.length})</span> please view meal and send request Meal---</h1>
            <div className="md:flex justify-between items-center mb-6">
                <div>
                    <label className="text-sm font-medium text-gray-700">Filter by Price Range:</label>
                    <select
                        onChange={(e) => setPriceRange(e.target.value)}
                        value={priceRange || ''}
                        className="block md:w-96  w-40 mt-1 border px-8 py-1 border-gray-300 rounded-md focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                    >
                        <option value="">All</option>
                        <option value="0-100">0-100</option>
                        <option value="101-200">101-200</option>
                        {/* Add more options for other price ranges if needed */}
                    </select>
                </div>
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    name="text"
                    className="input1"
                    placeholder="Type something here...."
                />
            </div>

            {/* Display Meals */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 p-3 gap-4">
                {totalItems === 0 ? (
                    <div>
                        <h1 className="text-center text-2xl">No meals found </h1>
                    </div>
                ) : (
                    filteredData
                        .slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE)
                        .map(item => (
                            <ProductionMeal key={item._id} item={item} />
                        ))
                )}
            </div>

            {/* Pagination */}
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
