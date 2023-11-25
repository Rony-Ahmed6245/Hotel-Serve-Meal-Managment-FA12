import { Avatar, Card } from "keep-react";
import banner from "../assets/ba30.webp"
import { FcLike } from "react-icons/fc";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
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


const AdminProfile = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div className="p-10">
            <Card
                imgSrc={banner}
                imgSize="md"
                className="">
                <Card.Container className="absolute right-3.5 top-3.5 flex  cursor-pointer items-center justify-center rounded-full text-2xl">
                    <FcLike />
                </Card.Container>
                <Card.Container className="flex flex-col items-start ml-10 justify-center">
                    <Card.Container className="absolute top-32  rounded-full ring-4 ring-white ring-offset-0">

                        <Avatar size="2xl" shape="circle" img={user?.photoURL} />
                    </Card.Container>
                    <Card.Container className="mb-3 mt-10 text-center">
                        <Card.Title className="   text-2xl"> {
                            user ? user.displayName : 'MR. XYZ'
                        }</Card.Title>
                        <Card.Title className="   text-sm text-orange-600 font-semibold flex justify-center items-center gap-1"><MdOutlineAdminPanelSettings />Admin</Card.Title>
                    </Card.Container>
                 
                </Card.Container>
            </Card>
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

export default AdminProfile;