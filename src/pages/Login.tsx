import { FormEvent, useState } from "react";
import Input from "../components/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: FormEvent) => {
    e.preventDefault()
    if (email && password) {
      localStorage.setItem('login', 'true')
      window.location.href = '/'
    } else {
      setError('Incorrect Email')
    }
  }
  
  return (
    <div>
      <div className="h-screen px-4">
        <form onSubmit={handleLogin} className="container  p-6 bg-white">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              className="mx-auto h-10 w-auto"
              src="https://psdc-react-ecommerce-app.netlify.app/react.svg"
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
