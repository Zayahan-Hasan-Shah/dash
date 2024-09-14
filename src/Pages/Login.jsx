import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(email, password)
        if(email && password){
            navigate("/dashboard")
        }
    }
  return (
    <>
    <div className=" mx-auto h-screen bg-[blue]">
                <div className=" flex justify-center">
                    <div className="w-full max-w-md">
                        {/* Basic login form */}
                        <div className="bg-white mt-[60px]  shadow-lg rounded-lg mt-5">
                            <div className=" px-7 py-4 bg-[#e0e5ec] rounded-t-lg">
                                <h3 className="font-metroplois text-[28px]">Login</h3>
                            </div>
                            <div className="px-8 py-6">
                                {/* Login form */}
                                <form onSubmit={handleSubmit}>
                                    {/* Form Group (email address) */}
                                    <div className="mb-4">
                                        <label className="block text-sm mb-1 font-metroplois text-[18px] mb-2" htmlFor="inputEmailAddress">Email</label>
                                        <input
                                            className="form-input w-full border-[0.5px] p-2 rounded-md focus:border-[5px] outline-[#e3ddfa]"
                                            id="inputEmailAddress"
                                            type="email"
                                            placeholder="Enter email address"
                                            value={email}
                                            onChange={(e)=> setEmail(e.target.value)}
                                        />
                                    </div>
                                    {/* Form Group (password) */}
                                    <div className="mb-4">
                                        <label className="block text-sm mb-1 font-metroplois text-[18px] mb-2" htmlFor="inputPassword">Password</label>
                                        <input
                                            className="form-input w-full border-[0.5px] p-2 rounded-md focus:border-[5px] outline-[#e3ddfa]"
                                            id="inputPassword"
                                            type="password"
                                            placeholder="Enter password"
                                            value={password}
                                            onChange={(e)=> setPassword(e.target.value)}
                                        />
                                    </div>
                                    {/* Form Group (remember password checkbox) */}
                                    <div className="mb-4">
                                        <div className="flex items-center">
                                            <input
                                                className="form-checkbox"
                                                id="rememberPasswordCheck"
                                                type="checkbox"
                                            />
                                            <label className="ml-2" htmlFor="rememberPasswordCheck">Remember password</label>
                                        </div>
                                    </div>
                                    {/* Form Group (login box) */}
                                    <div className="flex items-center justify-between mt-4 mb-0">
                                        <a className="text-sm text-blue-500 hover:underline" href="auth-password-basic.html">Forgot Password?</a>
                                        <a className="btn btn-primary bg-blue-500 text-white py-2 px-4 rounded" href="dashboard-1.html">Login</a>
                                    </div>
                                </form>
                            </div>
                            <div className="text-center py-4">
                                <div className="text-sm">
                                    <Link className="text-blue-500 hover:text-underline" to="/signup">Need an account? Sign up!</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Login