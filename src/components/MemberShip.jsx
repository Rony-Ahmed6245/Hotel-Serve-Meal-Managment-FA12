

import Title from "./Title";
import { useEffect, useState } from "react";
import MembershipCard from "./MembershipCard";


const MemberShip = () => {
    const [data, setData] = useState([]);
    // console.log(data);

    useEffect(() => {
        fetch("../../public/membership.json")
        .then(res=> res.json())
        .then(data=>setData(data))

    }, [])






    return (
        <div className='my-20'>
            <Title heading={'Membership'}></Title>
            <div className="md:flex my-10 justify-center items-center max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 px-2 gap-4">
                    
                  
                   {
                    data?.map(item =>(
                        <MembershipCard key={item._id} item={item}></MembershipCard>
                    ))
                   }

                </div>

            </div>
        </div>
    );
};

export default MemberShip;