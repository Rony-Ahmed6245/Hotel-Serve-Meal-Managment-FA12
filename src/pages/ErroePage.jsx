import { Link } from 'react-router-dom';
import img from '../assets/depositphotos_80897014-stock-photo-page-not-found.jpg'

const ErroePage = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">404 Page not found</h1>
                    
                        <Link to={'/'} className="btn text-white bg-orange-600">Get Started</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErroePage;