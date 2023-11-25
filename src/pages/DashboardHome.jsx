import { BarChart } from "keep-react";


const BarChartData = [
    {
        name: "2",
        price: 340,
        sell: 140,
    },
    {
        name: "4",
        price: 300,
        sell: 200,
    },
    {
        name: "6",
        price: 170,
        sell: 120,
    },
    {
        name: "8",
        price: 190,
        sell: 130,
    },
    {
        name: "10",
        price: 450,
        sell: 120,
    },

];

const DashboardHome = () => {
    return (
        <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                <div className="newmor flex bg-blue-600 justify-center items-center text-white rounded h-32">
                    <h1 className="text-center text-4xl font-bold">All user: 04</h1> 
                </div>
                <div className="newmor flex justify-center bg-orange-600  items-center text-white rounded h-32">
                    <h1 className="text-center text-4xl font-bold">All Meals: 06</h1> 
                </div>
                <div className="newmor flex justify-center bg-green-600 items-center text-white rounded h-32">
                    <h1 className="text-center text-4xl font-bold">All Reviews: 24</h1> 
                </div>
               
                
            </div>
            <div className="grid grid-cols-1 mt-5 md:grid-cols-2 justify-center items-center gap-4">
                <div className="">
                    <BarChart
                        height={250}
                        width={500}
                        dataKey="price"
                        chartData={BarChartData}
                        barRadius={[4, 4, 0, 0]}
                        showLegend={true}
                        showBg={true}
                        showXaxis={true}
                        showYaxis={true}
                        showTooltip={true}
                        active={true}
                        activeIndex={5}

                        barColor={"#ED8A56"}
                        showGridLine={true}
                    />
                    <h1 className="text-center text-2xl mt-5 ">Request Meals Details</h1>
                </div>
                <div className="">
                    <BarChart
                        height={250}
                        width={500}
                        barSize={30}
                        barColor={"#ED8A56"}

                        barRadius={[4, 4, 0, 0]}
                        dataKey="price"
                        secondaryDataKey="sell"
                        chartData={BarChartData}
                        showBg={true}
                        showLegend={true}
                        showTooltip={true}
                        showXaxis={true}
                        showYaxis={true}
                    />
                    <h1 className="text-center text-2xl mt-5 ">Serve Meals Details</h1>
                </div>
            </div>
        </div>
    );
};

export default DashboardHome;