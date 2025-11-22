import { useState } from "react";
import illustration from "../../assets/register.jpg"; // your register illustration

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    role: "",
    massar: "",
    speciality: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Register Data:", formData);
    // Later: send to API
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Centered Card */}
      <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-5xl h-[600px]">
        
        {/* Left Form */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">Create Account</h2>
          <p className="text-gray-600 mb-6">
            Join the platform and start managing your dashboard.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="flex-1 p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
            </select>

            {formData.role === "student" && (
              <input
                type="text"
                name="massar"
                placeholder="Massar Code"
                value={formData.massar}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            {formData.role === "teacher" && (
              <input
                type="text"
                name="speciality"
                placeholder="Speciality"
                value={formData.speciality}
                onChange={handleChange}
                required
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            )}

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Create Account
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-500">
            Already have an account?{" "}
            <a href="/auth/login" className="text-blue-600 hover:underline">
              Log in
            </a>
          </p>
        </div>

        {/* Right Illustration */}
        <div className="flex-1">
          <img
            src={illustration}
            alt="Register Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
