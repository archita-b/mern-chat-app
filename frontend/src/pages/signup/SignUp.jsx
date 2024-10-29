import { useState } from "react";
import { Link } from "react-router-dom";
import GenderCheckBox from "./GenderCheckBox";
import { useSignUp } from "../../hooks/useSignUp";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    userName: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const checkGender = (gender) => {
    setInputs({ ...inputs, gender });
  };

  const { loading, signup } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
        <h1 className="text-3xl font-semibold text-center text-gray-600">
          Sign Up
          <span className="text-blue-700 mx-2">Chat App</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2 text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) =>
                setInputs({ ...inputs, fullName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 text-gray-600">Username</label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
              value={inputs.userName}
              onChange={(e) =>
                setInputs({ ...inputs, userName: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) =>
                setInputs({ ...inputs, password: e.target.value })
              }
            />
          </div>

          <div>
            <label className="label p-2 text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>

          <GenderCheckBox
            onCheckGender={checkGender}
            selectGender={inputs.gender}
          />

          <div>
            <button className="btn btn-block btn-sm mt-2" disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>

          <Link
            to="/login"
            className="text-sm text-gray-800 hover:underline hover:text-blue-700"
          >
            Already have an account? Log In
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
