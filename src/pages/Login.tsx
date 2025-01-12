import React from "react";
import Logo from '../assets/LoginPage/Logo.png';
import ll from '../assets/LoginPage/ll.png';
import L2 from '../assets/LoginPage/L2.png';
import L3 from '../assets/LoginPage/L3.png';
import { useNavigate } from "react-router-dom";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission behavior
    navigate('/admin/manageuser'); // Redirect to the ManageUser page
  };
  return (///////
    <div
      className="flex items-center justify-center min-h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${ll})` }}
    >
  

      {/* Inner Content (scaled down further) */}
      <div className="transform scale-75 md:scale-85 flex flex-col items-center w-full">
        {/* Slogan Section */}
        <div className="w-full flex justify-center mb-5 px-4">
          <div className="mx-auto text-[#F7C042] text-3xl md:text-[64px] font-bold text-center">
            "कडा अनुशासन, स्तरीय शिक्षा"
          </div>
        </div>

        {/* Login Card */}
        <div className="bg-[#307AA8] shadow-2xl mt-16 py-10 px-6 md:px-[69px] rounded-lg w-full max-w-md md:max-w-[610px]">
          <div className="text-center flex justify-start items-center gap-6 md:gap-[44px]">
            <img src={Logo} alt="Logo" className="h-[80px] w-[80px] md:h-[130px] md:w-[133px]" />
            <h2 className="text-2xl md:text-4xl font-bold text-white">Sign in</h2>
          </div>

          {/* Form Section */}
          <form className="mt-6"onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-lg md:text-[22px] text-white mb-1">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  className="block w-full h-[50px] md:h-[70px] pl-[60px] pr-4 text-lg text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Username"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-[24px] w-[24px] md:h-[30px] md:w-[30px]">
                  <img src={L3} alt="Username Icon" />
                </div>
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-lg md:text-[22px] text-white mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  className="block w-full h-[50px] md:h-[70px] pl-[60px] pr-4 text-lg text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  placeholder="**********"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex items-center justify-center h-[24px] w-[24px] md:h-[30px] md:w-[30px]">
                  <img src={L2} alt="Password Icon" />
                </div>
              </div>
            </div>

            {/* Forgot Password Link */}
            <div className="text-right mb-4">
              <a href="/forgot-password" className="text-lg md:text-[24px] text-[#F7C042] underline">
                Forgot Password?
              </a>
            </div>

            {/* Log In Button */}
            <div className="w-full flex justify-center">
             
            <button
                type="submit"
                className="w-full md:w-[270px] h-[50px] md:h-[70px] text-[#3279A5] bg-white rounded-lg text-lg md:text-[24px] font-bold"
              >
                Log In
              </button> 
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
