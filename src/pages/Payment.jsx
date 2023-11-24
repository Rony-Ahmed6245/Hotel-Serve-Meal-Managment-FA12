import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Payment = () => {


  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/membership.json"); // Adjust the path based on your project structure
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  const filterItem = data.find((item) => item._id == id);
  console.log(filterItem);

  return (
    <div className="mt-20">
      {/* Display payment details or any other content */}
      {filterItem ? (
       <>
       <h1>price:${filterItem.price}</h1>
       
       
       
       </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Payment;
