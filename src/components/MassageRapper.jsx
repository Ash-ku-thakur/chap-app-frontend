import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const MassageRapper = ({ massage }) => {
  // console.log(massage);
  let scroll = useRef();

  let { authUser, selectedUser } = useSelector((state) => state?.user);

  useEffect(() => {
    scroll?.current?.lastElementChild?.scrollIntoView({ behavior: "smooth" });
  }, []);

  // massage show ker raha hai
  return (
    <div className="my-2">
      <div
        className={`chat ${
          authUser?._id == massage?.senderId ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={`${
                massage?.senderId == authUser?._id
                  ? authUser?.profilePhoto
                  : selectedUser?.profilePhoto
              }`}
            />
          </div>
        </div>
        <div className="chat-bubble">{massage?.massage}</div>
      </div>
    </div>
  );
};

export default MassageRapper;
