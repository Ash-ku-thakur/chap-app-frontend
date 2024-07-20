import { CiSearch } from "react-icons/ci";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setAuthUser, setOtherUsers } from "../redux/userSlicer";
import { useState } from "react";

// main sideBar
const Sidebar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();
  let { copyOfOtherUsers } = useSelector((state) => state?.user);
  console.log(copyOfOtherUsers);

  let [search, setSearch] = useState("");

  // logged out handler
  let loggoutHandler = async () => {
    try {
      let response = await axios.get(
        `http://localhost:8080/api/v1/user/logout`
      );
      if (response?.data?.success) {
        dispatch(setAuthUser(null));
        dispatch(setOtherUsers(null));
        navigate("/login");

        toast.success(response?.data?.massage);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  // search functionality works here
  let searchUserHandler = (e) => {
    e?.preventDefault();
    // alert(search);
    let ch = copyOfOtherUsers?.filter((el) =>
      el?.name?.toLowerCase()?.includes(search)
    );
    console.log(ch);

    if (ch) {
      dispatch(setOtherUsers(ch));
    } else {
      // error set up
      toast.error("user not found");
    }
  };
  return (
    // flex flxe-col  sabhi ko ek col me rekh raha hai joki default rakhta hihai meger
    // OtherUsers joki overflow-auto hai es ki vajaha se firkh dikega
    <div className="border-r border-slate-300 p-4 flex flex-col">
      {/* search bar */}
      
      <form onSubmit={searchUserHandler} className="flex items-center gap-1">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e?.target?.value)}
          className="input input-bordered rounded-md"
          placeholder="search..."
        />

        <button type="submit" className="btn">
          <CiSearch size="24px" className="outline-none" />
        </button>
      </form>

      <hr className="my-4" />

      {/*other users */}
      <OtherUsers />

      {/* button */}
      <div className="my-2">
        <button onClick={loggoutHandler} className="btn btn-sm">
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
