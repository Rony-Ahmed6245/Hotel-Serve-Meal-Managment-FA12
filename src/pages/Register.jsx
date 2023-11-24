


import { useContext, useState } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

// import img3 from "../../../assets/banner-detail.jpg"
// import img1 from "../../../assets/login.svg"




const Register = () => {
   
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState()
    const [passwordError, setSetPasswordError] = useState()
    const [upperCaseErr, setUpperCaseErr] = useState()
    const [success, setSuccess] = useState('')



    const handelRegister = (e) => {
        e.preventDefault()
        // reset error 
        setRegisterError('');
        setSuccess('');
        setSetPasswordError('')
        setUpperCaseErr('')

        const displayName = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, email, password);
        if (password.length < 6) {
            // Password is too short
            console.log('Password at least 6 characters');
            setSetPasswordError('Password at least 6 characters');
            return;
        } else if ((/^(?![A-Z])[^!@#$%^&*()_+{}\[\]:;<>,.?~\\\/]*$/.test(password))) {
            setUpperCaseErr(' At least one uppercase(A-Z) and Special Character');
            return;
        }


        createUser(email, password, displayName)
            .then(result => {
                // console.log(result);
                setSuccess('User Created Successfully')
                return
            })
            .catch(error => {
                // setRegisterError(error.message);
                // setRegisterError(error.message)
                if (error.message) {
                    setRegisterError('Already Register')
                    return
                }

            })
    }



    return (
        <div>
            <div>
                {/* dynamic title  */}
             
                <div className=" max-w-7xl mx-auto">
                    {/* <img src={img3} alt="" /> */}
                    <h1 className="text-4xl font-extrabold text-center my-8 text-[#0DBC95]">REGISTER</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-4 justify-center items-center">

                        <div className=" rounded-lg">
                            <h1 className="text-4xl font-extrabold text-center my-8 text-[#0DBC95]">Please Register & Find jobs</h1>
                            <form onSubmit={handelRegister} className="card-body px-4 ">
                                <div className="form-control">
                                    <input type="text" placeholder="Name" name='name' className="w-full py-2 px-4  border-b-2 border-[#0DBC95] rounded outline-none" required />
                                </div>
                                <div className="form-control">
                                    <input type="email" placeholder="Email" name='email' className="w-full py-2 px-4  border-b-2 border-[#0DBC95] rounded outline-none my-4" required />
                                </div>
                                <div className="form-control">
                                    <input type="text" placeholder="Photo URL" name='Photo' className="w-full py-2 px-4  border-b-2 border-[#0DBC95] rounded outline-none my-4" />
                                </div>
                                <div className="form-control">
                                    <input type="password" name='password' placeholder="Password" className="w-full py-2 px-4  border-b-2 border-[#0DBC95] rounded outline-none" required />
                                </div>
                                <h1 className="text-sm p-2">Forget Password</h1>
                                {/* Display the error message */}
                                {registerError && (
                                    <div className="text-red-500 font-bold text-center my-2">
                                        {registerError}
                                    </div>
                                )}
                                {upperCaseErr && (
                                    <div className="text-red-500 font-bold text-center my-2">
                                        {upperCaseErr}
                                    </div>
                                )}
                                {passwordError && (
                                    <div className="text-red-500 font-bold text-center my-2">
                                        {passwordError}
                                    </div>
                                )}
                                {success && (
                                    <div className="text-green-500 font-bold text-center my-2">
                                        {success}
                                    </div>
                                )}
                                <div className="flex justify-center">
                                    <button className="py-2 px-20 hover:bg-[#0DBC95] border-[#0DBC95] border-2 outline-none transition rounded-full  hover:text-white">Register</button>
                                </div>

                            </form>
                            <h2 className="text-center text-lg font-semibold">Already have an Account ? Please <Link to='/login' className="text-[#0DBC95] underline">Login</Link> </h2>


                        </div>
                        <div className="flex justify-center">
                            {/* <img src={img1} className=" " /> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <ToastContainer /> */}
        </div>
    );
};

export default Register;