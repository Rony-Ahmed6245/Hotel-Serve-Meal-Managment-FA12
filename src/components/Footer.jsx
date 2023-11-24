import { PiBowlFoodLight } from "react-icons/pi";

const Footer = () => {
    return (<>
    
        <div className="max-w-7xl mx-auto">
            <footer className="footer p-10 text-base-content">
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Breakfast</a>
                    <a className="link link-hover">Lunch</a>
                    <a className="link link-hover">Dinner</a>
                    
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <form>
                    <header className="footer-title">
                        <div className="flex px-2 mx-2 text-2xl ">
                            <PiBowlFoodLight className="text-4xl text-orange-600" />
                            Serve <span className="text-4xl font-bold ">M</span>eaL</div>
                    </header>
                    <fieldset className="form-control w-80">
                       
                        <div className="join">
                            <input type="text" placeholder="xyz@gmail.com" className="input input-bordered join-item" />
                            <button className="btn bg-orange-600 text-white join-item">Request meal</button>
                        </div>
                    </fieldset>
                </form>
            </footer>
           
           
        </div>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p>Copyright © 2023 - All right reserved by 
                            Serve <span className="text-4xl text-orange-600 font-bold ">M</span>eaL Industries Ltd</p>
                </aside>
            </footer>
    </>
    );
};

export default Footer;