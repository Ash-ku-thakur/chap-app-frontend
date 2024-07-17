import { useDispatch, useSelector } from "react-redux";
import { setSelectedUser } from "../redux/userSlicer";

const OtherUserRaper = ({ data }) => {
  let dispatch = useDispatch();
  let { selectedUser } = useSelector((state) => state?.user);

  let selectedUserHandler = (selUser) => {
    dispatch(setSelectedUser(selUser));
  };
  return (
    // sidebar users profilePhoto and name

    <div onClick={() => selectedUserHandler(data)}>
      <div
        className={`${
          data?._id == selectedUser?._id ? "bg-slate-200 text-black" : ""
        } flex items-center gap-2 cursor-pointer hover:bg-slate-200 hover:text-black rounded-2xl px-3`}
      >
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src={`${data?.profilePhoto}`} alt="" />
          </div>
        </div>
        <div>
          <p>{data?.name}</p>
        </div>
      </div>
      <hr className="my-2" />
    </div>
  );
};

export default OtherUserRaper;
