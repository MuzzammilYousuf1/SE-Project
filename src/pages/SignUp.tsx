import { FormEvent, useState } from "react";
import Input from "../components/Input";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = (e: FormEvent) => {
    e.preventDefault()
    if (email && password) {
      if (!(password === confirmPassword)) {
       setError('Your Passwords are not matching') 
      }
      else{
        localStorage.setItem('login', 'true')
      window.location.href = '/'
      }

    } else {
      setError('Please enter your name, email and password.')
    }
  }
  
  return (
    <div className="flex">
      <div className="w-full lg:w-1/2 h-screen">
        <form onSubmit={handleSignUp} className="container  p-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-10 w-auto"
              src="https://psdc-react-ecommerce-app.netlify.app/react.svg"
              alt="Your Company"
            />
          </div>
          <h2 className="text-3xl font-semibold my-4 text-center">Sign Up For Your Account</h2>
          <div className="container">
            <Input
              type="text"
              label="Your Name"
              value={name}
              name="name"
              placeholder="Your Name"
              onChange={(e) => setName(e.target.value)}
              // error={error}
              
            />

            <Input
              type="email"
              label="Email Address"
              value={email}
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              // error={error}
            />

            <Input
              type="password"
              label="Password"
              value={password}
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              error={error}
            />

            <Input
              type="password"
              label="Confirm Password"
              value={confirmPassword}
              name="confirmPassword"
              placeholder="Confirm your password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              error={error}
            />

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="hidden items-center justify-center bg-indigo-100 lg:flex lg:w-1/2">
        <div className="p-8 text-center">
          <h3 className="mb-6 text-2xl font-bold text-gray-900">
            Why Join Us?
          </h3>
          <p className="mb-4 text-lg text-gray-700">
            Experience the best ecommerce app for all your needs.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Get exclusive discounts and offers on your favorite products.
          </p>
          <p className="mb-4 text-lg text-gray-700">
            Fast and secure checkout process tailored for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
