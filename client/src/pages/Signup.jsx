import React, { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if passwords match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      setIsSubmitting(false);
      return;
    }

    // Simulate a signup request
    setTimeout(() => {
      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Password:", password);
      setIsSubmitting(false);
      setErrorMessage(""); // Reset the error message
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div className='flex h-screen justify-center items-center bg-gradient-to-r from-green-500 to-teal-500'>
      <div className='w-full max-w-md bg-white p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300'>
        <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
          Create Your Account
        </h2>
        <form onSubmit={handleSignup} className='space-y-6'>
          <div>
            <label className='block text-sm font-bold text-gray-700'>
              Name
            </label>
            <input
              type='text'
              className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-bold text-gray-700'>
              Email
            </label>
            <input
              type='email'
              className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
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
              className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <label className='block text-sm font-bold text-gray-700'>
              Confirm Password
            </label>
            <input
              type='password'
              className='w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {errorMessage && (
            <p className='text-red-500 text-sm text-center'>{errorMessage}</p>
          )}
          <button
            type='submit'
            className={`w-full py-3 mt-4 rounded-lg font-bold text-white transition-all duration-300 ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-500 hover:bg-green-600"
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <div className='text-center mt-6'>
          <p className='text-sm text-gray-600'>
            Already have an account?{" "}
            <a href='#' className='text-teal-500 hover:underline'>
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
