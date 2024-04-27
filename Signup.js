import React, { useState } from 'react'
import signupbutton from '../Pictures_for_project/signupbutton.gif';
import { BiShow, BiHide } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';


const Signup = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmpassword: "",

    });
    console.log(data)
    const handleshowPassword = () => {
        setShowPassword(preve => !preve)
    }
    const [Showconfirmpassword, setShowconfirmpassword] = useState(false)
    const handleShowconfirmpassword = () => {
        setShowconfirmpassword(preve => !preve)
    }
    const handleonChange = (e) => {
        const { name, value } = e.target;
        setData((preve) => {
            return {
                ...preve,
                [name]: value,
            };
        });
    };
    console.log(process.env.REACT_APP_SERVER_DOMIN)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, email, password, confirmpassword } = data;
        if (firstName && email && password && confirmpassword) {
            if (password === confirmpassword) {

                const fetchData = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/signup`, {
                    method: "POST",
                    headers: {
                        "content-type": "application/json"
                    },
                    body: JSON.stringify(data)
                })

                const dataRes = await fetchData.json()
                console.log(dataRes)

                //alert(dataRes.message);
                toast(dataRes.message)
                if (dataRes.alert) {
                   navigate("/login");
                 }

            } else {
                alert("password and confirm password not equal");
            }
        } else {
            alert("Please Enter required fields");
        }
    };
    return (
        <div className='p-2 md:p-3'>
            <div className='w-full max-w-sm bg-white m-auto flex  flex-col p-3'>
                {/*<h1 className='text-center'>Sign Up</h1>*/}
                <div className='overflow-hidden  drop-shadow-md shadow-md m-auto'>
                    <img src={signupbutton} className="w-full" />
                </div>
                <form className='w-full py-6 flex flex-col' onSubmit={handleSubmit}>
                    <label htmlFor='firstName'>First Name</label>
                    <input
                        type={"text"}
                        id="firstName"
                        name='firstName'
                        className=' mt-1 mb-2 w-full bg-slate-200 px-2 py-1  rounded focus-within:outline-blue-300'
                        value={data.firstName}
                        onChange={handleonChange}
                    />

                    <label htmlFor='lastName'>Last Name</label>
                    <input
                        type={"text"}
                        id="lastName"
                        name='lastName'
                        className=' mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 '
                        value={data.lastName}
                        onChange={handleonChange}
                    />

                    <label htmlFor='email'>Email</label>
                    <input
                        type={"email"}
                        id="email"
                        name='email'
                        className=' mt-1 mb-2 w-full bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300 '
                        value={data.email}
                        onChange={handleonChange}
                    />

                    <label htmlFor='password'>Password</label>
                    <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 focus-within:outline rounded focus-within:outline-blue-300'>
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name='password'
                            className=' w-full border-none outline-none  '
                            value={data.password}
                            onChange={handleonChange}
                        />
                        <span className='flex text-xl cursor-pointer' onClick={handleshowPassword}>{showPassword ? <BiShow /> : <BiHide />}</span>
                    </div>
                    <label htmlFor='confirmpassword'>Confirm Password</label>
                    <div className='flex px-2 py-1 mt-1 mb-2 bg-slate-200 focus-within:outline rounded focus-within:outline-blue-300'>
                        <input
                            type={Showconfirmpassword ? "text" : "password"}
                            id="confirmpassword" name='confirmpassword'
                            className=' w-full border-none outline-none  '
                            value={data.confirmpassword}
                            onChange={handleonChange}
                        />
                        <span className='flex text-xl cursor-pointer' onClick={handleShowconfirmpassword}>{Showconfirmpassword ? <BiShow /> : <BiHide />}</span>
                    </div>

                    <button className=" w-full max-w-[120px] m-auto  bg-red-400 hover:bg-red-700 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-2">Sign up</button>
                </form>
                <p className='text-left text-sm  '>Already have account ? <Link to={"/login"} className="text-red-500 underline">Login</Link></p>

            </div>
        </div>
    )
}

export default Signup