import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate a login request
    setTimeout(() => {
      console.log("Email:", email);
      console.log("Password:", password);
      setIsSubmitting(false);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Welcome Back!
        </h2>
        <form onSubmit={handleLogin} className='space-y-6'>
          <div>
            <label className='block text-sm font-bold text-gray-700'>
              Email
            </label>
            <input
              type='email'
              className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-bold text-gray-700'>
              Password
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type='submit'
            className={`w-full py-3 mt-4 rounded-lg font-bold text-white transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-500 hover:bg-blue-600"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className='text-center mt-6'>
          <a href='#' className='text-blue-500 hover:underline'>
            Forgot Password?
          </a>
        </div>
        <div className='text-center mt-4'>
          <p className='text-sm text-gray-600'>
            Don’t have an account?{" "}
            <a href='#' className='text-purple-500 hover:underline'>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
