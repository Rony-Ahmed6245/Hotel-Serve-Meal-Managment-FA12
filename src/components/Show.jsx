import img from "../assets/ba14.webp"
import img1 from "../assets/ba15.webp"
import img2 from "../assets/ba16.webp"
import img3 from "../assets/ba17.webp"
import img4 from "../assets/ba18.webp"
import img5 from "../assets/ba19.webp"
import img6 from "../assets/ba21.webp"
import img7 from "../assets/ba22.webp"

const Show = () => {
    return (
        <div className="-mt-24 mb-5 mx-auto max-w-7xl ">
         
            <div direction="" >
                <div className="hidden xl:flex ">
                    <img className="w-40 hover:shadow transition-all " src={img}  />
                    <img className="w-40 hover:shadow transition-all " src={img1} alt="" />
                    <img className="w-40 hover:shadow transition-all " src={img2} alt="" />
                    <img className="w-40 hover:shadow transition-all " src={img3} alt="" />
                    <img className="w-40 hover:shadow transition-all " src={img4} alt="" />
                    <img className="w-40 hover:shadow transition-all " src={img5} alt="" />
                    <img className="w-40 hover:shadow transition-all " src={img6} alt="" />
                    <img className="w-40 hover:shadow transition-all " src={img7} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Show;