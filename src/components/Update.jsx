import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

const Update = () => {
    const data = useLoaderData([]);
    const { id } = useParams();
    const updateData = data.find((item) => item._id === id);
    const { dsc, email, ing, mealTitle, price, name } = updateData || {};

    const [formData, setFormData] = useState({

        mealTitle: mealTitle || "",
        price: price || "",
        ingredient: ing || "",
        description: dsc || "",
    });

    const handleUpdate = (e) => {
        e.preventDefault();

        // Update the backend using the fetch API
        fetch(`https://final-assignment-12s.vercel.app/v1/meals/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                mealTitle: formData.mealTitle,
                price: formData.price,
                ing: formData.ingredient,
                dsc: formData.description,
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                Swal.fire("Meal updated successfully");
                // Handle the response as needed
            })
            .catch((error) => {
                console.error("Error updating user:", error);
                // Handle errors
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card shrink-0 w-full max-w-3xl  bg-base-100">
                    <form className="card-body" onSubmit={handleUpdate}>

                        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Meal title</span>
                                </label>
                                <input
                                    type="text"
                                    name="mealTitle"
                                    value={formData.mealTitle}
                                    placeholder="Meal title"
                                    className="input input-bordered"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Price</span>
                                </label>
                                <input
                                    type="number"
                                    name="price"
                                    value={formData.price}
                                    placeholder="Price max-200"
                                    className="input input-bordered"
                                    required
                                    max={200}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-3">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Ingredient</span>
                                </label>
                                <textarea
                                    name="ingredient"
                                    value={formData.ingredient}
                                    placeholder="Ingredient"
                                    className="input input-bordered"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Description</span>
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    placeholder="Description"
                                    className="input input-bordered"
                                    required
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="form-control mt-6 flex justify-center items-center">
                            <button type="submit" className="w-4/12 button1 btn outline-none ">
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
