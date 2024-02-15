// SignupForm.tsx
import React, { useState } from "react";
import { signupWithEmailAndPassword } from "../../firebaseConfig/firebase";
import { useNavigate } from 'react-router-dom';

const Signup: React.FC = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signupWithEmailAndPassword(email, password);
      console.log("User signed up successfully!");
      navigate('/tictactoe');
      // Optionally, redirect the user to another page or display a success message
    } catch (error) {
      if (error instanceof Error) {
        console.error("Error signing up:", error.message);
      }
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center h-screen">
        <h1 className="text-blue-600 pb-10 text-5xl"><span className="text-red-500">X</span>/O SignUp</h1>
        
      <form
        onSubmit={handleSignup}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Username"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(event) => setPassword(event.target.value)}
          />

        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={handleSignup}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs"></p>
    </div>

  );
};

export default Signup;