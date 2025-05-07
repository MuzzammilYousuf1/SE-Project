import { FormEvent, useState } from "react";
import Input from "../components/Input";
import ecofyLogo from "../assets/ecofyLogo.jpg";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    if (email && password) {
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ email, password })
        });

        if (response.ok) {
          localStorage.setItem("login", "true");
          window.location.href = "/";
        } else {
          const data = await response.json();
          if (data.message === "User not found") {
            setError("User not found");
            setTimeout(() => {
              window.location.href = "/signup";
              
            }, 2000);
          } else {
            setError(data.message || "Login failed");
          }
        }
      } catch (err) {
        setError("Server error, try again.");
      }
    } else {
      setError("Please enter your email and password.");
    }
  };

  return (
    <div>
      <div className="h-screen px-4">
        <form onSubmit={handleLogin} className="container  p-6 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-20 w-auto"
              src={ecofyLogo}
              alt="Your Company"
            />
          </div>
          <h2 className="text-3xl font-semibold my-4 text-center">Welcome Back! <br /> Sign in to your account!</h2>
          <div className="container">

            <Input
              type="email"
              label="Email Address"
              value={email}
              name="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              error={error}
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

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
            >
                Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
