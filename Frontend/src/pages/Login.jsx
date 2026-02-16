import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Using the logo name you provided
import Footer from "../component/Footer";

export default function AuthPage() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const storedEmail = localStorage.getItem("lf_user_email");
    const storedPassword = localStorage.getItem("lf_user_password");

    if (!storedEmail || !storedPassword) {
      setError("No account found. Please register first.");
      return;
    }

    if (formData.userId !== storedEmail || formData.password !== storedPassword) {
      setError("Incorrect credentials. Please try again.");
      return;
    }

    localStorage.setItem("lf_verified", "true");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* Main Container */}
      <div className="relative flex w-full max-w-4xl min-h-[500px] shadow-2xl overflow-hidden rounded-lg">
        
        {/* Left Side: Black Section with Logo */}
        <div className="w-2/5 bg-black flex items-center justify-center p-8">
          <img 
            src={logo} 
            alt="Lost & Found Management System" 
            className="w-full max-w-[280px] object-contain"
          />
        </div>

        {/* Right Side: Arrow Shape Section */}
        <div 
          className="w-3/5 flex flex-col items-center justify-center p-12 transition-colors duration-500 bg-[#D9D9D9]"
          style={{
            clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
          }}
        >
          <div className="w-full max-w-sm pr-16"> {/* Padding right to account for the arrow tip */}
            <h2 className="text-lg font-medium text-gray-800 mb-6 text-left ml-4">
              Login page
            </h2>

            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {error && (
                <p className="ml-4 text-sm text-red-600">
                  {error}
                </p>
              )}

              <input
                type="text"
                name="userId"
                placeholder="User_id"
                className="w-full px-6 py-3 rounded-full bg-[#F8EEEE] border-none focus:ring-2 focus:ring-gray-400 outline-none placeholder-gray-500"
                onChange={handleChange}
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  className="w-full px-6 py-3 pr-12 rounded-full bg-[#F8EEEE] border-none focus:ring-2 focus:ring-gray-400 outline-none placeholder-gray-500"
                  onChange={handleChange}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Login
              </button>

              {/* Footer text within the form area */}
              <div className="mt-4 text-sm text-gray-700 ml-4">
                <p>
                  Haven't yet got credentials? Register at{" "}
                  <Link to="/register" className="text-blue-700 underline">
                    iic.edu.np
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Optional: Footer component if you want it outside the main card */}
      <div className="mt-10 w-full">
        <Footer />
      </div>
    </div>
  );
}