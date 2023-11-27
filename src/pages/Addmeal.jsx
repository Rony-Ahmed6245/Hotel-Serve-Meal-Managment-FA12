import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";











const Addmeal = () => {
const {user} = useContext(AuthContext)
// console.log(user);

    const handleMealData =  (e) => {
        e.preventDefault();
        const form = e.target;

        const name = form.name.value;
        const email = form.email.value;
        const mealTitle = form.mealTitle.value;
        const price = form.price.value;
        const photo = form.photo.value;
        const rating = form.rating.value;
        const category = form.category.value;
        const type = form.type.value;
        const dsc = form.dsc.value;
        const ing = form.ing.value;
        const currentDate = new Date().toDateString();

        const formData = { name, email, mealTitle, price, photo, rating, category, type, dsc, ing, currentDate };
        console.log(formData);


        fetch("http://localhost:5000/v1/meals", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              Swal.fire("Meal Added successfully");
            });
        
      form.reset();
      
    };





    return (
        <div>
            <div className="max-w-3xl  mx-auto my-10 border p-4 rounded bg-base-200 ">

                <form onSubmit={handleMealData} className="space-y-2">

                    {/* part1 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                        {/* admin name */}
                        <div className="form-control form-group">
                            <label className="label">
                                <span className="label-text">Admin distributor name</span>
                            </label>
                            <input name="name" defaultValue={user?.displayName} type="text" placeholder="name" className="py-2 p-2 rounded design outline-none border" required />
                        </div>
                        {/* admin email */}
                        <div className="form-control form-group">
                            <label className="label">
                                <span className="label-text">Admin distributor Email</span>
                            </label>
                            <input name="email" defaultValue={user.email} type="email" placeholder="Email" className="py-2 p-2 rounded design outline-none border" required />
                        </div>
                    </div>

                    {/* part2 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* meal title  */}
                        <div className="form-control form-group ">
                            <label className="label">
                                <span className="label-text">Meal title</span>
                            </label>
                            <input name="mealTitle" type="text" placeholder="Meal title" className="py-2 p-2 rounded design outline-none  border " required />
                        </div>


                        {/*price*/}
                        <div className="form-control form-group">
                            <label className="label">
                                <span className="label-text">Price</span>
                            </label>

                            <input type="number" max={200} name="price" placeholder="price max 200" className="py-2 p-2 rounded design outline-none border" required />


                        </div>
                    </div>




                    {/* part3 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                        {/* meal photo */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Meal photo</span>
                            </label>
                            <input type="text" name="photo" placeholder="PhotoURL" className="py-2 p-2 rounded design outline-none border" required />
                        </div>
                        {/* rating?  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Rating</span>
                            </label>
                            <input type="number" name="rating" min={1} max={5} placeholder="Rating" className="py-2 p-2 rounded design outline-none border" required />
                        </div>
                        {/* category  */}

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-center items-center">
                        <div className="form-control border rounded">
                            <label >Select Meals category:</label>
                            <select className="design border  outline-none rounded py-2" name="category" id="mySelect">
                                <option value="Breakfast">Breakfast</option>
                                <option value="Lunch">Lunch</option>
                                <option value="Dinner">Dinner</option>
                            </select>
                        </div>
                        <div className="form-control border rounded">
                            <label >Select Meals types:</label>
                            <select className="design border  outline-none rounded py-2" name="type" id="mySelect">
                                <option value="regular">Regular Meal</option>
                                <option value="upcoming">Upcoming Meal</option>
                            </select>
                        </div>

                    </div>


                    {/* Des */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Description</span>
                            </label>
                            <textarea placeholder=" Type here...." className="design rounded outline-none border" name="dsc" id="" cols="5" rows="5"></textarea>
                        </div>
                        {/* Ingredients  */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Ingredients</span>
                            </label>
                            <textarea placeholder=" Type here...." className="design rounded outline-none border" name="ing" id="" cols="5" rows="5"></textarea>
                        </div>
                    </div>
                    {/* submitt  */}
                    <div className=" mt-6">
                        <button className="bg-orange-500 w-full btn  py-2 outline-none border rounded text-white">Add Meal</button>

                    </div>

                </form>
            </div>
        </div>
    );
};

export default Addmeal;