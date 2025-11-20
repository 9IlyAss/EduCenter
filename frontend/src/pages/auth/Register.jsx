import { useState } from "react";
// import "./Register.css"; // create this like Login.css

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

    // Later: send to Laravel API
    // axios.post("/api/register", formData)
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <h2>Create your Account</h2>
        <p>Join the platform and start using your dashboard.</p>

        <form onSubmit={handleSubmit}>
          <div className="row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {/* Role Selector */}
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select role</option>
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>

          {/* If Student → show Massar */}
          {formData.role === "student" && (
            <input
              type="text"
              name="massar"
              placeholder="Massar Code"
              value={formData.massar}
              onChange={handleChange}
              required
            />
          )}

          {/* If Teacher → show Speciality */}
          {formData.role === "teacher" && (
            <input
              type="text"
              name="speciality"
              placeholder="Speciality"
              value={formData.speciality}
              onChange={handleChange}
              required
            />
          )}

          <button type="submit" className="register-btn">
            Create Account
          </button>
        </form>

        {/* <p className="login-link">
          Already have an account? <a href="/auth/login">Log in</a>
        </p> */}
      </div>

      {/* Right Side (optional) */}
      <div className="register-right">
        <div className="illustration">
          <img src="../../assets/pic" alt="Register Illustration" />
        </div>
        <p>Your journey starts here. Manage everything from one dashboard.</p>
      </div>
    </div>
  );
}
