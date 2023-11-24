
import { Carousel } from "keep-react";
import img1 from '../assets/ba1.webp'
import img2 from '../assets/ba2.webp'
import img3 from '../assets/ba3.webp'
import img4 from '../assets/ba4.webp'
import img5 from '../assets/ba5.webp'
import img6 from '../assets/ba6.webp'
import Title from "./Title";

// Import Swiper styles




const Slider = () => {
    return (
        <div className="max-w-7xl mx-auto my-20">
            <Title heading={'Daily Meal'}></Title>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    


                </Carousel>
                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    
                </Carousel>
                <Carousel
                    showControls={false}
                    indicatorsType="ring"
                    indicatorsTypeColors="slate"
                >
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    
                </Carousel>
            </div>
        </div>
    );
};

export default Slider;