import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  let [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  let navigate = useNavigate();

  let handleBox = (gender) => {
    // console.log(user?.gender);
    setUser({ ...user, gender });
  };

  let formSubmitHandler = async (e) => {
    e?.preventDefault();
    try {
      let response = await axios.post(
        `http://localhost:8080/api/v1/user/register`,
        user,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      console.log(response);
      if (response?.data?.success) {
        navigate("/login");
        toast.success(response?.data?.massage);
      }
      // console.log(user);
      setUser({
        name: "",
        username: "",
        password: "",
        confirmPassword: "",
        gender: "",
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-sm bg-gray-300  bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-50 border border-gray-100">
        <h1 className="text-3xl font-bold text-center ">Sign Up</h1>
        <form action="" onSubmit={formSubmitHandler}>
          {/* name */}
          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">name</span>
            </label>

            <input
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e?.target?.value })}
              type="text"
              className="w-full input input-bordered h-10"
              placeholder="uername"
            />
          </div>

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
              placeholder="username"
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

          <div>
            <label htmlFor="" className="label p-2">
              <span className="text-base label-text">confirmPassword</span>
            </label>

            <input
              value={user.confirmPassword}
              onChange={(e) =>
                setUser({ ...user, confirmPassword: e?.target?.value })
              }
              type="password"
              className="w-full input input-bordered h-10"
              placeholder="password"
            />
          </div>

          {/* gender */}

          <div className="flex items-center my-2">
            <div className="flex items-center ">
              <p>mail</p>
              <input
                checked={user?.gender == "mail"}
                onChange={() => handleBox("mail")}
                type="checkbox"
                defaultChecked
                className="checkbox"
              />
            </div>
            <div className="flex items-center">
              <p>femail</p>
              <input
                checked={user?.gender == "femail"}
                onChange={() => handleBox("femail")}
                type="checkbox"
                defaultChecked
                className="checkbox"
              />
            </div>
          </div>

          <p className="text-center my-2">
            Already have an account?
            <Link to={`/login`} className="text-blue-700">
              Sign up
            </Link>
          </p>

          <div>
            <button
              type="submit"
              className="btn btn-block btn-md mt-2 border border-slate-700"
            >
              sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
