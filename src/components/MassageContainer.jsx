import { useSelector } from "react-redux";
import SendInput from "./SendInput";
import Massages from "./Massages";

const MassageContainer = () => {
  let { selectedUser } = useSelector((state) => state?.user);

  return (
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

      

      <Massages />

      <SendInput />
    </div>
  );
};

export default MassageContainer;
