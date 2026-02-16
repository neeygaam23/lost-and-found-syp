import React, { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../component/Footer";
export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "User",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill all required fields.");
      return;
    }

    if (!formData.email.endsWith("@iic.edu.np")) {
      setError("Email must end with @iic.edu.np (college email required)");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      return;
    }

    setError("");
    setSuccess("Registered successfully!");
    localStorage.setItem("lf_verified", "true");
    localStorage.setItem("lf_user_name", formData.name || "Verified User");
    localStorage.setItem("lf_user_role", formData.role || "User");
    localStorage.setItem("lf_user_email", formData.email);
    localStorage.setItem("lf_user_password", formData.password);
  };

  return (
    <div className="min-h-screen bg-white text-black">
      <div className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center px-6 py-12">
        <div className="border border-black bg-white p-8">
          <div className="mb-8">
            <p className="text-xs uppercase tracking-[0.3em]">Lost & Found</p>
            <h1 className="mt-3 text-3xl font-semibold">Create your account</h1>
            <p className="mt-2 text-sm">
              Register with your college email to access the lost and found dashboard.
            </p>
          </div>

          {error && <p className="mb-3 text-sm text-black">{error}</p>}
          {success && <p className="mb-3 text-sm text-black">{success}</p>}
          {success && (
            <Link
              to="/dashboard"
              className="mb-4 inline-flex w-full items-center justify-center border border-black bg-black py-2 text-sm font-semibold text-white"
            >
              Go to dashboard
            </Link>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full border border-black bg-white p-2 text-sm focus:outline-none"
                  placeholder="Full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Gender</label>
                <select
                  name="gender"
                  className="w-full border border-black bg-white p-2 text-sm focus:outline-none"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Phone Number</label>
                <input
                  type="text"
                  name="phone"
                  className="w-full border border-black bg-white p-2 text-sm focus:outline-none"
                  placeholder="Phone number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Role</label>
                <select
                  name="role"
                  className="w-full border border-black bg-white p-2 text-sm focus:outline-none"
                  value={formData.role}
                  onChange={handleChange}
                >
                  <option value="User">User</option>
                  <option value="Admin">Admin</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">College Email</label>
              <input
                type="email"
                name="email"
                className="w-full border border-black bg-white p-2 text-sm focus:outline-none"
                placeholder="name@iic.edu.np"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  className="w-full border border-black bg-white p-2 text-sm focus:outline-none"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  className="w-full border border-black bg-white p-2 text-sm focus:outline-none"
                  placeholder="Confirm password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full border border-black bg-black py-2 text-sm font-semibold text-white"
            >
              Create account
            </button>

            <p className="text-center text-sm">
              Already have an account?{" "}
              <a href="/login" className="underline">
                Sign in
              </a>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
