import { CiSearch } from "react-icons/ci";
import OtherUsers from "./OtherUsers";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser, setOtherUsers } from "../redux/userSlicer";

// main sideBar
const Sidebar = () => {
  let navigate = useNavigate();
  let dispatch = useDispatch();

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
  return (
    // flex flxe-col  sabhi ko ek col me rekh raha hai joki default rakhta hihai meger
    // OtherUsers joki overflow-auto hai es ki vajaha se firkh dikega
    <div className="border-r border-slate-300 p-4 flex flex-col">
      {/* search bar */}
      <form action="" className="flex items-center gap-1">
        <input
          type="text"
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