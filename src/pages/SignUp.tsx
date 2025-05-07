import { FormEvent, useState } from "react";
import Input from "../components/Input";
import ecofyLogo from "../assets/ecofyLogo.jpg";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e: FormEvent) => {
    e.preventDefault();

    if (email && password) {
      if (password !== confirmPassword) {
        setError("Your Passwords are not matching");
        return;
      }

      try {
        const response = await fetch("http://localhost:5000/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ name, email, password })
        });

        if (response.ok) {
          localStorage.setItem("login", "true");
          window.location.href = "/"; // Redirect to home if signup is successful
        } else {
          const data = await response.json();
          
          if (data.message === "User already exists") {
            setError("User already exists");
            setTimeout(() => {
              window.location.href = "/login";
              
            }, 2000);
          } else {
            setError(data.message || "Signup failed");
          }
        }
      } catch (err) {
        setError("Server error, try again.");
      }
    } else {
      setError("Please enter your name, email and password.");
    }
  };

  return (
    <div className="flex">
      <div className="w-full lg:w-1/2 h-screen">
        <form onSubmit={handleSignUp} className="container  p-8 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-20 w-auto"
              src={ecofyLogo}
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
            Why Buy from ECOFY?
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
