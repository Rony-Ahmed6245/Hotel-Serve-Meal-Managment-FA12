
import { Avatar, Card } from "keep-react";
import { SlBadge } from "react-icons/sl";
import banner from "../assets/banner.png"
import { FcLike } from "react-icons/fc";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";




const UserProfile = () => {
    const { user } = useContext(AuthContext)
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
                user?user.displayName : 'MR. XYZ'
            }</Card.Title>
          <Card.Title className="   text-md font-semibold flex justify-center items-center gap-1"><SlBadge />Bronze</Card.Title>
        </Card.Container>
        <Card.Container className="flex w-full justify-between border-t border-t-metal-50 px-5 py-3">
          <Card.Container className="text-center">
            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
              Request meal
            </Card.Title>
            <Card.Title className="!text-body-1 !font-semibold text-metal-800">01</Card.Title>
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
              Review meal
            </Card.Title>
            <Card.Title className="!text-body-1 !font-semibold text-metal-800">01</Card.Title>
          </Card.Container>
          <Card.Container className="text-center">
            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
            USER ID: {user?.uid}
            </Card.Title>
            <Card.Title className="text-body-5 !font-normal text-metal-400 md:text-body-5 md:!font-medium">
            USER Email: {user?.email}
            </Card.Title>
            
          </Card.Container>
        </Card.Container>
      </Card.Container>
    </Card>

        </div>
    );
};

export default UserProfile;