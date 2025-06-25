import toast from "react-hot-toast";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import SocialLogin from "../Register/SocialLogin/SocialLogin";
import { useState } from "react";

const Login = () => {
  const { login,resetPassword } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [userEmail,setUserEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    // Password validation

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password must contain at least one capital letter");
      return;
    } else if (!/[\W_]/.test(password)) {
      toast.error("Password must contain at least one special character");
      return;
    }

    //   Login user

    login(email, password)
      .then((result) => {
        toast.success("User logged in successfully");

        console.log(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error("Please Check Your Password or Email Again");
        console.log(error);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleLogin} className="text-center">
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="input input-bordered w-full"
              onChange={(e)=>setUserEmail(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="input input-bordered w-full"
            />
            <div className="text-right mt-1">
              <a className="text-sm text-[#95b864] hover:underline" onClick={()=>resetPassword(userEmail)}>
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white border-none bg-[#95b864] hover:bg-[#95b864] transition"
            >
              Login
            </button>
          </div>

          {/* Social Login */}

          <SocialLogin />
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            className="text-[#95b864] font-semibold hover:underline"
            to="/register"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
