import { useState } from "react";
import "./Login.css"; // we'll create this CSS file

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
    // Later: connect to Laravel API
  };

  return (
    <div className="login-page">
      {/* Left Side */}
      <div className="login-left">
        <h2>Log in to your Account</h2>
        <p>Welcome back! Select method to log in:</p>

        <div className="social-login">
          <button className="google">Google</button>
          <button className="facebook">Facebook</button>
        </div>

        <div className="divider">or continue with email</div>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className="options">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <button type="submit" className="login-btn">Log in</button>
        </form>

        <p className="signup">
          Don't have an account? <a href="/auth/register">Create an account</a>
        </p>
      </div>

      {/* Right Side */}
      <div className="login-right">
        <div className="illustration">
<img 
            src="../../assets/pic" 
            alt="Login Illustration" 

        />
        </div>
        <p>Connect with every application. Everything you need in an easily customizable dashboard.</p>
      </div>
    </div>
  );
}
