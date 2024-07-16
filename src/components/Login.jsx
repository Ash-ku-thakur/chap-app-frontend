import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../redux/userSlicer";

const Login = () => {
  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  let navigate = useNavigate();
  let dispatch = useDispatch();

  let formSubmitHandler = async (e) => {
    e?.preventDefault();
    try {
      let response = await axios.post(
        `http://localhost:8080/api/v1/user/login`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      dispatch(setAuthUser(response?.data?.user))

      if (response?.data?.success) {
        navigate("/homePage");
        toast.success(response?.data?.massage);
      }

      setUser({
        username: "",
        password: "",
      });
    } catch (error) {
      toast.error(error?.response?.data?.massage);
      console.log(error);
    }
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-sm bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
        <h1 className="text-3xl font-bold text-center ">Log in</h1>
        <form action="" onSubmit={formSubmitHandler}>
          {/* username */}
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">username</span>
            </label>

            <input
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e?.target?.value })}
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="uername"
            />
          </div>

          {/* password */}

          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>

            <input
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e?.target?.value })}
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="password"
            />
          </div>

          <p className="text-center my-2">
            Don't have an account?
            <Link to={`/`} className="text-blue-700">
              Sign up
            </Link>
          </p>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-md mt-2 border border-slate-700"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
