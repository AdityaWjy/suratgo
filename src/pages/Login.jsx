import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function login() {
  const navigate = useNavigate();

  // data
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");

  // handle login method
  const handleLogin = (e) => {
    e.preventDefault();

    if (fullName === "adityawjy" && password === "123") {
      // handle succes login

      // token
      localStorage.setItem("authToken", "jwt_token_12345");
      // fullname
      localStorage.setItem("fullname", fullName);

      navigate("/");
    } else {
      alert("Email atau password salah");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <div className="w-full max-w-sm rounded-xl bg-gray-800 p-6 shadow-lg mx-4">
        <div className="mb-6 flex items-center justify-center gap-4">
          <img src="/icon.svg" alt="Logo" className="w-24" />
          <h1 className="text-4xl font-bold tracking-wider text-white">
            SURGO
          </h1>
        </div>

        {/* form */}
        <form onSubmit={handleLogin}>
          {/* email */}
          <div className="mb-4">
            <label
              htmlFor="fullname"
              className="mb-1 block text-sm font-medium text-white"
            >
              Username
            </label>
            <input
              type="username"
              id="fullname"
              name="fullname"
              className="block w-full rounded-md text-white border  border-gray-300 placeholder:text-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Masukkan nama panjang"
              required
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          {/* password */}
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-1 block text-sm font-medium text-white"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="block w-full rounded-md text-white border border-gray-300 placeholder:text-white px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              placeholder="Masukkan password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="cursor-pointer mb-4 w-full justify-center rounded-lg bg-gray-900 px-4 py-2 text-base  text-white shadow-sm hover:bg-gray-950 transition ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Masuk
          </button>
        </form>
      </div>
    </div>
  );
}
