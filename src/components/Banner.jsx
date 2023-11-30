
import { SearchBar } from 'keep-react';
import banner from '../assets/banner.png';
import { ArrowRight, MagnifyingGlass } from "phosphor-react";

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen mb-10" style={{ backgroundImage: `url(${banner})` }}>
                <div className=""></div>
                <div className=" text-left text-neutral-content px-4 pt-2 ">
                    <div className="md:max-w-7xl md:w-4/12 w-full">
                        <h1 className="mb-5 text-5xl font-bold uppercase">serve meal</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <SearchBar
                            placeholder="Search Meal"
                            addon={<MagnifyingGlass size={20} color="#5E718D" />}
                            addonPosition="left"
                            icon={<ArrowRight size={20} color="#5E718D" />}
                            iconPosition="right"
                            
                        >
                         
                        </SearchBar>
                      
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
