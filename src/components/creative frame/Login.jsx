import { useScroll } from "framer-motion";
import React, { useState } from "react";
import authService from "../../Appwrite/appwrite";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [data, setData] = useState({ email: "", password: "" });
  const handleSubmit = async () => {
    // setData();
    try {
      const user = await authService.login(data);
      console.log(user?.$id);
      if (user) navigate("/upload");
    } catch (err) {
      console.log(err);
    }
  };
  console.log(data);
  return (
    <div className="flex flex-col h-screen  items-center">
      <label className="text-white">Email</label>
      <input
        type="text"
        placeholder="email"
        className="w-64 p-2"
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <br />
      <label className="text-white">Password</label>
      <input
        type="password"
        placeholder="password"
        className="w-64 p-2"
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button
        className="p-3 bg-slate-500 rounded-md m-2"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default Login;
