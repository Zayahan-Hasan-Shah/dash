import { GoogleLogin } from '@react-oauth/google'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';

const Signup = () => {

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, SetEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [info, setInfo] = useState({})
  const navigate = useNavigate()


  // google signup 
  const handleSuccess = (credentialResponse) => {
    if (credentialResponse?.credential) {
      try {
        // Decode the user information
        const decodedInfo = jwtDecode(credentialResponse.credential);
        const { name, email, picture } = decodedInfo;
        console.log(name[1])
        // Log the decoded info
        console.log("name", name);
        console.log("email", email);
        console.log("picture", picture);
  
        // Set the info in React state
        setInfo({ name, email, picture });

        
  
        // Store user info directly in localStorage
        localStorage.setItem('google-user', JSON.stringify({ name, email, picture }));
  
        // Navigate to the home page
        navigate('/dashboard/');
      } catch (error) {
        console.error("error decoding error", error);
      }
    }
  };
  
  const handleError = () => {
    console.log("Login Failed");
  };
  

  return (
    <>
      <div id="layoutAuthentication" className='h-screen bg-[blue]'>
        <div id="layoutAuthentication_content">
          <main>
            <div className="container-xl px-4">
              <div className="flex direction-row justify-center">
                <div className="xl:w-1/2 h-[800px] pr-4 pl-4 lg:w-3/4 pr-4 pl-4">
                  {/* Social registration form*/}
                  <div className="relative mt-[60px] flex flex-col h-[650px] min-w-0 w-90 rounded break-words border bg-white border-1 border-gray-300 my-5">
                    <div className="flex-auto p-6 p-12 text-center">
                      <div className="mb-2 font-medium leading-tight text-2xl fw-light mb-3">Create an Account</div>
                      <div className="small text-muted mb-2">Sign in using...</div>
                      {/* Social registration links*/}

                      <GoogleLogin onSuccess={handleSuccess}
                        onError={handleError}
                      />

                    </div>
                    <hr className="my-0" />
                    <div className="flex-auto p-6 p-12">
                      <div className="text-center small text-muted mb-4">...or enter your information below.</div>
                      {/* Login form*/}
                      <form>
                        {/* Form Row*/}
                        <div className="flex flex-wrap  gx-3">
                          <div className="md:w-1/2 pr-4 pl-4">
                            {/* Form Group (first name)*/}
                            <div className="mb-3">
                              <label className="text-gray-600 small" htmlFor="firstNameExample">First name</label>
                              <input className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded form-control-solid" value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" placeholder aria-label="First Name" aria-describedby="firstNameExample" />
                            </div>
                          </div>
                          <div className="md:w-1/2 pr-4 pl-4">
                            {/* Form Group (last name)*/}
                            <div className="mb-3">
                              <label className="text-gray-600 small" htmlFor="lastNameExample">Last name</label>
                              <input className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded form-control-solid" value={lastName} onChange={(e) => setLastName(e.target.value)} type="text" placeholder aria-label="Last Name" aria-describedby="lastNameExample" />
                            </div>
                          </div>
                        </div>
                        {/* Form Group (email address)*/}
                        <div className="mb-3 pl-4 pr-4">
                          <label className="text-gray-600 small" htmlFor="emailExample">Email address</label>
                          <input className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded form-control-solid" value={email} onChange={(e) => SetEmail(e.target.value)} type="text" placeholder aria-label="Email Address" aria-describedby="emailExample" />
                        </div>
                        {/* Form Row*/}
                        <div className="flex flex-wrap  gx-3">
                          <div className="md:w-1/2 pr-4 pl-4">
                            {/* Form Group (choose password)*/}
                            <div className="mb-3">
                              <label className="text-gray-600 small" htmlFor="passwordExample">Password</label>
                              <input className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded form-control-solid" value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder aria-label="Password" aria-describedby="passwordExample" />
                            </div>
                          </div>
                          <div className="md:w-1/2 pr-4 pl-4">
                            {/* Form Group (confirm password)*/}
                            <div className="mb-3">
                              <label className="text-gray-600 small" htmlFor="confirmPasswordExample">Confirm Password</label>
                              <input className="block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded form-control-solid" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.confirmPassword)} type="password" placeholder aria-label="Confirm Password" aria-describedby="confirmPasswordExample" />
                            </div>
                          </div>
                        </div>
                        {/* Form Group (form submission)*/}
                        <div className="flex items-center justify-between pl-4 pr-4">
                          <div className="relative block mb-2 ">
                            <input className="absolute mt-1 " id="checkTerms" type="checkbox" defaultValue />
                            <label className="text-gray-700 pl-6 mb-0" htmlFor="checkTerms">
                              I accept the
                              <a href="auth-register-social.html#!">terms &amp; conditions</a>
                              .
                            </label>
                          </div>
                          <a className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-blue-600 text-white hover:bg-blue-600" href="auth-login-social.html">Create Account</a>
                        </div>
                      </form>
                    </div>
                    <hr className="my-0" />
                    <div className="flex-auto p-6 px-5 py-4">
                      <div className="small text-center">
                        Have an account?
                        <Link to="/" className='text-blue-500'> Sign in!</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        {/* <div id="layoutAuthentication_footer">
          <footer className="footer-admin mt-auto footer-dark">
            <div className="container-xl px-4">
              <div className="row">
                <div className="col-md-6 small">Copyright © Your Website 2021</div>
                <div className="col-md-6 text-md-end small">
                  <a href="auth-register-social.html#!">Privacy Policy</a>
                  ·
                  <a href="auth-register-social.html#!">Terms &amp; Conditions</a>
                </div>
              </div>
            </div>
          </footer>
        </div> */}
      </div>
    </>

  )
}

export default Signup