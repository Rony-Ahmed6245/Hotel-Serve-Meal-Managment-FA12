import { Button, Card } from "keep-react";
import { CheckCircle } from "phosphor-react";
import { Link } from "react-router-dom";
import { CiBookmarkCheck } from "react-icons/ci";
import { SlBadge } from "react-icons/sl";


const MembershipCard = ({ item }) => {
    const { _id, price, badge, keyf1, keyf2, keyf3, keyf4, keyf5, keyf6, keyf7, keyf8 } = item || {};
    return (
        <div>
            <Card className="max-w-xs p-6 bg bg-base-200 hover:shadow-md transition-all ">
                <Card.Container>
                    <Card.Container className="h-[60px] w-[60px]  bg-primary-25 flex items-center justify-center rounded-full">
                       
                    </Card.Container>
                    <Card.Container>
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
                    <Card.Container tag="ul" className="my-4 space-y-">
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
                    </Card.Container>
                    <Card.Container>
                        <Link to={`/payment/${_id}`}>
                            <Button size="md" className="bg text-orange-500" type="outlinePrimary"><CiBookmarkCheck />Checkout</Button>
                        </Link>

                    </Card.Container>
                </Card.Container>
            </Card>
        </div>
    );
};

export default MembershipCard;