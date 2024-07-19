import { useDispatch, useSelector } from "react-redux";
import SendInput from "./SendInput";
import Massages from "./Massages";
import { useEffect } from "react";
import { setSelectedUser } from "../redux/userSlicer";

const MassageContainer = () => {
  let { selectedUser, authUser } = useSelector((state) => state?.user);
  let dispatch = useDispatch();

  useEffect(() => {
    // clean up logic
    return () => {
      dispatch(setSelectedUser(null));
    };
  }, []);

  return (
    <div>
      {selectedUser ? ( // if selecterUser present
        <div className="md:min-w-[450px] flex flex-col">
          {/* selected User */}
          <div className="flex items-center gap-2 cursor-pointer bg-gray-600 text-white rounded-xl px-3">
            <div className="avatar online">
              <div className="w-14 rounded-full">
                <img src={`${selectedUser?.profilePhoto}`} alt="" />
              </div>
            </div>
            <div>
              <p>{selectedUser?.name}</p>
            </div>
          </div>
          <hr className="my-2" />
          {/* all massages */}
          <Massages />

          <SendInput />
        </div>
      ) : (
        // if selecterUser not present
        <div className="md:min-w-[450px] h-[450px] flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white">hi {authUser?.name}</h1>
          <h1 className="text-2xl text-white">Let's start conversation</h1>
          <h1 className="text-2xl text-white">please select</h1>
        </div>
      )}
    </div>
  );
};

export default MassageContainer;
