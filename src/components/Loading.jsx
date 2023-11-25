
import { BounceLoader } from "react-spinners";


// const override: CSSProperties = {
//     display: "block",
//     margin: "0 auto",
//     borderColor: "red",
//   };

const Loading = () => {

    return (
        <div>
            <div className="sweet-loading flex justify-center items-center h-screen ">
                <BounceLoader
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    className="text-amber-600 "
                    color="#FA934C"
                />
            </div>
        </div>
    );
};

export default Loading;