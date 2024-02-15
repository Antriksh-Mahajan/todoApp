// SignInForm.tsx
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { signinWithEmailAndPassword,resetPassword } from "../../firebaseConfig/firebase";


const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await signinWithEmailAndPassword(email, password);
      console.log("User signed in successfully!");
      navigate('/tictactoe'); // Redirect to todo page after successful sign-in
    } catch (error) {
      if(error instanceof Error){
      setError(error.message);
      } // Set error message if sign-in fails
    }
  };
  const handleForgotPassword = async () => {
    try {
      await resetPassword(email);
      console.log("Password reset email sent!");
      // Optionally, display a message to the user
    } catch (error) {
      if(error instanceof Error){
        console.error("Error sending password reset email:", error.message);
      }

    }
  };

  return (
    <div className="w-full flex items-center justify-center h-screen flex-col">
          <h1 className="text-blue-600 pb-10 text-5xl"><span className="text-red-500">O</span>/X Login</h1>
      <form
        onSubmit={handleSignIn}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign In
          </button>
          <button type="button" onClick={handleForgotPassword} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800 focus:outline-none">
            Forgot Password?
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
