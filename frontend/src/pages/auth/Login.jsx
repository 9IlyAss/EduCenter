import { useState } from "react";
import illustration from "../../assets/login.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ email, password });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* Centered Square */}
      <div className="flex bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-4xl h-[500px]">
        
        {/* Left Form */}
        <div className="flex-1 p-12 flex flex-col justify-center">
          <h2 className="text-3xl font-semibold mb-2">Sign in</h2>
          <p className="text-gray-600 mb-6">
            Don't have an account?{" "}
            <a href="/auth/register" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email or username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <div className="flex justify-between items-center text-sm text-gray-500">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Log in
            </button>
          </form>

          <div className="flex justify-center gap-4 mt-4">
            <button className="py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 flex-1">
              Facebook
            </button>
            <button className="py-2 px-4 border border-gray-300 rounded hover:bg-gray-100 flex-1">
              Google
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <img
            src={illustration}
            alt="Illustration"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
