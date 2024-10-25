import React from "react";
import GenderCheckBox from "./GenderCheckBox";

const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md bg-gray-400">
        <h1 className="text-3xl font-semibold text-center text-gray-600">
          Sign Up
          <span className="text-blue-700 mx-2">Chat App</span>
        </h1>

        <form>
          <div>
            <label className="label p-2 text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2 text-gray-600">Username</label>
            <input
              type="text"
              placeholder="johndoe"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2 text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <div>
            <label className="label p-2 text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
            />
          </div>

          <GenderCheckBox />

          <a
            href="#"
            className="text-sm text-gray-800 hover:underline hover:text-blue-700"
          >
            Already have an account?
          </a>

          <div>
            <button className="btn btn-block btn-sm mt-2">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
