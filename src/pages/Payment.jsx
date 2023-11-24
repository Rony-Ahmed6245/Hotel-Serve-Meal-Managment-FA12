
import { useEffect, useState } from "react";
import { SlBadge } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { CheckCircle } from "phosphor-react";
import { Card } from "keep-react";
import { Label, TextInput } from "keep-react";

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
  const { keyf1, keyf2, keyf3, keyf4, keyf5, keyf6, price, badge
  } = filterItem || {}

  return (
    <div className="mt-32 max-w-7xl mx-auto px-4">
      {/* Display payment details or any other content */}

      <div className="md:flex justify-center items-start gap-20">
        <div className="flex-grow  ">
          <div className="p-8 bg-base-200 rounded space-y-2 mb-20 ">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Subtotal package(1)</h1>
              <h1 className="text-xl font-bold">${price}</h1>
            </div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Discount</h1>
              <h1 className="text-xl font-bold">NO Discount</h1>
            </div>
            <div className="divider"></div>
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-bold">Total</h1>
              <h1 className="text-xl font-bold">${price}</h1>
            </div>
          </div>
          <div className="md:flex gap-10">
            <div>
              <Label value="Label" />
              <TextInput
                id="#id-17"
                placeholder="Default Input Field"
                color="gray"
                className="w-full"
              />
            </div>
            <div>
              <Label value="Label" />
              <TextInput
                id="#id-17"
                placeholder="Default Input Field"
                color="gray"
                className="w-full"
              />
            </div>
            <div>
              <Label value="Label" />
              <TextInput
                id="#id-17"
                placeholder="Default Input Field"
                color="gray"
                className="w-full"
              />
            </div>

          </div>
          <Label value="Label" />
          <TextInput
            id="#id-17"
            placeholder="Default Input Field"
            color="gray"
            className="w-full"
          />
          <Label value="Label" />
          <TextInput
            id="#id-17"
            placeholder="Default Input Field"
            color="gray"
            className="w-full"
          />




        </div>
        <div className="flex-2 ">
          <Card className="max-w-xs p-6  bg-base-200 hover:shadow-md transition-all">
            <Card.Container>
              <Card.Container className="h-[60px] w-[60px]  bg-primary-25 flex items-center justify-center rounded-full">

              </Card.Container>
              <Card.Container>
                <Card.Title className=" flex mb-5  justify-start gap-3  items-center font-medium text-primary-600">
                  <h1 className="text-2xl font-bold"> Choose your Package</h1>
                </Card.Title>
                <Card.Title className=" flex justify-start gap-3 text-3xl items-center font-medium text-primary-500">
                  <SlBadge />{badge}
                </Card.Title>
                <Card.Title className="flex items-center my-3">
                  <span className="text-heading-4 font-bold text-metal-800">${price}</span>
                  <span className="ml-1 text-body-4 font-medium text-metal-400">
                    / mth
                  </span>
                </Card.Title>
                <Card.Description className="text-body-4 text-metal-700">

                  Referral Program: Implement a referral program where existing members receive discounts or free meals for referring new members.

                </Card.Description>
              </Card.Container>
              <Card.Container tag="ul" className="my-4 space-y-4">
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf1}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf2}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf3}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf4}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf5}
                  </span>
                </Card.List>
                <Card.List className="flex items-center gap-1.5">
                  <CheckCircle size={24} color="#EA580C" />
                  <span className="text-body-4 text-metal-700">
                    {keyf6}
                  </span>
                </Card.List>
              </Card.Container>

            </Card.Container>
          </Card>
        </div>
      </div>
    </div>

  );
};

export default Payment;
