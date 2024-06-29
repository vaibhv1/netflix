import Header from "./Header";
import React from "react";
import { useState } from "react";
export const Login = () => {
  const [isSignIn, setisSignInForm] = useState(true);
  const toggleIsSignIn = () => {
    setisSignInForm(!isSignIn);
  };
  return (
    <React.Fragment className="absolute">
      <Header />
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/a56dc29b-a0ec-4f6f-85fb-50df0680f80f/2f8ae902-8efe-49bb-9a91-51b6fcc8bf46/IN-en-20240617-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
      />
      <div>
        <img
          className="relative px-8 py-2 w-60 bg-gradient-to-tb from-red"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-90">
        <form className="w-3/12 p-12 text-white bg-black">
          <h1 className="m-2 text-2xl font-black px-auto">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignIn && (
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 my-2 bg-gray-700 rounded-lg"
            />
          )}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full p-2 my-2 bg-gray-700 rounded-lg"
          />
          <input
            type="password"
            placeholder="Enter Password"
            className="w-full p-2 my-2 bg-gray-700 rounded-lg"
          />
          <button className="w-full p-4 my-4 bg-red-600 rounded-lg">
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p
            className="p-4 cursor-pointer decoration-solid text-color-hover"
            onClick={toggleIsSignIn}
          >
            {isSignIn ? "New User? Sign Up" : "Sign In"}
          </p>
        </form>
      </div>
    </React.Fragment>
  );
};
