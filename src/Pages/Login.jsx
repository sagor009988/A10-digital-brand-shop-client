import React, { useState } from "react";
import Swal from 'sweetalert2'
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/AuthProvider/AuthProvider";


const Login = () => {
  const [show, setShow] = useState(false);
  const { signIn, google } = useContext(AuthContext);
  const location = useLocation();
  const naviGate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    if (!email) {
      // return  swal("warning", "email is not valid .plz input valid email", "warning");
    }
    const password = form.get("password");

    // login setup
    signIn(email, password)
      .then((res) => {
        console.log(res.user);

        naviGate("/");
      })
      .catch((error) => {
        Swal.fire('please input currect email and password!')
      });
  };
  const handleGoogle = () => {
    google()
      .then((res) => {
        naviGate("/");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <h1 className="text-4xl bg-slate-700 text-white  text-center rounded-md font-bold">
            Login Here
          </h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                className="absolute top-12 right-6"
                onClick={() => setShow(!show)}
              >
                {show ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
              </span>

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button
            onClick={handleGoogle}
            className="btn text-blue-600 btn-outline text-lg w-full"
          >
            <FaGoogle></FaGoogle>
            Google
          </button>

          <p className="pb-4 text-center">
            Don't Have an account?
            <Link className="ml-2 text-blue-600 font-bold " to={"/register"}>
              register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
