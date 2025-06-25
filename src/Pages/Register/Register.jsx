import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import SocialLogin from "./SocialLogin/SocialLogin";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const { createUser, user, handleUpdateProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, name, photo, password);

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

    //   create user

    createUser(email, password)
      .then((result) => {
        handleUpdateProfile(name, photo).then((res) => {
          toast.success("User created successfully");

          navigate("/login");

          console.log(result);
          console.log(res);
        });
      })
      .catch((error) => {
        toast.error("Error: " + error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create an Account
        </h2>

        <form onSubmit={handleRegister} className="text-center">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your full name"
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Photo URL
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Paste your profile photo URL"
              required
              className="input input-bordered w-full"
            />
          </div>

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
              placeholder="Create a strong password"
              required
              className="input input-bordered w-full"
            />
            <p className="text-xs text-gray-500 mt-1">
              Must be at least 6 characters, contain an uppercase letter and a
              special character.
            </p>
          </div>

          {/* Submit Button */}
          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn text-white border-none bg-[#95b864] hover:bg-[#95b864] transition"
            >
              Register
            </button>
          </div>

          {/* Social Login */}
        
          <SocialLogin />
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#95b864] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
